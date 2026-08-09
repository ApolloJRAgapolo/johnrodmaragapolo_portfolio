"use client";

import { useCallback, type ElementType, type ReactNode } from "react";

type GlowingCardProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export default function GlowingCard<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...props
}: GlowingCardProps<T>) {
  const Tag = (as || "div") as ElementType;

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;

    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = event.currentTarget;

    if (prefersReducedMotion) {
      target.style.setProperty("--card-glow-offset-x", "0px");
      target.style.setProperty("--card-glow-offset-y", "0px");
      target.style.setProperty("--card-glow-opacity", "0.16");
      return;
    }

    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = Math.max(-1, Math.min(1, (x / rect.width) * 2 - 1));
    const py = Math.max(-1, Math.min(1, (y / rect.height) * 2 - 1));
    const offsetScale = 18;
    const opacity = 0.16 + Math.max(0, Math.min(1, (Math.abs(px) + Math.abs(py)) / 2)) * 0.08;

    target.style.setProperty("--card-glow-offset-x", `${px * offsetScale}px`);
    target.style.setProperty("--card-glow-offset-y", `${py * offsetScale}px`);
    target.style.setProperty("--card-glow-opacity", `${opacity}`);
  }, []);

  const handlePointerLeave = useCallback((event: React.PointerEvent<HTMLElement>) => {
    const target = event.currentTarget;
    target.style.setProperty("--card-glow-opacity", "0");
    target.style.setProperty("--card-glow-offset-x", "0px");
    target.style.setProperty("--card-glow-offset-y", "0px");
  }, []);

  return (
    <Tag
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`glow-card ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
