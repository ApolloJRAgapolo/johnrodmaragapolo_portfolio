const MAX_CANVAS_PIXELS = 4_000_000;
const MAX_CANVAS_DIMENSION = 8192;

/** Keep one PDF paint active; stale work must not delay the next visible page. */
export function createPdfRenderQueue() {
  let pending = Promise.resolve();

  return {
    enqueue(render: () => Promise<void>, signal: AbortSignal): Promise<void> {
      const task = pending.then(() => {
        if (!signal.aborted) return render();
      });
      pending = task.catch(() => undefined);
      return task;
    },
  };
}

/** Bound backing-buffer memory while retaining HiDPI output for ordinary pages. */
export function getPdfCanvasSize(width: number, height: number, devicePixelRatio: number) {
  const pixelRatio = Math.min(
    Math.max(devicePixelRatio || 1, 1),
    2,
    Math.sqrt(MAX_CANVAS_PIXELS / (width * height)),
    MAX_CANVAS_DIMENSION / width,
    MAX_CANVAS_DIMENSION / height,
  );

  return {
    width: Math.max(1, Math.floor(width * pixelRatio)),
    height: Math.max(1, Math.floor(height * pixelRatio)),
    pixelRatio,
  };
}
