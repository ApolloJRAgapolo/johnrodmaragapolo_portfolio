export type CarouselTarget = number | "previous" | "next" | "first" | "last";

/** Keep navigation inside the available screens, including a shortened list. */
export function getCarouselIndex(index: number, count: number, target: CarouselTarget = index) {
  const last = Math.max(0, count - 1);
  const current = Math.max(0, Math.min(index, last));
  const requested = typeof target === "number" ? target
    : target === "previous" ? current - 1
    : target === "next" ? current + 1
    : target === "first" ? 0 : last;
  return Math.max(0, Math.min(requested, last));
}

/** A deliberate horizontal gesture; short drags and page scrolling stay inert. */
export function getCarouselSwipe(deltaX: number, deltaY: number): "previous" | "next" | null {
  if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.5) return null;
  return deltaX < 0 ? "next" : "previous";
}

/** Resolve native scrolling, including subpixel offsets and elastic overscroll. */
export function getCarouselScrollIndex(offset: number, width: number, count: number) {
  if (width <= 0 || !Number.isFinite(width) || !Number.isFinite(offset)) return 0;
  return getCarouselIndex(Math.round(offset / width), count);
}

/** Mouse drags follow the track; a short, deliberate swipe can advance one slide. */
export function getCarouselDragIndex(startOffset: number, endOffset: number, deltaX: number, deltaY: number, width: number, count: number) {
  const start = getCarouselScrollIndex(startOffset, width, count);
  const end = getCarouselScrollIndex(endOffset, width, count);
  if (width <= 0 || !Number.isFinite(width)) return start;
  if (end !== start) return end;
  const direction = getCarouselSwipe(deltaX, deltaY);
  return direction ? getCarouselIndex(start, count, direction) : start;
}
