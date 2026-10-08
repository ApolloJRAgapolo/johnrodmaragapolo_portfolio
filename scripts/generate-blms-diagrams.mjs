import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const assetRoot = new URL("public/case-files/blms/", root);
const originals = [
  ["conceptual-framework", "BLMS CONCEPTUAL FRAMEWORK.png"],
  ["methodology", "BLMS METHODOLOGY.png"],
  ["use-case", "BLMS-USE CASE.png"],
  ["class-diagram", "BLMS CLASS DIAGRAM.png"],
  ["deployment", "BLMS DEPLOYMENT DIAGRAM.png"],
  ["security", "BLMS-BLMS SECURITY DIAGRAM.png"],
  ["farmer-workflow", "BLMS-ACTIVITY DIAGRAM - FARMER.png"],
  ["barangay-da-workflow", "BLMS-ACTIVITY DIAGRAM - BRGY DA REP.png"],
  ["veterinarian-workflow", "BLMS-ACTIVITY DIAGRAM - MAO VET.png"],
  ["mao-head-workflow", "BLMS-ACTIVITY DIAGRAM - MAO HEAD.png"],
  ["auction-market-workflow", "BLMS-ACTIVITY DIAGRAM - AUCTION MARKET STAFF.png"],
];
const assets = {};
const hash = (buffer) => createHash("sha256").update(buffer).digest("hex");

await mkdir(new URL("previews/", assetRoot), { recursive: true });
await mkdir(new URL("display/", assetRoot), { recursive: true });

// Process sequentially: several source diagrams exceed 100 megapixels.
for (const [id, originalFilename] of originals) {
  const original = await readFile(new URL(`originals/${id}.png`, assetRoot));
  const image = sharp(original, { limitInputPixels: 200_000_000 });
  const metadata = await image.metadata();
  const preview = await image.clone()
    .resize({ width: 1440, height: 1120, fit: "inside", withoutEnlargement: true })
    .webp({ lossless: true, effort: 5 })
    .toBuffer({ resolveWithObject: true });
  const display = await image.clone()
    .resize({ width: 4096, height: 4096, fit: "inside", withoutEnlargement: true })
    .webp({ lossless: true, effort: 5 })
    .toBuffer({ resolveWithObject: true });
  await writeFile(new URL(`previews/${id}.webp`, assetRoot), preview.data);
  await writeFile(new URL(`display/${id}.webp`, assetRoot), display.data);
  assets[id] = {
    originalFilename,
    original: { src: `/case-files/blms/originals/${id}.png`, width: metadata.width, height: metadata.height, sha256: hash(original) },
    preview: { src: `/case-files/blms/previews/${id}.webp`, width: preview.info.width, height: preview.info.height, sha256: hash(preview.data) },
    display: { src: `/case-files/blms/display/${id}.webp`, width: display.info.width, height: display.info.height, sha256: hash(display.data) },
  };
  console.log(`${id}: ${metadata.width}×${metadata.height} → ${display.info.width}×${display.info.height}`);
}

const manifest = new URL("lib/data/blms-diagram-assets.json", root);
await writeFile(manifest, `${JSON.stringify(assets, null, 2)}\n`);
console.log(`Saved ${originals.length} diagrams to ${fileURLToPath(assetRoot)}.`);
