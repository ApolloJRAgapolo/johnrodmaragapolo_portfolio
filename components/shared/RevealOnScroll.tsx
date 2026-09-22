"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  animate?: boolean;
  className?: string;
}

export default function RevealOnScroll({ children, delay = 0, animate = true, className = "" }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!animate || !element || motion.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (!motion.matches) element.style.animation = `reveal-content 450ms ease-out ${Math.min(delay, 200)}ms backwards`;
      observer.unobserve(element);
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, [animate, delay]);
  return <div ref={ref} className={`reveal-on-scroll ${className}`}>{children}</div>;
}
