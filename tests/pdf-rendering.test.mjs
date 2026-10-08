import assert from "node:assert/strict";
import test from "node:test";
import { createPdfRenderQueue, getPdfCanvasSize } from "../lib/pdf-rendering.ts";

test("PDF paint jobs run one at a time", async () => {
  const queue = createPdfRenderQueue();
  const controller = new AbortController();
  let active = 0;
  let peak = 0;
  const order = [];
  await Promise.all([1, 2, 3].map((page) => queue.enqueue(async () => {
    active += 1;
    peak = Math.max(peak, active);
    await new Promise((resolve) => setTimeout(resolve, 5));
    order.push(page);
    active -= 1;
  }, controller.signal)));
  assert.equal(peak, 1);
  assert.deepEqual(order, [1, 2, 3]);
});

test("a canceled page never starts after waiting for another page", async () => {
  const queue = createPdfRenderQueue();
  const current = new AbortController();
  const stale = new AbortController();
  let release;
  const first = queue.enqueue(() => new Promise((resolve) => { release = resolve; }), current.signal);
  let stalePainted = false;
  const second = queue.enqueue(async () => { stalePainted = true; }, stale.signal);
  stale.abort();
  await Promise.resolve();
  release();
  await Promise.all([first, second]);
  assert.equal(stalePainted, false);
});

test("one failed page does not prevent a later page from rendering", async () => {
  const queue = createPdfRenderQueue();
  const controller = new AbortController();
  const failed = queue.enqueue(async () => { throw new Error("Broken page"); }, controller.signal);
  let painted = false;
  const next = queue.enqueue(async () => { painted = true; }, controller.signal);
  await assert.rejects(failed, /Broken page/);
  await next;
  assert.equal(painted, true);
});

test("ordinary pages retain their HiDPI rendering resolution", () => {
  assert.deepEqual(getPdfCanvasSize(600, 850, 2), { width: 1200, height: 1700, pixelRatio: 2 });
  assert.equal(getPdfCanvasSize(600, 850, 1).pixelRatio, 1);
});

test("large pages and high device ratios cannot allocate oversized buffers", () => {
  for (const [width, height] of [[1080, 1527], [1080, 24000], [24000, 1080]]) {
    const size = getPdfCanvasSize(width, height, 3);
    assert.ok(size.width * size.height <= 4_000_000);
    assert.ok(size.width <= 8192 && size.height <= 8192);
    assert.ok(size.width >= 1 && size.height >= 1);
  }
});
