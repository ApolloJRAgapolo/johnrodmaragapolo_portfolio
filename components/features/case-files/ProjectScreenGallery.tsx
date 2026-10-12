"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import ProjectImageViewer from "@/components/features/case-files/ProjectImageViewer";
import { actionStyles } from "@/lib/action-styles";
import { getCarouselDragIndex, getCarouselIndex, getCarouselScrollIndex, type CarouselTarget } from "@/lib/project-carousel";
import type { ProjectImage } from "@/lib/types";
import styles from "./ProjectScreenGallery.module.css";

type Props = {
  projectName: string;
  screens: ProjectImage[];
  layout?: "web" | "mobile";
  groupLabel?: string;
};

type Gesture = {
  id: number;
  x: number;
  y: number;
  scrollLeft: number;
  pointerType: string;
  dragging: boolean;
};

export default function ProjectScreenGallery({ projectName, screens, layout = "web", groupLabel }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const track = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const pendingIndex = useRef<number | null>(null);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const gesture = useRef<Gesture | null>(null);
  const suppressClickUntil = useRef(0);
  const hintId = useId();
  const count = screens.length;
  const selectedIndex = getCarouselIndex(activeIndex, count);
  const selected = screens[selectedIndex];

  const clearSettleTimer = useCallback(() => {
    if (settleTimer.current !== null) clearTimeout(settleTimer.current);
    settleTimer.current = null;
  }, []);

  const select = useCallback((index: number) => {
    const next = getCarouselIndex(index, count);
    if (next !== currentIndex.current) {
      const viewport = track.current;
      // Keep keyboard focus out of a slide that is about to become hidden.
      if (viewport?.contains(document.activeElement) && document.activeElement !== viewport) {
        viewport.focus({ preventScroll: true });
      }
    }
    currentIndex.current = next;
    setActiveIndex(next);
  }, [count]);

  const finishScroll = useCallback(() => {
    clearSettleTimer();
    if (gesture.current?.dragging) return;
    const viewport = track.current;
    if (!viewport || viewport.clientWidth === 0) return;
    pendingIndex.current = null;
    select(getCarouselScrollIndex(viewport.scrollLeft, viewport.clientWidth, count));
  }, [clearSettleTimer, count, select]);

  useEffect(() => {
    const viewport = track.current;
    if (!viewport) return;
    const align = () => {
      clearSettleTimer();
      pendingIndex.current = null;
      gesture.current = null;
      delete viewport.dataset.dragging;
      const index = getCarouselIndex(currentIndex.current, count);
      select(index);
      viewport.scrollTo({ left: index * viewport.clientWidth, behavior: "instant" });
    };
    align();
    viewport.addEventListener("scrollend", finishScroll);
    const observer = new ResizeObserver(align);
    observer.observe(viewport);
    return () => {
      observer.disconnect();
      viewport.removeEventListener("scrollend", finishScroll);
      clearSettleTimer();
      gesture.current = null;
    };
  }, [clearSettleTimer, count, finishScroll, layout, select]);

  const navigate = (target: CarouselTarget) => {
    const index = getCarouselIndex(currentIndex.current, count, target);
    select(index);
    const viewport = track.current;
    if (!viewport || viewport.clientWidth === 0) return;
    clearSettleTimer();
    const left = index * viewport.clientWidth;
    pendingIndex.current = Math.abs(viewport.scrollLeft - left) > 1 ? index : null;
    viewport.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  const open = (index = selectedIndex) => {
    navigate(index);
    setViewerOpen(true);
  };
  const onScroll = () => {
    const viewport = track.current;
    if (!viewport) return;
    // Announce the destination once during button navigation, rather than every
    // intermediate screen when jumping several positions with the dots.
    if (pendingIndex.current === null && !gesture.current?.dragging) {
      select(getCarouselScrollIndex(viewport.scrollLeft, viewport.clientWidth, count));
    }
    clearSettleTimer();
    // Older browsers without scrollend still synchronize after momentum stops.
    settleTimer.current = setTimeout(finishScroll, 150);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    // Events from the portal viewer can bubble through this gallery in React.
    if (viewerOpen || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    const target = ({ ArrowLeft: "previous", ArrowRight: "next", Home: "first", End: "last" } as const)[event.key as "ArrowLeft" | "ArrowRight" | "Home" | "End"];
    if (target) {
      event.preventDefault();
      navigate(target);
    }
  };
  const startGesture = (event: PointerEvent<HTMLDivElement>) => {
    suppressClickUntil.current = 0;
    if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0) || count < 2) return;
    const viewport = event.currentTarget;
    // Let direct interaction take over from an in-flight button transition.
    clearSettleTimer();
    pendingIndex.current = null;
    if (event.pointerType === "mouse") {
      // Default button focus can scroll a partly visible slide into view before
      // dragging begins. Focus the viewport without moving the track instead.
      event.preventDefault();
      viewport.focus({ preventScroll: true });
    }
    gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, scrollLeft: viewport.scrollLeft, pointerType: event.pointerType, dragging: false };
  };
  const moveGesture = (event: PointerEvent<HTMLDivElement>) => {
    const start = gesture.current;
    if (!start || start.id !== event.pointerId) return;
    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.hypot(deltaX, deltaY) > 8) suppressClickUntil.current = event.timeStamp + 500;
    // Touch and pen retain the browser's native scrolling and momentum.
    if (start.pointerType !== "mouse") return;
    const viewport = event.currentTarget;
    if (!start.dragging) {
      if (Math.abs(deltaX) <= 8 || Math.abs(deltaX) <= Math.abs(deltaY) * 1.5) return;
      start.dragging = true;
      viewport.dataset.dragging = "true";
      viewport.setPointerCapture(event.pointerId);
      viewport.focus({ preventScroll: true });
    }
    event.preventDefault();
    viewport.scrollTo({ left: start.scrollLeft - deltaX, behavior: "instant" });
  };
  const finishGesture = (event: PointerEvent<HTMLDivElement>) => {
    const start = gesture.current;
    if (!start || start.id !== event.pointerId) return;
    gesture.current = null;
    if (start.dragging) {
      const viewport = event.currentTarget;
      const index = getCarouselDragIndex(start.scrollLeft, viewport.scrollLeft, event.clientX - start.x, event.clientY - start.y, viewport.clientWidth, count);
      delete viewport.dataset.dragging;
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
      suppressClickUntil.current = event.timeStamp + 500;
      navigate(index);
    }
  };
  const cancelGesture = (event: PointerEvent<HTMLDivElement>) => {
    const start = gesture.current;
    if (!start || start.id !== event.pointerId) return;
    gesture.current = null;
    suppressClickUntil.current = event.timeStamp + 500;
    // Native touch scrolling causes pointercancel. Do not interrupt its inertia.
    if (start.dragging) {
      const viewport = event.currentTarget;
      delete viewport.dataset.dragging;
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
      navigate(getCarouselScrollIndex(viewport.scrollLeft, viewport.clientWidth, count));
    }
  };

  if (!selected) return null;
  const label = groupLabel ?? `${projectName} application screens`;
  const number = (value: number) => String(value).padStart(2, "0");
  const arrowClass = "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/60 bg-card text-foreground transition-colors hover:border-muted-foreground/50 hover:bg-secondary/40 aria-disabled:cursor-default aria-disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 motion-reduce:transition-none";

  return (
    <>
      <section role="region" aria-roledescription="carousel" aria-label={label} aria-describedby={hintId} onKeyDown={onKeyDown} className={layout === "mobile" ? "mx-auto w-full max-w-[22rem]" : "w-full"}>
        <p id={hintId} className="sr-only">Use the previous and next buttons, left and right arrow keys, or swipe or drag horizontally to browse. Home and End jump to the first and last screen. Select the image to enlarge it.</p>
        <div className="mb-3 flex min-h-11 items-center justify-between gap-4">
          <div role="group" className="flex items-baseline gap-2 text-xs text-muted-foreground" aria-label={`Screen ${selectedIndex + 1} of ${screens.length}`}>
            <span className="font-mono text-base font-medium tabular-nums text-foreground">{number(selectedIndex + 1)}</span>
            <span aria-hidden="true">/</span>
            <span className="font-mono tabular-nums">{number(screens.length)}</span>
          </div>
          {screens.length > 1 && (
            <div role="group" aria-label={`${label} navigation`} className="flex gap-2">
              <button type="button" onClick={() => navigate("previous")} aria-disabled={selectedIndex === 0} aria-label={`Previous ${label}`} className={arrowClass}><ChevronLeft className="h-4 w-4" aria-hidden="true" /></button>
              <button type="button" onClick={() => navigate("next")} aria-disabled={selectedIndex === screens.length - 1} aria-label={`Next ${label}`} className={arrowClass}><ChevronRight className="h-4 w-4" aria-hidden="true" /></button>
            </div>
          )}
        </div>

      <figure className="overflow-hidden rounded-xl border border-border/60 bg-card">
        <div
          ref={track}
          role="group"
          aria-label={`${label} viewport`}
          tabIndex={count > 1 ? 0 : -1}
          className={styles.track}
          data-draggable={count > 1}
          style={{ aspectRatio: `${screens[0].preview.width} / ${screens[0].preview.height}` }}
          onScroll={onScroll}
          onClickCapture={(event) => {
            if (event.detail !== 0 && event.timeStamp < suppressClickUntil.current) {
              suppressClickUntil.current = 0;
              event.preventDefault();
              event.stopPropagation();
            }
          }}
          onPointerDown={startGesture}
          onPointerMove={moveGesture}
          onPointerUp={finishGesture}
          onPointerCancel={cancelGesture}
          onLostPointerCapture={cancelGesture}
          onPointerLeave={() => {
            if (gesture.current?.pointerType === "mouse" && !gesture.current.dragging) gesture.current = null;
          }}
        >
          {screens.map((screen, index) => (
            <div key={screen.id} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${count}: ${screen.title}`} aria-hidden={index !== selectedIndex} className={styles.slide}>
              <button
                type="button"
                tabIndex={index === selectedIndex ? 0 : -1}
                onClick={() => open(index)}
                aria-label={`Enlarge ${projectName} ${screen.title} mockup`}
                className={`${styles.imageButton} focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white/80`}
              >
                <Image
                  src={screen.preview.src}
                  alt={screen.alt}
                  fill
                  unoptimized
                  draggable={false}
                  loading={Math.abs(index - selectedIndex) <= 1 ? "eager" : "lazy"}
                  sizes={layout === "mobile" ? "(min-width: 392px) 352px, calc(100vw - 40px)" : "(min-width: 1024px) 768px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"}
                  className="pointer-events-none select-none object-contain"
                />
              </button>
            </div>
          ))}
        </div>
        <figcaption className={`flex flex-col gap-3 border-t border-border/40 p-4 sm:p-5 ${layout === "web" ? "sm:flex-row sm:items-center sm:justify-between sm:gap-5" : ""}`}>
          <div className="min-w-0" aria-live="polite" aria-atomic="true">
            <span className="sr-only">Screen {selectedIndex + 1} of {screens.length}. </span>
            <h3 className="text-sm font-semibold text-foreground">{selected.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{selected.description}</p>
          </div>
          <button type="button" onClick={() => open()} aria-label={`Enlarge ${selected.title} mockup`} className={`${actionStyles({ variant: "quiet" })} shrink-0 self-start ${layout === "web" ? "sm:self-center" : ""}`}>
            <Maximize2 className="h-4 w-4" aria-hidden="true" />Enlarge
          </button>
        </figcaption>
      </figure>
      {screens.length > 1 && (
        <div role="group" aria-label={`${label} slide selection`} className="mt-1 flex flex-wrap justify-center">
          {screens.map((screen, index) => (
            <button key={screen.id} type="button" onClick={() => navigate(index)} aria-label={`Show ${screen.title}, screen ${index + 1} of ${screens.length}`} aria-current={index === selectedIndex ? "true" : undefined} title={screen.title} className="group flex h-11 w-11 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40">
              <span aria-hidden="true" className={`h-1 rounded-full transition-all duration-200 motion-reduce:transition-none ${index === selectedIndex ? "w-6 bg-foreground/70" : "w-2 bg-muted-foreground/30 group-hover:w-4 group-hover:bg-muted-foreground/60"}`} />
            </button>
          ))}
        </div>
      )}
      </section>

      {viewerOpen && (
        <ProjectImageViewer
          images={screens}
          index={selectedIndex}
          onChange={navigate}
          onClose={() => setViewerOpen(false)}
          projectName={projectName}
          category="Application screen"
          contentName="screen"
          imageTone="dark"
          originalLabel="Open PNG"
        />
      )}
    </>
  );
}
