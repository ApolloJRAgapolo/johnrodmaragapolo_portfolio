"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useId, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import ProjectImageViewer from "@/components/features/case-files/ProjectImageViewer";
import { actionStyles } from "@/lib/action-styles";
import { getCarouselIndex, getCarouselSwipe, type CarouselTarget } from "@/lib/project-carousel";
import type { ProjectImage } from "@/lib/types";
import styles from "./ProjectScreenGallery.module.css";

type Props = {
  projectName: string;
  screens: ProjectImage[];
  layout?: "web" | "mobile";
  groupLabel?: string;
};

export default function ProjectScreenGallery({ projectName, screens, layout = "web", groupLabel }: Props) {
  const [position, setPosition] = useState({ index: 0, direction: "forward" });
  const [viewerOpen, setViewerOpen] = useState(false);
  const gesture = useRef<{ id: number; x: number; y: number } | null>(null);
  const suppressClickUntil = useRef(0);
  const hintId = useId();
  const selectedIndex = getCarouselIndex(position.index, screens.length);
  const selected = screens[selectedIndex];
  if (!selected) return null;

  const open = () => setViewerOpen(true);
  const navigate = (target: CarouselTarget) => {
    setPosition((previous) => {
      const current = getCarouselIndex(previous.index, screens.length);
      const index = getCarouselIndex(current, screens.length, target);
      if (index === current && previous.index === current) return previous;
      return { index, direction: index < current ? "backward" : "forward" };
    });
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
  const startGesture = (event: PointerEvent<HTMLButtonElement>) => {
    suppressClickUntil.current = 0;
    if (!event.isPrimary || event.pointerType === "mouse" || screens.length < 2) {
      gesture.current = null;
      return;
    }
    gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
  };
  const finishGesture = (event: PointerEvent<HTMLButtonElement>) => {
    const start = gesture.current;
    gesture.current = null;
    if (!start || start.id !== event.pointerId) return;
    const target = getCarouselSwipe(event.clientX - start.x, event.clientY - start.y);
    if (target) {
      // A swipe must not also open the enlarged image via the following click.
      suppressClickUntil.current = Date.now() + 500;
      navigate(target);
    }
  };
  const label = groupLabel ?? `${projectName} application screens`;
  const number = (value: number) => String(value).padStart(2, "0");
  const arrowClass = "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/60 bg-card text-foreground transition-colors hover:border-muted-foreground/50 hover:bg-secondary/40 aria-disabled:cursor-default aria-disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 motion-reduce:transition-none";

  return (
    <>
      <section role="region" aria-roledescription="carousel" aria-label={label} aria-describedby={hintId} onKeyDown={onKeyDown} className={layout === "mobile" ? "mx-auto w-full max-w-[22rem]" : "w-full"}>
        <p id={hintId} className="sr-only">Use the previous and next buttons, left and right arrow keys, or swipe horizontally to browse. Home and End jump to the first and last screen. Select the image to enlarge it.</p>
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

      <figure role="group" aria-roledescription="slide" aria-label={`${selectedIndex + 1} of ${screens.length}: ${selected.title}`} className="overflow-hidden rounded-xl border border-border/60 bg-card">
        <button
          type="button"
          onClick={(event) => {
            if (event.detail !== 0 && Date.now() < suppressClickUntil.current) {
              suppressClickUntil.current = 0;
              event.preventDefault();
              return;
            }
            open();
          }}
          onPointerDown={startGesture}
          onPointerUp={finishGesture}
          onPointerCancel={() => { gesture.current = null; }}
          aria-label={`Enlarge ${projectName} ${selected.title} mockup`}
          className="group relative block w-full overflow-hidden bg-[#0a0a0a] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white/80"
          style={{ aspectRatio: `${selected.preview.width} / ${selected.preview.height}`, touchAction: "pan-y pinch-zoom" }}
        >
          <div key={selected.id} className={`absolute inset-0 ${position.direction === "backward" ? styles.backward : styles.forward}`}>
          <Image
            src={selected.preview.src}
            alt={selected.alt}
            fill
            unoptimized
            draggable={false}
            sizes={layout === "mobile" ? "(min-width: 392px) 352px, calc(100vw - 40px)" : "(min-width: 1024px) 768px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"}
            className="object-contain"
          />
          </div>
        </button>
        <figcaption className={`flex flex-col gap-3 border-t border-border/40 p-4 sm:p-5 ${layout === "web" ? "sm:flex-row sm:items-center sm:justify-between sm:gap-5" : ""}`}>
          <div className="min-w-0" aria-live="polite" aria-atomic="true">
            <span className="sr-only">Screen {selectedIndex + 1} of {screens.length}. </span>
            <h3 className="text-sm font-semibold text-foreground">{selected.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{selected.description}</p>
          </div>
          <button type="button" onClick={open} aria-label={`Enlarge ${selected.title} mockup`} className={`${actionStyles({ variant: "quiet" })} shrink-0 self-start ${layout === "web" ? "sm:self-center" : ""}`}>
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
