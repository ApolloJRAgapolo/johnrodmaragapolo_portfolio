"use client";

import { useEffect, useRef } from "react";

const interactiveSelector = "a, button, [role='button'], summary, [data-case-file]";
const textInputSelector = "input, textarea, select, [contenteditable='true']";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const resetClickRef = useRef<number | null>(null);
  const positionRef = useRef({ currentX: 0, currentY: 0, targetX: 0, targetY: 0, ready: false });

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!cursor || !finePointer.matches || reducedMotion.matches) return;

    const setActive = (active: boolean) => {
      cursor.dataset.active = active ? "true" : "false";
      document.body.classList.toggle("custom-cursor-enabled", active);
    };

    const animate = () => {
      const position = positionRef.current;
      const distance = Math.hypot(position.targetX - position.currentX, position.targetY - position.currentY);
      const smoothing = Math.min(0.42, 0.16 + distance / 180);

      position.currentX += (position.targetX - position.currentX) * smoothing;
      position.currentY += (position.targetY - position.currentY) * smoothing;
      cursor.style.transform = `translate3d(${position.currentX}px, ${position.currentY}px, 0)`;
      frameRef.current = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const target = event.target instanceof Element ? event.target : null;
      const overTextInput = target?.closest(textInputSelector);
      const overInteractive = target?.closest(interactiveSelector);
      const position = positionRef.current;

      position.targetX = event.clientX;
      position.targetY = event.clientY;
      if (!position.ready) {
        position.currentX = event.clientX;
        position.currentY = event.clientY;
        position.ready = true;
      }

      cursor.dataset.hover = overInteractive && !overTextInput ? "true" : "false";
      cursor.dataset.hidden = overTextInput ? "true" : "false";
      setActive(true);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !positionRef.current.ready) return;
      cursor.dataset.clicking = "true";
      if (resetClickRef.current !== null) window.clearTimeout(resetClickRef.current);
      resetClickRef.current = window.setTimeout(() => {
        cursor.dataset.clicking = "false";
        resetClickRef.current = null;
      }, 260);
    };

    const handlePointerLeave = () => {
      positionRef.current.ready = false;
      cursor.dataset.hidden = "true";
      setActive(false);
    };

    const handleMediaChange = () => {
      if (!finePointer.matches || reducedMotion.matches) {
        positionRef.current.ready = false;
        setActive(false);
      }
    };

    frameRef.current = window.requestAnimationFrame(animate);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    finePointer.addEventListener("change", handleMediaChange);
    reducedMotion.addEventListener("change", handleMediaChange);

    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      if (resetClickRef.current !== null) window.clearTimeout(resetClickRef.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      finePointer.removeEventListener("change", handleMediaChange);
      reducedMotion.removeEventListener("change", handleMediaChange);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true" data-active="false" data-hidden="true" data-hover="false" data-clicking="false">
      <svg className="custom-cursor-arrow" viewBox="0 0 24 30" focusable="false">
        <path d="M2.5 2.2 20.7 16 13.2 17.6 17 26.3l-3.1 1.4-3.8-8.7-5.3 5.2Z" />
      </svg>
      <span className="custom-cursor-burst">
        {Array.from({ length: 8 }, (_, index) => <i key={index} className={`custom-cursor-ray custom-cursor-ray-${index + 1}`} />)}
      </span>
    </div>
  );
}
