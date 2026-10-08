import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import sharp from "sharp";
import { createDataLoader, projectRoot } from "../scripts/lib/load-project-data.mjs";
import { getDiagramFitScale, getDiagramZoomLimit } from "../lib/diagram-viewer.ts";

const load = createDataLoader();
const { blmsDiagrams, blmsDiagramGroups } = load("lib/data/blms-diagrams.ts");
const manifest = load("lib/data/blms-diagram-assets.json");
const { caseFiles } = load("lib/data/case-files.ts");

test("all eleven supplied diagrams appear once and retain their correct original filename", () => {
  assert.equal(blmsDiagrams.length, 11);
  assert.equal(new Set(blmsDiagrams.map((diagram) => diagram.id)).size, 11);
  assert.deepEqual(blmsDiagramGroups.map((group) => group.diagrams.length), [2, 4, 5]);
  assert.deepEqual(blmsDiagrams.map((diagram) => diagram.originalFilename).sort(), [
    "BLMS CONCEPTUAL FRAMEWORK.png", "BLMS METHODOLOGY.png", "BLMS-USE CASE.png",
    "BLMS CLASS DIAGRAM.png", "BLMS DEPLOYMENT DIAGRAM.png", "BLMS-BLMS SECURITY DIAGRAM.png",
    "BLMS-ACTIVITY DIAGRAM - FARMER.png", "BLMS-ACTIVITY DIAGRAM - BRGY DA REP.png",
    "BLMS-ACTIVITY DIAGRAM - MAO VET.png", "BLMS-ACTIVITY DIAGRAM - MAO HEAD.png",
    "BLMS-ACTIVITY DIAGRAM - AUCTION MARKET STAFF.png",
  ].sort());
});

test("each original and display asset matches its manifest and preserves the complete diagram proportions", async () => {
  for (const diagram of blmsDiagrams) {
    const assets = manifest[diagram.id];
    for (const kind of ["original", "preview", "display"]) {
      const asset = assets[kind];
      const bytes = await readFile(`${projectRoot}/public${asset.src}`);
      assert.equal(createHash("sha256").update(bytes).digest("hex"), asset.sha256, `${diagram.id}: ${kind} hash`);
      const info = await sharp(bytes, { limitInputPixels: 200_000_000 }).metadata();
      assert.equal(info.width, asset.width);
      assert.equal(info.height, asset.height);
      // Resizing may round one pixel, but never crops a diagram's contents.
      assert.ok(Math.abs(asset.height - asset.width * assets.original.height / assets.original.width) <= 1, `${diagram.id}: ${kind} proportions`);
    }
    assert.ok(assets.preview.width <= 1440 && assets.preview.height <= 1120);
    assert.ok(assets.display.width <= 4096 && assets.display.height <= 4096);
  }
});

test("the BLMS project card retains its role and prototype status without a diagram preview", () => {
  const capstone = caseFiles.find((file) => file.id === "blms");
  assert.equal(capstone.preview, undefined);
  assert.equal(capstone.metadata.role, "Project Manager & Systems Analyst");
  assert.equal(capstone.metadata.status, "Completed Capstone / Prototype");
  assert.ok(caseFiles.filter((file) => file.id !== "blms").every((file) => file.preview === undefined));
});

test("every diagram fits completely in short mobile, phone, and desktop viewports", () => {
  for (const diagram of blmsDiagrams) {
    for (const [width, height] of [[288, 180], [374, 440], [1200, 700]]) {
      const image = diagram.display;
      const scale = getDiagramFitScale(image.width, image.height, width, height);
      assert.ok(scale > 0 && scale <= 1);
      assert.ok(image.width * scale <= width - 32 + 0.001);
      assert.ok(image.height * scale <= height - 32 + 0.001);
      assert.ok(getDiagramZoomLimit(scale) >= 1 / scale, "original display pixel size is reachable");
    }
  }
});

test("fitting does not enlarge small assets and stays finite while a viewport is being measured", () => {
  assert.equal(getDiagramFitScale(100, 100, 1200, 700), 1);
  assert.ok(Number.isFinite(getDiagramFitScale(4096, 2591, 0, 0)));
  assert.ok(getDiagramFitScale(4096, 2591, 0, 0) > 0);
});
