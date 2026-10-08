import assert from "node:assert/strict";
import test from "node:test";
import { createThemeTransitionController, getThemeReveal } from "../lib/theme-transition.ts";

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((accept, fail) => { resolve = accept; reject = fail; });
  return { promise, resolve, reject };
}

function makePage() {
  const attributes = new Map();
  const properties = new Map();
  const captures = [];
  let styleFlushes = 0;
  const root = {
    setAttribute: (key, value) => attributes.set(key, value),
    removeAttribute: (key) => attributes.delete(key),
    style: {
      setProperty: (key, value) => properties.set(key, value),
      removeProperty: (key) => properties.delete(key),
    },
  };
  const page = {
    visibilityState: "visible",
    documentElement: root,
    startViewTransition(update) {
      const ready = deferred();
      const updated = deferred();
      const finished = deferred();
      const capture = {
        skips: 0,
        ready: ready.promise,
        updateCallbackDone: updated.promise,
        finished: finished.promise,
        skipTransition() { capture.skips += 1; },
        commit() { update(); updated.resolve(); ready.resolve(); },
        complete() { finished.resolve(); },
        failBeforeUpdate() {
          ready.reject(new Error("Snapshot unavailable"));
          updated.reject(new Error("Capture interrupted"));
          finished.reject(new Error("Transition skipped"));
        },
      };
      captures.push(capture);
      return capture;
    },
  };
  const viewport = {
    innerWidth: 1440,
    innerHeight: 900,
    CSS: { supports: () => true },
    matchMedia: () => ({ matches: false }),
    getComputedStyle: () => { styleFlushes += 1; return { color: "black" }; },
  };
  return {
    page, viewport, attributes, properties, captures,
    styleFlushes: () => styleFlushes,
    change: createThemeTransitionController(page, viewport),
  };
}

const settle = () => new Promise((resolve) => setImmediate(resolve));

test("a reveal from any control position covers every corner on phone and desktop", () => {
  for (const [width, height] of [[390, 844], [1440, 900], [2560, 1440]]) {
    for (const origin of [{ x: 20, y: height - 30 }, { x: width / 2, y: height / 2 }, { x: width - 20, y: 20 }]) {
      const { x, y, radius } = getThemeReveal(origin, width, height);
      for (const [cornerX, cornerY] of [[0, 0], [width, 0], [0, height], [width, height]]) {
        assert.ok(radius > Math.hypot(cornerX - x, cornerY - y));
      }
    }
  }
  const clamped = getThemeReveal({ x: -10, y: 1000 }, 390, 844);
  assert.equal(clamped.x, 0);
  assert.equal(clamped.y, 844);
});

test("the theme changes during snapshot capture and cleans up only after the wave finishes", async () => {
  const state = makePage();
  let updates = 0;
  state.change(() => { updates += 1; }, { origin: { x: 120, y: 800 } });
  assert.equal(updates, 0);
  assert.equal(state.attributes.get("data-theme-transition"), "reveal");
  assert.equal(state.properties.get("--theme-reveal-x"), "120px");
  assert.equal(state.properties.get("--theme-reveal-y"), "800px");
  state.captures[0].commit();
  await settle();
  assert.equal(updates, 1);
  assert.equal(state.attributes.get("data-theme-transition"), "reveal");
  state.captures[0].complete();
  await settle();
  assert.equal(updates, 1);
  assert.equal(state.attributes.size, 0);
  assert.equal(state.properties.size, 0);
});

test("unsupported browsers, hidden tabs, reduced motion, and unchanged colors switch immediately", () => {
  const cases = [
    (state) => { delete state.page.startViewTransition; },
    (state) => { delete state.viewport.CSS; },
    (state) => { state.viewport.CSS.supports = (property) => property === "clip-path"; },
    (state) => { state.viewport.CSS.supports = (property) => property !== "clip-path"; },
    (state) => { state.page.visibilityState = "hidden"; },
    (state) => { state.viewport.matchMedia = () => ({ matches: true }); },
  ];
  const scenarios = [...cases.map((configure) => ({ configure, animate: true })), { configure: () => {}, animate: false }];
  for (const { configure, animate } of scenarios) {
    const state = makePage();
    configure(state);
    let updates = 0;
    state.change(() => {
      assert.equal(state.attributes.get("data-theme-transition"), "instant");
      updates += 1;
    }, { animate });
    assert.equal(updates, 1);
    assert.equal(state.captures.length, 0);
    assert.equal(state.styleFlushes(), 1);
    assert.equal(state.attributes.size, 0);
    assert.equal(state.properties.size, 0);
  }
});

test("rapid choices cannot apply a stale theme or clear a newer wave", async () => {
  const state = makePage();
  const updates = [];
  state.change(() => updates.push("dark"));
  state.change(() => updates.push("light"));
  state.change(() => updates.push("latest-dark"), { origin: { x: 200, y: 700 } });
  assert.equal(state.captures[0].skips, 1);
  assert.equal(state.captures[1].skips, 1);
  for (const previous of state.captures.slice(0, 2)) {
    previous.commit();
    previous.complete();
  }
  await settle();
  assert.deepEqual(updates, []);
  assert.equal(state.attributes.get("data-theme-transition"), "reveal");
  assert.equal(state.properties.get("--theme-reveal-x"), "200px");
  state.captures[2].commit();
  state.captures[2].complete();
  await settle();
  assert.deepEqual(updates, ["latest-dark"]);
  assert.equal(state.attributes.size, 0);
});

test("an instant choice cancels an in-progress wave and remains the final theme", async () => {
  const state = makePage();
  const updates = [];
  state.change(() => updates.push("dark"));
  state.captures[0].commit();
  state.change(() => updates.push("system"), { animate: false });
  assert.equal(state.captures[0].skips, 1);
  assert.deepEqual(updates, ["dark", "system"]);
  state.captures[0].complete();
  await settle();
  assert.deepEqual(updates, ["dark", "system"]);
  assert.equal(state.attributes.size, 0);
});

test("failed captures still apply the selected theme and leave no temporary styles", async () => {
  const state = makePage();
  let updates = 0;
  state.change(() => { updates += 1; });
  state.captures[0].failBeforeUpdate();
  await settle();
  assert.equal(updates, 1);
  assert.equal(state.styleFlushes(), 1);
  assert.equal(state.attributes.size, 0);
  assert.equal(state.properties.size, 0);
});

test("a browser that throws while starting a capture still switches exactly once", () => {
  const state = makePage();
  state.page.startViewTransition = (update) => { update(); throw new Error("Capture failed"); };
  let updates = 0;
  state.change(() => { updates += 1; });
  assert.equal(updates, 1);
  assert.equal(state.attributes.size, 0);
  assert.equal(state.properties.size, 0);
});
