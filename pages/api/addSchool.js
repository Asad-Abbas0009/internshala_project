import formidable from "formidable";
import fs from "fs/promises";
import pool from "./db";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const config = { api: { bodyParser: false } };

// Initialize S3 client with explicit credentials
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

function sanitizeFilename(name = "upload") {
  return name
    .toString()
    .replace(/[^\w.\-() ]+/g, "")
    .replace(/\s+/g, "_")
    .slice(0, 80);
}

function publicUrlForKey(key) {
  if (process.env.S3_PUBLIC_BASE) return `${process.env.S3_PUBLIC_BASE}/${key}`;
  const bucket = process.env.S3_BUCKET;
  const region = process.env.AWS_REGION;
  return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = formidable({ multiples: false, keepExtensions: true });

  return new Promise((resolve) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(400).json({ error: "Invalid form data" });
        return resolve();
      }

      try {
        const { name, address, city, state, contact, email } = fields;
        let file = Array.isArray(files.image) ? files.image[0] : files.image;
        if (!file) return res.status(400).json({ error: "Image file is required" });

        const buffer = await fs.readFile(file.filepath);
        const original = sanitizeFilename(file.originalFilename || "image.png");
        const key = `schoolImages/${Date.now()}_${original}`;

        // Upload to S3
        await s3.send(
          new PutObjectCommand({
            Bucket: process.env.S3_BUCKET,
            Key: key,
            Body: buffer,
            ContentType: file.mimetype || "application/octet-stream",
          })
        );

        // Clean up temp file
        await fs.unlink(file.filepath).catch(() => {});

        const imageUrl = publicUrlForKey(key);

        // Insert into MySQL
        await pool.query(
          "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [name, address, city, state, contact, email, imageUrl]
        );

        res.status(200).json({ message: "School added successfully!", imageUrl });
        return resolve();
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message || "Upload failed" });
        return resolve();
      }
    });
  });
}
