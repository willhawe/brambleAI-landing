import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "../dist");
const indexPath = path.join(distDir, "index.html");
const fallbackPath = path.join(distDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("[create-404] dist/index.html is missing. Run `npm run build` first.");
  process.exit(1);
}

fs.copyFileSync(indexPath, fallbackPath);
console.log("[create-404] Created GitHub Pages SPA fallback at dist/404.html");
