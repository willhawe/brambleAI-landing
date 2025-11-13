import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = path.resolve(__dirname, "../src/assets/card-preview.svg");
const output = path.resolve(__dirname, "../public/og-image.png");

const svg = await readFile(input);

await sharp(svg)
  .resize(1200, 630, {
    fit: "contain",
    background: "#020617",
  })
  .png({ quality: 100 })
  .toFile(output);

console.log(`Open Graph image generated at ${output}`);
