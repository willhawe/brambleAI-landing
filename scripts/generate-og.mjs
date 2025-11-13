import { unlink } from "node:fs/promises";
import { promisify } from "node:util";
import { execFile } from "node:child_process";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = path.resolve(__dirname, "../Thumbnail.pdf");
const output = path.resolve(__dirname, "../public/og-image.png");
const execFileAsync = promisify(execFile);
const tempPng = path.join(os.tmpdir(), `bramble-og-${Date.now()}.png`);

try {
  try {
    await execFileAsync("sips", ["-s", "format", "png", input, "--out", tempPng]);
  } catch (error) {
    console.error("Failed to rasterize Thumbnail.pdf. The `sips` tool is required (available on macOS).");
    throw error;
  }

  await sharp(tempPng)
    .resize(1200, 630, {
      fit: "cover",
      position: "center",
    })
    .png({ quality: 100 })
    .toFile(output);

  console.log(`Open Graph image generated at ${output}`);
} finally {
  await unlink(tempPng).catch(() => {});
}
