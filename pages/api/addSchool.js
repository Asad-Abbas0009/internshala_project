import formidable from "formidable";
import fs from "fs";
import path from "path";
import pool from "./db";

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const uploadDir = path.join(process.cwd(), "public/schoolImages");
  fs.mkdirSync(uploadDir, { recursive: true });

  const form = formidable({ multiples: false, uploadDir, keepExtensions: true });

  return new Promise((resolve) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: "Upload failed" });
        return resolve();
      }

      try {
        const { name, address, city, state, contact, email } = fields;

        let file = files.image;
        if (Array.isArray(file)) file = file[0];

        if (!file) {
          res.status(400).json({ error: "Image file is required" });
          return resolve();
        }

        const fileName = Date.now() + "_" + (file.originalFilename || "upload.png");
        const finalPath = path.join(uploadDir, fileName);
        fs.renameSync(file.filepath, finalPath);

        const imageUrl = "/schoolImages/" + fileName;

        await pool.query(
          "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [name, address, city, state, contact, email, imageUrl]
        );

        res.status(200).json({ message: "School added successfully!" });
        return resolve();
      } catch (e) {
        res.status(500).json({ error: e.message });
        return resolve();
      }
    });
  });
}
