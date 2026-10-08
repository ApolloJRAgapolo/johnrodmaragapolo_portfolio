"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Maximize2, Minus, Plus, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { actionStyles } from "@/lib/action-styles";
import { getDiagramFitScale, getDiagramZoomLimit } from "@/lib/diagram-viewer";
import { useModalFocus } from "@/lib/hooks/useModalFocus";
import type { ProjectImage } from "@/lib/types";

export type ProjectImageViewerProps = {
  images: ProjectImage[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
  projectName: string;
  category: string;
  contentName: string;
  imageTone?: "light" | "dark";
  originalLabel?: string;
};

const controlClass = "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-border/60 px-3 text-xs font-medium text-foreground transition-colors hover:bg-secondary disabled:cursor-default disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export default function ProjectImageViewer({ images, index, onChange, onClose, projectName, category, contentName, imageTone = "light", originalLabel = "Open original" }: ProjectImageViewerProps) {
  const item = images[index];
  const dialog = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);
  const [loadedId, setLoadedId] = useState<string | null>(null);
  const [failedId, setFailedId] = useState<string | null>(null);
  useModalFocus(dialog, Boolean(item), onClose);

  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const measure = () => {
      const { width, height } = element.getBoundingClientRect();
      setViewport((previous) => previous.width === width && previous.height === height ? previous : { width, height });
    };
    const frame = window.requestAnimationFrame(measure);
    const observer = typeof ResizeObserver === "undefined" ? undefined : new ResizeObserver(measure);
    observer?.observe(element);
    window.addEventListener("resize", measure);
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  if (!item) return null;
  const measured = viewport.width > 0 && viewport.height > 0;
  const fitScale = measured ? getDiagramFitScale(item.display.width, item.display.height, viewport.width, viewport.height) : 1;
  const zoomLimit = getDiagramZoomLimit(fitScale);
  const scale = fitScale * Math.min(zoom, zoomLimit);
  const imageWidth = Math.round(item.display.width * scale);
  const imageHeight = Math.round(item.display.height * scale);
  const failed = failedId === item.id;
  const loading = loadedId !== item.id && !failed;
  const dark = imageTone === "dark";

  const navigate = (nextIndex: number) => {
    setZoom(1);
    stage.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
    onChange(nextIndex);
  };
  const fitToScreen = () => {
    setZoom(1);
    stage.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return createPortal(
    <div ref={dialog} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descriptionId} tabIndex={-1} className="fixed inset-0 z-[80] flex items-center justify-center p-2 sm:p-4">
      <button type="button" tabIndex={-1} aria-label={`Close ${contentName} preview`} onClick={onClose} className="document-viewer-backdrop absolute inset-0 cursor-default bg-background/95" />
      <div className="document-viewer-panel relative flex h-[calc(100dvh-1rem)] max-h-[960px] w-full max-w-7xl min-w-0 flex-col overflow-hidden rounded-sm border border-border/60 bg-card sm:h-[calc(100dvh-2rem)]">
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border/40 px-4 py-2">
          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{projectName} · {category}</p>
            <h2 id={titleId} className="break-words text-sm font-semibold text-foreground sm:text-base">{item.title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label={`Close ${contentName} preview`} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-muted-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><X className="h-4 w-4" aria-hidden="true" /></button>
        </header>

        <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border/40 px-3 py-2 sm:px-4">
          <div className="flex items-center gap-1.5">
            <button type="button" onClick={() => navigate(index - 1)} disabled={index === 0} aria-label={`Previous ${contentName}`} className={controlClass}><ChevronLeft className="h-4 w-4" aria-hidden="true" /></button>
            <span className="min-w-16 text-center text-xs text-muted-foreground" aria-live="polite">{index + 1} / {images.length}</span>
            <button type="button" onClick={() => navigate(index + 1)} disabled={index === images.length - 1} aria-label={`Next ${contentName}`} className={controlClass}><ChevronRight className="h-4 w-4" aria-hidden="true" /></button>
          </div>
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label={`${contentName} zoom`}>
            <button type="button" onClick={() => setZoom((current) => Math.max(1, current - 0.5))} disabled={!measured || zoom <= 1} aria-label="Zoom out" className={controlClass}><Minus className="h-3.5 w-3.5" aria-hidden="true" /></button>
            <output className="min-w-12 text-center text-xs tabular-nums text-muted-foreground" aria-label="Zoom level">{measured ? `${Math.round(scale * 100)}%` : "—"}</output>
            <button type="button" onClick={() => setZoom((current) => Math.min(zoomLimit, current + 0.5))} disabled={!measured || zoom >= zoomLimit} aria-label="Zoom in" className={controlClass}><Plus className="h-3.5 w-3.5" aria-hidden="true" /></button>
            <button type="button" onClick={fitToScreen} aria-label={`Fit ${contentName} to screen`} className={controlClass}><Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />Fit</button>
            <button type="button" onClick={() => setZoom(1 / fitScale)} disabled={!measured} className={controlClass}>Actual size</button>
          </div>
        </div>

        <div ref={stage} tabIndex={0} role="region" aria-label={`${contentName} image; zoom in and scroll to explore details`} aria-busy={loading} className={`relative min-h-0 min-w-0 flex-1 overflow-auto overscroll-contain focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${dark ? "bg-[#0a0a0a] text-slate-100" : "bg-white text-slate-900"}`}>
          {loading && <span role="status" className={`pointer-events-none absolute left-4 top-3 z-10 rounded-sm border px-3 py-2 text-xs ${dark ? "border-white/15 bg-[#181a1c] text-slate-300" : "border-slate-200 bg-white text-slate-600"}`}>Loading {contentName}…</span>}
          {failed ? (
            <div role="alert" className={`flex h-full min-h-40 items-center justify-center p-6 text-center text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>The preview could not load. You can still open the full-size image below.</div>
          ) : measured && (
            <div className="grid min-h-full min-w-full place-items-center p-4" style={{ width: Math.max(viewport.width, imageWidth + 32), height: Math.max(viewport.height, imageHeight + 32) }}>
              <Image key={item.id} src={item.display.src} alt={item.alt} width={item.display.width} height={item.display.height} unoptimized loading="eager" decoding="async" draggable={false} className="block max-w-none" style={{ width: imageWidth, height: imageHeight }} onLoad={() => setLoadedId(item.id)} onError={() => setFailedId(item.id)} />
            </div>
          )}
        </div>

        <footer className="flex shrink-0 flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-border/40 px-4 py-3">
          <p id={descriptionId} className="max-w-3xl text-xs leading-relaxed text-muted-foreground">{item.description}</p>
          <a href={item.original.src} target="_blank" rel="noreferrer" className={`${actionStyles()} shrink-0`}>{originalLabel}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a>
        </footer>
      </div>
    </div>, document.body,
  );
}
