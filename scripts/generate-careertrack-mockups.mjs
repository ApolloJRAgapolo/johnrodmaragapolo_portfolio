import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const assetRoot = new URL("public/case-files/careertrack/", root);
const reviewRoot = new URL("../careertrack-screenshots/", root);
const sourceOption = process.argv.indexOf("--source-dir");
if (sourceOption !== -1 && !process.argv[sourceOption + 1]) {
  throw new Error("--source-dir requires the folder containing the original screenshots.");
}
const externalSource = sourceOption === -1 ? null : resolve(process.argv[sourceOption + 1]);
const screens = [
  { id: "opportunity-desk", title: "Opportunity Desk", filename: "Screenshot 2026-10-07 222203.png" },
  { id: "applications", title: "Applications", filename: "Screenshot 2026-10-07 222213.png" },
  { id: "pipeline", title: "Pipeline", filename: "Screenshot 2026-10-07 222225.png" },
  { id: "insights", title: "Insights", filename: "Screenshot 2026-10-07 222243.png" },
];

// Screenshots are placed at native resolution. Only the empty outer side gutters
// are trimmed; the original app navigation, content, type, and data remain intact.
const stageCanvas = { width: 1920, height: 1200 };
const viewport = { left: 192, top: 169, width: 1536, height: 910 };
const window = { left: 184, top: 113, width: 1552, height: 974, radius: 14 };
const canvas = { width: window.width, height: window.height };
const sha256 = (buffer) => createHash("sha256").update(buffer).digest("hex");
const svgBuffer = (markup) => Buffer.from(markup);
const frame = svgBuffer(`<svg xmlns="http://www.w3.org/2000/svg" width="${stageCanvas.width}" height="${stageCanvas.height}" viewBox="0 0 ${stageCanvas.width} ${stageCanvas.height}">
  <defs>
    <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#24272a"/><stop offset="1" stop-color="#1b1e21"/>
    </linearGradient>
    <filter id="shadow" x="-15%" y="-20%" width="130%" height="150%">
      <feGaussianBlur stdDeviation="20"/>
    </filter>
    <clipPath id="window">
      <rect x="${window.left}" y="${window.top}" width="${window.width}" height="${window.height}" rx="${window.radius}"/>
    </clipPath>
  </defs>
  <rect width="1920" height="1200" fill="#0a0a0a"/>
  <rect x="184" y="137" width="1552" height="974" rx="14" fill="#000000" opacity=".7" filter="url(#shadow)"/>
  <rect x="184" y="113" width="1552" height="974" rx="14" fill="#202326"/>
  <rect x="184" y="113" width="1552" height="56" fill="url(#chrome)" clip-path="url(#window)"/>
  <path d="M185 169 H1735" stroke="#303337"/>
  <g fill="#777d83">
    <circle cx="212" cy="141" r="5"/>
    <circle cx="230" cy="141" r="5"/>
    <circle cx="248" cy="141" r="5"/>
  </g>
  <g fill="none" stroke="#858b91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M288 134 L281 141 L288 148 M281 141 H296"/>
    <path d="M317 134 L324 141 L317 148 M309 141 H324" opacity=".45"/>
    <path d="M354 137 A7 7 0 1 0 354 145 M354 132 V138 H348"/>
  </g>
  <rect x="382" y="125" width="1236" height="32" rx="8" fill="#151719" stroke="#34383c"/>
  <g fill="none" stroke="#969da4" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
    <rect x="398" y="139" width="9" height="8" rx="1.3"/>
    <path d="M400 139 V136 A2.5 2.5 0 0 1 405 136 V139"/>
  </g>
  <text x="418" y="146" fill="#cbd0d5" font-family="Segoe UI, Arial, sans-serif" font-size="14">careertrack-ops.vercel.app</text>
  <g fill="#858b91"><circle cx="1684" cy="136" r="1.5"/><circle cx="1684" cy="141" r="1.5"/><circle cx="1684" cy="146" r="1.5"/></g>
  <rect x="192" y="169" width="1536" height="910" fill="#f4f6f3"/>
  <rect x="184.5" y="113.5" width="1551" height="973" rx="13.5" fill="none" stroke="#3a3e42"/>
</svg>`);

await mkdir(new URL("originals/", assetRoot), { recursive: true });
await mkdir(new URL("mockups/", assetRoot), { recursive: true });
await mkdir(reviewRoot, { recursive: true });

const manifest = {
  method: "Native screenshot compositing with a code-drawn browser frame, cropped to the browser window without an outer backdrop; no generated or redrawn app UI.",
  address: "careertrack-ops.vercel.app",
  canvas,
  browserWindow: { ...window, left: 0, top: 0 },
  viewport: { ...viewport, left: viewport.left - window.left, top: viewport.top - window.top },
  screens: [],
};
const contactLayers = [];

for (const [index, screen] of screens.entries()) {
  const originalUrl = new URL(`originals/${screen.id}.png`, assetRoot);
  const sourcePath = externalSource ? resolve(externalSource, screen.filename) : originalUrl;
  const original = await readFile(sourcePath);
  const originalHash = sha256(original);
  const metadata = await sharp(original).metadata();
  if (!metadata.width || !metadata.height || metadata.width < viewport.width || metadata.height > viewport.height) {
    throw new Error(`${screen.id}: source does not fit the native screenshot viewport.`);
  }
  const crop = {
    left: Math.floor((metadata.width - viewport.width) / 2),
    top: 0,
    width: viewport.width,
    height: metadata.height,
  };
  const content = await sharp(original).extract(crop).png().toBuffer();
  const stagePlacement = { left: viewport.left, top: viewport.top + Math.floor((viewport.height - metadata.height) / 2) };
  const placement = { left: stagePlacement.left - window.left, top: stagePlacement.top - window.top };
  const staged = await sharp(frame)
    .composite([{ input: content, ...stagePlacement }])
    .png()
    .toBuffer();
  // Export only the browser window, so the portfolio can display the UI at its
  // full available width without a black presentation canvas surrounding it.
  const master = await sharp(staged)
    .extract({ left: window.left, top: window.top, width: window.width, height: window.height })
    .png({ compressionLevel: 9 })
    .toBuffer();

  // Check the rendered screen area against the exact original pixels before
  // writing assets. This catches an accidental resize, tint, or UI overlay.
  const expected = await sharp(original).extract(crop).removeAlpha().raw().toBuffer();
  const actual = await sharp(master)
    .extract({ ...placement, width: crop.width, height: crop.height })
    .removeAlpha().raw().toBuffer();
  if (!expected.equals(actual)) throw new Error(`${screen.id}: screenshot pixels changed during composition.`);

  const web = await sharp(master)
    .webp({ lossless: true, effort: 6 })
    .toBuffer();
  const webExpected = await sharp(master).removeAlpha().raw().toBuffer();
  const webActual = await sharp(web).removeAlpha().raw().toBuffer();
  if (!webExpected.equals(webActual)) throw new Error(`${screen.id}: web export failed lossless verification.`);
  if (sha256(await readFile(sourcePath)) !== originalHash) throw new Error(`${screen.id}: source changed during export.`);

  if (externalSource) await writeFile(originalUrl, original);
  const pngUrl = new URL(`mockups/${screen.id}.png`, assetRoot);
  const webUrl = new URL(`mockups/${screen.id}.webp`, assetRoot);
  await writeFile(pngUrl, master);
  await writeFile(webUrl, web);
  manifest.screens.push({
    id: screen.id,
    title: screen.title,
    sourceFilename: screen.filename,
    original: { src: `/case-files/careertrack/originals/${screen.id}.png`, width: metadata.width, height: metadata.height, sha256: originalHash },
    crop,
    placement,
    master: { src: `/case-files/careertrack/mockups/${screen.id}.png`, ...canvas, bytes: master.length, sha256: sha256(master) },
    web: { src: `/case-files/careertrack/mockups/${screen.id}.webp`, ...canvas, bytes: web.length, sha256: sha256(web) },
    verification: { sourceUnchanged: true, nativeScreenshotPixelsIdentical: true, webEncodingLossless: true },
  });

  contactLayers.push({
    input: await sharp(master).resize({ width: 960, height: 600, fit: "inside" }).png().toBuffer(),
    left: 48 + (index % 2) * 992,
    top: 32 + Math.floor(index / 2) * 696,
  });
  console.log(`${screen.title}: ${metadata.width} x ${metadata.height} original; exact screenshot pixels verified; PNG ${Math.round(master.length / 1024)} KB, WebP ${Math.round(web.length / 1024)} KB.`);
}

const labels = screens.map((screen, index) => `<text x="${48 + (index % 2) * 992}" y="${665 + Math.floor(index / 2) * 696}" fill="#b2b8be" font-family="Segoe UI, Arial, sans-serif" font-size="22">${screen.title}</text>`).join("");
const contactSheet = await sharp(svgBuffer(`<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1400"><rect width="2048" height="1400" fill="#0a0a0a"/>${labels}</svg>`))
  .composite(contactLayers)
  .png({ compressionLevel: 9 })
  .toBuffer();
await writeFile(new URL("careertrack-mockups.png", reviewRoot), contactSheet);
await writeFile(new URL("lib/data/careertrack-mockup-assets.json", root), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Saved four mockups to ${fileURLToPath(new URL("mockups/", assetRoot))}.`);
console.log(`Review sheet: ${fileURLToPath(new URL("careertrack-mockups.png", reviewRoot))}.`);
