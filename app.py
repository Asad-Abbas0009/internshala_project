from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse, JSONResponse
import cv2
import mediapipe as mp
import numpy as np

app = FastAPI(title="Posture Detection Service")

# --- CORS (loosened for local dev; tighten in prod) ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # e.g. ["http://localhost:3000"] in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pose setup ---
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(
    static_image_mode=True,          # single image per request
    model_complexity=1,
    enable_segmentation=False,
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5
)

@app.get("/health")
def health():
    return {"ok": True}

# --------------------------
# Utility helpers
# --------------------------
def _to_px(pt, w, h):
    # return (x_px, y_px, z_rel, visibility)
    return np.array([pt.x * w, pt.y * h, pt.z, pt.visibility], dtype=float)

def _avg_vis(lms, idxs):
    vals = [lms[i].visibility for i in idxs if 0 <= i < len(lms)]
    return float(np.mean(vals)) if vals else 0.0

def _first_available(landmarks, choices):
    """Return first available index from choices present in the landmark list."""
    for idx in choices:
        if 0 <= idx < len(landmarks):
            return idx
    return None

def _head_vs_feet_y(px, idx_head, idx_pairs_feet):
    """Compare head y with mean of available feet y (heels preferred, then ankles).
       Returns (is_head_first: bool|None, debug_msg: str)
    """
    ys = []
    for a, b in idx_pairs_feet:
        ya = px[a][1] if a is not None else np.nan
        yb = px[b][1] if b is not None else np.nan
        if not np.isnan(ya): ys.append(ya)
        if not np.isnan(yb): ys.append(yb)
    feet_y = np.nanmean(ys) if ys else np.nan
    head_y = px[idx_head][1] if idx_head is not None else np.nan
    if np.isnan(head_y) or np.isnan(feet_y):
        return None, "head/feet y not reliable"
    return (head_y < feet_y), f"head_y={head_y:.1f}, feet_y={feet_y:.1f}"

def classify_position(landmarks, image_shape):
    """
    Robust single-frame classifier for top-down camera:
      1) If strong L/R depth asymmetry (shoulders/hips Z): decubitus_left/right
      2) Else supine vs prone: face visibility vs torso visibility
      3) Head vs feet: nose.y vs heels/ankles.y
    """
    h, w = image_shape[:2]
    lms = landmarks  # convenience

    # --- Landmark indices ---
    NOSE = mp_pose.PoseLandmark.NOSE.value
    L_SH = mp_pose.PoseLandmark.LEFT_SHOULDER.value
    R_SH = mp_pose.PoseLandmark.RIGHT_SHOULDER.value
    L_HIP = mp_pose.PoseLandmark.LEFT_HIP.value
    R_HIP = mp_pose.PoseLandmark.RIGHT_HIP.value

    # Prefer heels; if not good, use ankles as fallback.
    L_HEEL = mp_pose.PoseLandmark.LEFT_HEEL.value
    R_HEEL = mp_pose.PoseLandmark.RIGHT_HEEL.value
    L_ANK = mp_pose.PoseLandmark.LEFT_ANKLE.value
    R_ANK = mp_pose.PoseLandmark.RIGHT_ANKLE.value

    # Build pixel arrays and visibility
    px = [_to_px(p, w, h) for p in lms]

    # --- Visibility aggregates ---
    FACE_IDXS = [
        mp_pose.PoseLandmark.NOSE.value,
        mp_pose.PoseLandmark.LEFT_EYE.value,
        mp_pose.PoseLandmark.RIGHT_EYE.value,
        mp_pose.PoseLandmark.LEFT_EAR.value,
        mp_pose.PoseLandmark.RIGHT_EAR.value,
    ]
    TORSO_IDXS = [L_SH, R_SH, L_HIP, R_HIP]

    face_vis = _avg_vis(lms, FACE_IDXS)
    torso_vis = _avg_vis(lms, TORSO_IDXS)

    # --- Lateral decubitus via Z-depth asymmetry of shoulders/hips ---
    # More negative z = closer to camera. Take mean of (L - R).
    z_pairs = []
    for (li, ri) in [(L_SH, R_SH), (L_HIP, R_HIP)]:
        if 0 <= li < len(px) and 0 <= ri < len(px):
            z_pairs.append(px[li][2] - px[ri][2])  # L - R
    z_delta = float(np.nanmean(z_pairs)) if z_pairs else 0.0
    # Margin: tune for your gantry height. 0.05–0.10 typical.
    Z_MARGIN = 0.06
    decubitus_label = None
    if abs(z_delta) > Z_MARGIN:
        # If L-R positive, right side closer => decubitus_right (patient lying on right side)
        decubitus_label = "decubitus_right" if z_delta > 0 else "decubitus_left"

    # --- Head vs Feet (use heels if possible, else ankles) ---
    head_first = None
    head_first_dbg = ""
    if 0 <= NOSE < len(px):
        # try heels first
        lf = L_HEEL if 0 <= L_HEEL < len(px) else None
        rf = R_HEEL if 0 <= R_HEEL < len(px) else None
        head_first, head_first_dbg = _head_vs_feet_y(px, NOSE, [(lf, rf)])
        if head_first is None:
            # fallback to ankles
            la = L_ANK if 0 <= L_ANK < len(px) else None
            ra = R_ANK if 0 <= R_ANK < len(px) else None
            head_first, head_first_dbg = _head_vs_feet_y(px, NOSE, [(la, ra)])

    # --- Supine vs Prone via face visibility vs torso ---
    # Thresholds tuned for top-down; tweak with your data if needed
    FACE_SUPINE_BIAS = 0.35
    PRONE_BASE = 0.5
    TORSO_MIN = 0.3

    supine_score = face_vis - FACE_SUPINE_BIAS
    prone_score = (PRONE_BASE - face_vis) + max(torso_vis - TORSO_MIN, 0.0)
    is_supine = supine_score > prone_score

    # --- Confidence: based on visible keypoints + signal strength ---
    key_idxs = [NOSE, L_SH, R_SH, L_HIP, R_HIP, L_ANK, R_ANK, L_HEEL, R_HEEL]
    visible_cnt = sum(1 for i in key_idxs if 0 <= i < len(lms) and lms[i].visibility > 0.5)
    base_conf = min(1.0, 0.12 * visible_cnt)

    # --- Final label decision ---
    why_bits = [
        f"face_vis={face_vis:.2f}",
        f"torso_vis={torso_vis:.2f}",
        f"z_delta={z_delta:.3f}",
        f"vis_keys={visible_cnt}",
        head_first_dbg or "",
    ]

    if decubitus_label is not None:
        conf = base_conf * (0.80 + min(abs(z_delta) * 2.0, 0.2))  # bump with stronger asymmetry
        label = decubitus_label
        # Human-friendly text:
        position = f"{'Head First' if (head_first is True) else ('Feet First' if (head_first is False) else 'Unknown')} " \
                   f"{'Decubitus Right' if label=='decubitus_right' else 'Decubitus Left'}"
        return {
            "position": position,
            "label": label,
            "confidence": round(float(conf), 3),
            "why": ", ".join([b for b in why_bits if b]),
        }

    # If we can't tell head/feet, degrade gracefully
    if head_first is None:
        label = "unknown"
        conf = 0.25 * base_conf
        return {
            "position": "Unknown",
            "label": label,
            "confidence": round(float(conf), 3),
            "why": "head/feet unreliable; " + ", ".join([b for b in why_bits if b]),
        }

    if is_supine:
        label = "head_first_supine" if head_first else "feet_first_supine"
        posture_txt = "Supine"
    else:
        label = "head_first_prone" if head_first else "feet_first_prone"
        posture_txt = "Prone"

    position = f"{'Head First' if head_first else 'Feet First'} {posture_txt}"
    face_term = max(0.0, min(face_vis, 1.0))
    conf = base_conf * (0.75 + 0.25 * face_term)

    return {
        "position": position,
        "label": label,
        "confidence": round(float(conf), 3),
        "why": ", ".join([b for b in why_bits if b]),
    }

# --------------------------
# /analyze endpoint
# --------------------------
@app.post("/analyze")
async def analyze(image: UploadFile = File(...)):
    try:
        data = await image.read()
        arr = np.frombuffer(data, np.uint8)
        img = cv2.imdecode(arr, cv2.IMREAD_COLOR)
        if img is None:
            return JSONResponse({"error": "invalid_image"}, status_code=400)

        results = pose.process(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
        if not results.pose_landmarks or not results.pose_landmarks.landmark:
            return {"position": "No person detected", "label": "unknown", "confidence": 0.0, "why": "no_pose"}

        out = classify_position(results.pose_landmarks.landmark, img.shape)
        # Keep backward-compat 'position' while also returning rich fields
        return out
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

# --------------------------
# OPTIONAL: video streaming (same as your original)
# --------------------------
camera = cv2.VideoCapture(0)

def gen_frames():
    while True:
        success, frame = camera.read()
        if not success:
            break
        _, buffer = cv2.imencode(".jpg", frame)
        yield (b"--frame\r\n"
               b"Content-Type: image/jpeg\r\n\r\n" + buffer.tobytes() + b"\r\n")

@app.get("/video_feed")
async def video_feed():
    return StreamingResponse(gen_frames(), media_type="multipart/x-mixed-replace; boundary=frame")
