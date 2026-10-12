import assert from "node:assert/strict";
import test from "node:test";
import { getCarouselDragIndex, getCarouselIndex, getCarouselScrollIndex, getCarouselSwipe } from "../lib/project-carousel.ts";

test("forward and backward navigation stays within the gallery at both endpoints", () => {
  let index = 0;
  const visited = [];
  for (let i = 0; i < 7; i++) {
    index = getCarouselIndex(index, 5, "next");
    visited.push(index);
  }
  assert.deepEqual(visited, [1, 2, 3, 4, 4, 4, 4]);
  for (let i = 0; i < 7; i++) index = getCarouselIndex(index, 5, "previous");
  assert.equal(index, 0);
});

test("direct selection, Home, End, and a shortened screen list resolve to a valid slide", () => {
  assert.equal(getCarouselIndex(2, 5, "first"), 0);
  assert.equal(getCarouselIndex(2, 5, "last"), 4);
  assert.equal(getCarouselIndex(0, 5, 3), 3);
  assert.equal(getCarouselIndex(0, 5, 20), 4);
  assert.equal(getCarouselIndex(2, 5, -1), 0);
  assert.equal(getCarouselIndex(4, 2), 1);
  assert.equal(getCarouselIndex(4, 2, "previous"), 0);
  assert.equal(getCarouselIndex(4, 2, "next"), 1);
});

test("empty and single-screen galleries cannot navigate beyond index zero", () => {
  for (const count of [0, 1]) {
    for (const target of ["previous", "next", "first", "last", -1, 7]) {
      assert.equal(getCarouselIndex(5, count, target), 0);
    }
  }
});

test("horizontal swipes select the correct direction while scrolling and short drags do nothing", () => {
  assert.equal(getCarouselSwipe(-90, 12), "next");
  assert.equal(getCarouselSwipe(90, -12), "previous");
  assert.equal(getCarouselSwipe(48, 0), "previous");
  assert.equal(getCarouselSwipe(-48, 0), "next");
  assert.equal(getCarouselSwipe(47, 0), null);
  assert.equal(getCarouselSwipe(0, 150), null);
  assert.equal(getCarouselSwipe(70, 140), null);
  assert.equal(getCarouselSwipe(-60, 45), null);
  assert.equal(getCarouselSwipe(0, 0), null);
});

test("scroll positions track the nearest slide at mobile and desktop widths", () => {
  for (const width of [280, 335, 352, 614, 768]) {
    assert.equal(getCarouselScrollIndex(width * 2, width, 5), 2);
    assert.equal(getCarouselScrollIndex(width * 2.49, width, 5), 2);
    assert.equal(getCarouselScrollIndex(width * 2.51, width, 5), 3);
    assert.equal(getCarouselScrollIndex(-width, width, 5), 0);
    assert.equal(getCarouselScrollIndex(width * 8, width, 5), 4);
    assert.equal(getCarouselScrollIndex(width * 3, width, 1), 0);
    assert.equal(getCarouselScrollIndex(width * 3, width, 0), 0);
  }
  for (const width of [0, -1, Infinity, NaN]) assert.equal(getCarouselScrollIndex(500, width, 5), 0);
  for (const offset of [Infinity, NaN]) assert.equal(getCarouselScrollIndex(offset, 335, 5), 0);
});

test("mouse dragging settles in either direction without skipping short gestures or overshooting endpoints", () => {
  assert.equal(getCarouselDragIndex(335, 405, -70, 4, 335, 5), 2);
  assert.equal(getCarouselDragIndex(670, 600, 70, 4, 335, 5), 1);
  assert.equal(getCarouselDragIndex(335, 375, -40, 4, 335, 5), 1);
  assert.equal(getCarouselDragIndex(335, 395, -60, 90, 335, 5), 1);
  assert.equal(getCarouselDragIndex(0, 850, -850, 4, 335, 5), 3);
  assert.equal(getCarouselDragIndex(1005, 100, 905, 4, 335, 5), 0);
  assert.equal(getCarouselDragIndex(0, 0, 90, 0, 335, 5), 0);
  assert.equal(getCarouselDragIndex(1340, 1340, -90, 0, 335, 5), 4);
  assert.equal(getCarouselDragIndex(0, 0, -90, 0, 335, 1), 0);
  assert.equal(getCarouselDragIndex(0, 0, -90, 0, 0, 5), 0);
});
