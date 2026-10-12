import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const assetRoot = new URL("public/case-files/pricepulse/mockups/", root);
const manifestUrl = new URL("lib/data/pricepulse-mockup-assets.json", root);
const sourceOption = process.argv.indexOf("--source-dir");
if (sourceOption !== -1 && !process.argv[sourceOption + 1]) {
  throw new Error("--source-dir requires the supplied PricePulse device-mockups folder containing paired/.");
}
const sourceRoot = sourceOption === -1 ? null : resolve(process.argv[sourceOption + 1]);
const checkOnly = process.argv.includes("--check");
const screens = [
  { id: "explore", title: "Explore Food Prices", sourceFilename: "paired/01-explore.png" },
  { id: "compare", title: "Compare Locations", sourceFilename: "paired/02-compare.png" },
  { id: "basket", title: "Household Basket", sourceFilename: "paired/03-basket.png" },
  { id: "analysis", title: "Analysis Coverage", sourceFilename: "paired/04-analysis.png" },
  { id: "methodology", title: "Data & Methods", sourceFilename: "paired/05-methodology.png" },
];
const sha256 = (buffer) => createHash("sha256").update(buffer).digest("hex");
const pixels = (buffer) => sharp(buffer).ensureAlpha().raw().toBuffer();
const existing = checkOnly ? JSON.parse(await readFile(manifestUrl, "utf8")) : null;
const manifest = {
  method: "Import the supplied finished desktop-and-phone paired PNG mockups unchanged; encode lossless WebP copies without cropping, resizing, or adding frames.",
  presentation: "paired",
  canvas: { width: 3200, height: 2320 },
  screens: [],
};

if (!checkOnly) await mkdir(assetRoot, { recursive: true });
if (existing && existing.screens.length !== screens.length) {
  throw new Error("The asset manifest does not match the selected screen count.");
}

for (const [index, screen] of screens.entries()) {
  const pngUrl = new URL(`${screen.id}.png`, assetRoot);
  const webUrl = new URL(`${screen.id}.webp`, assetRoot);
  // The portfolio stores exact copies of the supplied finished PNGs, allowing
  // WebP regeneration without the external kit or any additional framing.
  const sourcePath = sourceRoot ? resolve(sourceRoot, screen.sourceFilename) : pngUrl;
  const source = await readFile(sourcePath);
  const sourceHash = sha256(source);
  const metadata = await sharp(source).metadata();
  if (metadata.format !== "png" || metadata.width !== manifest.canvas.width || metadata.height !== manifest.canvas.height) {
    throw new Error(`${screen.id}: expected the supplied 3200 x 2320 paired PNG.`);
  }
  if (!(await sharp(source).stats()).isOpaque) {
    throw new Error(`${screen.id}: use the neutral-background PNG, not the transparent variant.`);
  }

  const master = checkOnly ? await readFile(pngUrl) : source;
  const web = checkOnly
    ? await readFile(webUrl)
    : await sharp(source).webp({ lossless: true, effort: 6 }).toBuffer();
  const webMetadata = await sharp(web).metadata();
  if (!master.equals(source)) throw new Error(`${screen.id}: PNG differs from the supplied mockup.`);
  if (webMetadata.width !== metadata.width || webMetadata.height !== metadata.height) {
    throw new Error(`${screen.id}: WebP dimensions differ from the supplied PNG.`);
  }
  if (!(await pixels(source)).equals(await pixels(web))) {
    throw new Error(`${screen.id}: WebP pixels differ from the supplied PNG.`);
  }
  if (sha256(await readFile(sourcePath)) !== sourceHash) {
    throw new Error(`${screen.id}: source changed during import.`);
  }

  const entry = {
    ...screen,
    source: { ...manifest.canvas, sha256: sourceHash },
    master: { src: `/case-files/pricepulse/mockups/${screen.id}.png`, ...manifest.canvas, bytes: master.length, sha256: sha256(master) },
    web: { src: `/case-files/pricepulse/mockups/${screen.id}.webp`, ...manifest.canvas, bytes: web.length, sha256: sha256(web) },
    verification: { sourceUnchanged: true, masterBytesIdentical: true, dimensionsPreserved: true, webEncodingLossless: true },
  };
  if (checkOnly) {
    if (JSON.stringify(existing.screens[index]) !== JSON.stringify(entry)) {
      throw new Error(`${screen.id}: exported files do not match the asset manifest.`);
    }
  } else {
    await writeFile(pngUrl, master);
    await writeFile(webUrl, web);
  }
  manifest.screens.push(entry);
  console.log(`${screen.title}: original PNG unchanged; WebP pixels verified; ${Math.round(web.length / 1024)} KB.`);
}

if (checkOnly) {
  if (JSON.stringify(existing) !== JSON.stringify(manifest)) {
    throw new Error("The asset manifest does not match the supplied-mockup import method.");
  }
  console.log(`Verified all ${screens.length} paired mockups and their lossless web exports.`);
} else {
  await writeFile(manifestUrl, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Imported ${screens.length} paired mockups. Rebuild from these PNGs with this script, or use --check to verify them.`);
}
