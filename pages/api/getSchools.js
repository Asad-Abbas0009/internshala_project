import pool from "./db";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const [rows] = await pool.query(
      "SELECT id, name, address, city, image FROM schools ORDER BY id DESC"
    );
    res.status(200).json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
