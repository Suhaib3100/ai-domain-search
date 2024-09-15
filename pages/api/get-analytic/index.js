import fs from "fs";
import path from "path";
const filePath = path.join(
  process.cwd(),
  "pages",
  "api",
  "admin-credential",
  "admin-credential.json"
);
export default async function handler(req, res) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const credential = JSON.parse(data);

    res.json({
      analyticId: credential.analyticId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error reading from file" });
  }
}

export const config = { api: { externalResolver: true } };
