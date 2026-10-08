import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, resolve, sep } from "node:path";
import { createRequire } from "node:module";
import { createDataLoader, projectRoot } from "./lib/load-project-data.mjs";

const load = createDataLoader();
const credentials = Object.values(load("lib/data/credentials.ts")).flat();
const { getCredentialDocument } = load("lib/data/credential-previews.ts");
const { allCertificates } = load("lib/data/documents.ts");
const credentialDocuments = credentials.map(credential => {
  const document = getCredentialDocument(credential);
  if (!document) throw new Error(`No unambiguous PDF for ${credential.title}`);
  return document;
});
const documents = [...credentialDocuments, ...allCertificates.filter(item => item.fileUrl)];
const manifestPath = resolve(projectRoot, "lib/data/credential-thumbnails.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const publicRoot = resolve(projectRoot, "public");
const outputRoot = resolve(publicRoot, "credential-previews");
const checkOnly = process.argv.includes("--check");
const require = createRequire(import.meta.url);
const sha256 = bytes => createHash("sha256").update(bytes).digest("hex");
const nextManifest = {};
let regenerated = 0;

function publicPath(url) {
  const path = resolve(publicRoot, `.${decodeURIComponent(url)}`);
  if (!path.startsWith(`${publicRoot}${sep}`)) throw new Error(`Invalid public asset path: ${url}`);
  return path;
}

let pdfjs;
let createCanvas;
for (const document of documents) {
  const key = decodeURIComponent(document.fileUrl);
  if (nextManifest[key]) continue;
  const source = await readFile(publicPath(key));
  const pdfSha256 = sha256(source);
  const previous = manifest[key];
  let valid = false;
  if (previous?.pdfSha256 === pdfSha256 && previous.width === 800 && previous.height > 0) {
    try {
      valid = sha256(await readFile(publicPath(previous.src))) === previous.thumbnailSha256;
    } catch { /* A missing image is regenerated below. */ }
  }
  if (valid) { nextManifest[key] = previous; continue; }
  if (checkOnly) throw new Error(`Missing or stale thumbnail for ${document.title}`);

  // PDF.js already supplies the optional Node canvas renderer. No browser work
  // or new dependency is needed; committed WebP images are ordinary page assets.
  pdfjs ??= await import("pdfjs-dist/legacy/build/pdf.mjs");
  createCanvas ??= require("@napi-rs/canvas").createCanvas;
  const task = pdfjs.getDocument({
    data: new Uint8Array(source),
    standardFontDataUrl: `${resolve(projectRoot, "node_modules/pdfjs-dist/standard_fonts").replaceAll("\\", "/")}/`,
  });
  try {
    const pdf = await task.promise;
    const page = await pdf.getPage(1);
    const original = page.getViewport({ scale: 1 });
    const viewport = page.getViewport({ scale: 800 / original.width });
    const canvas = createCanvas(800, Math.ceil(viewport.height));
    await page.render({ canvas, viewport }).promise;
    const bytes = await canvas.encode("webp", 82);
    const slug = basename(key, ".pdf").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
    const file = `${slug}-${sha256(key).slice(0, 12)}.webp`;
    await mkdir(outputRoot, { recursive: true });
    await writeFile(resolve(outputRoot, file), bytes);
    nextManifest[key] = { src: `/credential-previews/${file}`, width: 800, height: canvas.height, pdfSha256, thumbnailSha256: sha256(bytes) };
    page.cleanup();
    regenerated += 1;
  } finally {
    await task.destroy();
  }
}

if (!checkOnly) await writeFile(manifestPath, `${JSON.stringify(nextManifest, null, 2)}\n`);
console.log(`${credentials.length} credentials, ${allCertificates.length} archive records; ${Object.keys(nextManifest).length} unique PDFs; ${regenerated} thumbnails regenerated; ${checkOnly ? "all thumbnail checks passed" : "manifest saved"}.`);
