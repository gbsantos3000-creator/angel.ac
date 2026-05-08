import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { pin } = req.query;

  if (!pin) {
    return res.status(400).json({
      error: "PIN missing",
    });
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "downloads",
    "angel-scanner.exe"
  );

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      error: "Scanner file not found",
    });
  }

  res.setHeader(
    "Content-Disposition",
    `attachment; filename="ANGEL-AC-Scanner-${pin}.exe"`
  );

  res.setHeader(
    "Content-Type",
    "application/octet-stream"
  );

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}
