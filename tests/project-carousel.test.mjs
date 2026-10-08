import assert from "node:assert/strict";
import test from "node:test";
import { getCarouselIndex, getCarouselSwipe } from "../lib/project-carousel.ts";

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
