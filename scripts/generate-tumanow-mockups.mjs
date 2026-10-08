import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Read private inputs in place. This generator never copies originals into the
// project, public assets, review sheets, or downloadable bundles.
const option = process.argv.indexOf("--source-dir");
if (option === -1 || !process.argv[option + 1]) {
  throw new Error("Supply --source-dir with the private folder containing the screenshots.");
}
const sourceDir = resolve(process.argv[option + 1]);
const root = new URL("../", import.meta.url);
const outputDir = new URL("public/case-files/tumanow/mockups/", root);
const reviewDir = new URL("../tumanow-screenshots/", root);
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");
const maskColor = [222, 228, 237];
const box = (category, left, top, width, height) => ({ category, left, top, width, height });

const screens = [
  {
    id: "gis-map", title: "GIS Map", platform: "web",
    filename: "825261118_2693717281047340_570412169159668746_n.png",
    masks: [box("notification count", 1625, 148, 76, 47)],
  },
  {
    id: "user-management", title: "User Roles", platform: "web",
    filename: "825261088_2568736563623098_6500328891952919643_n.png",
    masks: [
      box("notification count", 1625, 148, 76, 47),
      ...[0, 105, 210].flatMap((offset) => [
        box("account avatar", 162, 818 + offset, 76, 76),
        box("account name and handle", 240, 820 + offset, 250, 72),
        box("account join date", 1264, 832 + offset, 162, 50),
      ]),
    ],
  },
  {
    id: "public-map", title: "Public Map", platform: "web",
    filename: "828531494_29030123759947198_577959485629935114_n.png",
    masks: [
      // Retain only the captured Complete badge; overwrite the photograph,
      // including people, the signboard, and its context, rather than guess at
      // tiny individual faces. No replacement photo or project data is added.
      box("project photograph", 1109, 352, 342, 12),
      box("project photograph", 1109, 364, 215, 182),
      box("project photograph", 1445, 364, 6, 182),
      box("project photograph", 1324, 397, 121, 149),
      box("project title", 1116, 550, 324, 64),
      box("project location", 1136, 614, 302, 34),
    ],
  },
  {
    id: "municipality-report", title: "Municipal Report", platform: "web",
    filename: "825261120_4293980544065454_8645246821936054213_n.png",
    masks: [
      // Padded bands cover every visible row, including the partial final row,
      // while leaving the headers and public completion columns readable.
      box("internal accounting values", 1348, 292, 100, 988),
      box("internal accounting values", 1562, 292, 90, 988),
      box("internal accounting values", 1710, 292, 115, 988),
    ],
  },
  {
    id: "staff-sign-in", title: "Staff Sign-in", platform: "web",
    filename: "825312500_1392463526428065_3389552752328965855_n.png",
    masks: [box("support contact line", 1312, 705, 456, 43)],
  },
  {
    id: "mobile-map", title: "Field Map", platform: "mobile",
    filename: "825312498_1603472251328545_8485417149816720333_n.png",
    masks: [
      box("project title", 28, 1273, 609, 50),
      box("project location", 28, 1323, 460, 38),
      box("project title", 28, 1396, 338, 50),
      box("project location", 28, 1446, 442, 39),
      box("project title", 28, 1520, 446, 50),
      box("project location", 28, 1570, 442, 38),
      box("project title", 28, 1643, 658, 50),
      box("project location", 28, 1693, 442, 40),
      box("project title", 28, 1767, 462, 53),
      box("project location", 28, 1820, 442, 33),
      box("notification count", 452, 1852, 67, 57),
    ],
  },
  {
    id: "mobile-filters", title: "Filters", platform: "mobile",
    filename: "825261076_1286021714599934_8776364192974987504_n.png",
    masks: [],
  },
  {
    id: "mobile-new-project", title: "New Project", platform: "mobile",
    filename: "825312526_2774851576250187_8469452770851506659_n.png",
    masks: [],
  },
  {
    id: "mobile-sync", title: "Sync", platform: "mobile",
    filename: "825261067_1712893226468869_3602894232113037514_n.png",
    masks: [
      box("account name", 68, 221, 474, 48),
      box("account handle", 286, 272, 145, 41),
      box("deployment address", 68, 314, 375, 47),
      box("notification count", 452, 1852, 67, 57),
    ],
  },
];

const webScreens = screens.filter((screen) => screen.platform === "web");
const mobileScreens = screens.filter((screen) => screen.platform === "mobile");
const webReviewRows = Math.ceil(webScreens.length / 2);
const mobileReviewTop = 64 + webReviewRows * 640;
function reviewPosition(screen) {
  const index = (screen.platform === "web" ? webScreens : mobileScreens).indexOf(screen);
  return screen.platform === "web"
    ? { left: 32 + (index % 2) * 992, top: 64 + Math.floor(index / 2) * 640 }
    : { left: 32 + index * 496, top: mobileReviewTop + 64 };
}

function frame(platform, width, height) {
  const chrome = platform === "web" ? `<rect x="0" y="0" width="${width}" height="48" fill="#24272b"/>
    <g fill="#88909a"><circle cx="28" cy="24" r="5"/><circle cx="48" cy="24" r="5"/><circle cx="68" cy="24" r="5"/></g>
    <text x="104" y="32" font-family="Segoe UI, Arial, sans-serif" font-size="24" fill="#cdd3dc">TumaNow · Project monitoring</text>` : "";
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect width="${width}" height="${height}" fill="#24272b"/>
    ${chrome}
    <rect x=".5" y=".5" width="${width - 1}" height="${height - 1}" fill="none" stroke="#48515d"/>
  </svg>`);
}

await mkdir(outputDir, { recursive: true });
await mkdir(reviewDir, { recursive: true });
const manifest = {
  method: "Native screenshot pixels, opaque flattened redactions, minimal code-drawn frames; no generated app UI or outer presentation backdrop.",
  privacy: "Private source files remain outside the project. All published images and PNG downloads are sanitized and have metadata stripped. Mask coordinates refer to the source screenshot.",
  screens: [],
};
const contactLayers = [];

for (const screen of screens) {
  const sourcePath = resolve(sourceDir, screen.filename);
  const original = await readFile(sourcePath);
  const sourceHash = digest(original);
  const { data: originalPixels, info } = await sharp(original).removeAlpha().toColourspace("srgb").raw().toBuffer({ resolveWithObject: true });
  const expectedSize = screen.platform === "web" ? [2048, 1280] : [942, 2048];
  assert.deepEqual([info.width, info.height], expectedSize, `${screen.id}: unexpected source size`);
  assert.equal(info.channels, 3);

  // Overwrite decoded pixels themselves, with no alpha, blur, reversible layers,
  // original image attachment, or source metadata retained in the exported file.
  const sanitized = Buffer.from(originalPixels);
  for (const mask of screen.masks) {
    assert.ok(mask.left >= 0 && mask.top >= 0 && mask.left + mask.width <= info.width && mask.top + mask.height <= info.height);
    for (let y = mask.top; y < mask.top + mask.height; y++) {
      for (let x = mask.left; x < mask.left + mask.width; x++) {
        const offset = (y * info.width + x) * 3;
        sanitized[offset] = maskColor[0];
        sanitized[offset + 1] = maskColor[1];
        sanitized[offset + 2] = maskColor[2];
      }
    }
  }

  // Safari chrome contains the server hostname and unrelated personal tabs.
  // Remove it completely; preserve app controls and map attribution below it.
  const crop = screen.platform === "web"
    ? { left: 0, top: 128, width: info.width, height: info.height - 128 }
    // End the form excerpt after its complete date fields. The source cuts off
    // the next GPS button, so it is omitted rather than reconstructed.
    : { left: 0, top: 0, width: info.width, height: screen.id === "mobile-new-project" ? 1920 : info.height };
  const placement = { left: 8, top: screen.platform === "web" ? 56 : 8 };
  const size = { width: crop.width + 16, height: crop.height + placement.top + 8 };
  const content = await sharp(sanitized, { raw: info }).extract(crop).png().toBuffer();
  const master = await sharp(frame(screen.platform, size.width, size.height))
    .composite([{ input: content, ...placement }]).removeAlpha()
    .png({ compressionLevel: 9 }).toBuffer();
  const web = await sharp(master).webp({ lossless: true, effort: 6 }).toBuffer();

  // Verify the complete screen against the sanitized native-resolution pixels.
  // This proves all UI outside the mask boxes remained exactly as captured.
  const expected = await sharp(sanitized, { raw: info }).extract(crop).raw().toBuffer();
  const actual = await sharp(master).extract({ ...placement, width: crop.width, height: crop.height }).removeAlpha().raw().toBuffer();
  assert.ok(expected.equals(actual), `${screen.id}: native screenshot pixels differ`);
  for (const mask of screen.masks) {
    const region = await sharp(master).extract({ left: mask.left - crop.left + placement.left, top: mask.top - crop.top + placement.top, width: mask.width, height: mask.height }).removeAlpha().raw().toBuffer();
    for (let p = 0; p < region.length; p += 3) {
      assert.equal(region[p], maskColor[0]); assert.equal(region[p + 1], maskColor[1]); assert.equal(region[p + 2], maskColor[2]);
    }
  }
  assert.ok((await sharp(master).removeAlpha().raw().toBuffer()).equals(await sharp(web).removeAlpha().raw().toBuffer()), `${screen.id}: WebP must be lossless`);
  for (const output of [master, web]) {
    const meta = await sharp(output).metadata();
    assert.ok(!meta.exif && !meta.xmp && !meta.iptc && !meta.icc, `${screen.id}: source metadata must be stripped`);
  }
  assert.equal(digest(await readFile(sourcePath)), sourceHash, `${screen.id}: private source must remain unchanged`);

  await writeFile(new URL(`${screen.id}.png`, outputDir), master);
  await writeFile(new URL(`${screen.id}.webp`, outputDir), web);
  manifest.screens.push({
    id: screen.id, title: screen.title, platform: screen.platform,
    source: { filename: screen.filename, width: info.width, height: info.height, sha256: sourceHash },
    crop, placement, redactions: screen.masks,
    master: { src: `/case-files/tumanow/mockups/${screen.id}.png`, ...size, bytes: master.length, sha256: digest(master) },
    web: { src: `/case-files/tumanow/mockups/${screen.id}.webp`, ...size, bytes: web.length, sha256: digest(web) },
    verification: { sourceUnchanged: true, opaqueMaskPixelsVerified: true, allOtherNativePixelsIdentical: true, losslessWebpVerified: true, metadataStripped: true },
  });

  const thumbnail = await sharp(master).resize({ width: screen.platform === "web" ? 960 : 440, height: screen.platform === "web" ? 568 : 948, fit: "inside" }).png().toBuffer();
  contactLayers.push({ input: thumbnail, ...reviewPosition(screen) });
  console.log(`${screen.title}: ${size.width}×${size.height}, ${screen.masks.length} opaque masks verified; ${Math.round(web.length / 1024)} KB WebP.`);
}

const contactLabels = screens.map((screen) => {
  const position = reviewPosition(screen);
  return `<text x="${position.left}" y="${position.top - 24}" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#26344b">${screen.title}</text>`;
}).join("");
const reviewHeight = mobileReviewTop + 1064;
const review = await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="${reviewHeight}"><rect width="2048" height="${reviewHeight}" fill="#f3f5f8"/>${contactLabels}</svg>`))
  .composite(contactLayers).png({ compressionLevel: 9 }).toBuffer();
await writeFile(new URL("tumanow-mockups.png", reviewDir), review);
await writeFile(new URL("lib/data/tumanow-mockup-assets.json", root), `${JSON.stringify(manifest, null, 2)}\n`);

// Catch an accidental raw/original asset or unrelated stale export in public.
const allowed = new Set(screens.flatMap((screen) => [`${screen.id}.png`, `${screen.id}.webp`]));
assert.deepEqual(new Set(await readdir(outputDir)), allowed, "Public TumaNow directory must contain only the sanitized exports.");
console.log(`Sanitized exports: ${fileURLToPath(outputDir)}\nReview sheet: ${fileURLToPath(new URL("tumanow-mockups.png", reviewDir))}`);
