"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MapPin, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { highlights, networkLinks, workspaceLinks } from "@/lib/data/sidebar";

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileMenuCue, setShowMobileMenuCue] = useState(false);

  useEffect(() => {
    const cueStorageKey = "mobile-navigation-cue-seen";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion && !window.localStorage.getItem(cueStorageKey)) {
      window.localStorage.setItem(cueStorageKey, "true");
      const cueTimer = window.setTimeout(() => setShowMobileMenuCue(true), 0);
      return () => window.clearTimeout(cueTimer);
    }
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        className={`fixed right-4 top-4 z-[60] flex h-[52px] max-w-[calc(100vw-2rem)] items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border bg-background/95 px-3 text-xs font-semibold uppercase tracking-[0.12em] text-foreground shadow-sm backdrop-blur-md transition-[background-color,border-color,color,box-shadow,transform] hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none lg:hidden ${
          showMobileMenuCue && !isMobileMenuOpen ? "animate-mobile-menu-cue" : ""
        }`}
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        <span>{isMobileMenuOpen ? "Close" : "Menu"}</span>
      </button>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 cursor-default bg-background/60 backdrop-blur-sm"
          />
          <aside className="relative flex h-full w-[min(20rem,calc(100vw-2rem))] flex-col overflow-y-auto border-r border-border/40 bg-background p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Workspace</span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1" aria-label="Mobile workspace navigation">
              {workspaceLinks.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 ${
                      isActive
                        ? "bg-foreground font-medium text-background"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0 stroke-[1.5]" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 border-t border-border/40 pt-8">
              <ThemeToggle />
            </div>
          </aside>
        </div>
      )}

    <aside className="sticky top-0 hidden h-screen w-80 flex-col overflow-y-auto border-r border-border/40 bg-background/95 p-6 backdrop-blur-md lg:flex [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col items-center text-center mb-8 mt-2">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border border-border/50 shadow-sm mb-4">
          <Image
            src="/badges/Agapolo1x1forBIR.png"
            alt="John Rodmar Agapolo"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <h1 className="font-bold text-lg tracking-tight text-foreground">John Rodmar Agapolo</h1>
        <h2 className="text-sm font-medium text-muted-foreground mt-0.5">Information Systems Graduate</h2>

        <p className="text-xs text-muted-foreground mt-4 leading-relaxed max-w-[220px]">
          Passionate about using technology to solve real-world problems.
        </p>
      </div>

      <div className="flex flex-col items-center gap-2.5 mb-10 pb-8 border-b border-border/40">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-700 dark:bg-zinc-300"></span>
          </span>
          <span className="text-xs font-medium text-foreground">Available for Opportunities</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
          Iloilo City, Philippines
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4 px-2">
          Workspace
        </h3>
        <nav className="flex flex-col gap-0.5">
          {workspaceLinks.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all ${
                  isActive
                    ? "bg-foreground text-background font-medium shadow-sm"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                }`}
              >
                <Icon className={`w-4 h-4 stroke-[1.5] ${isActive ? "text-background" : "text-muted-foreground group-hover:text-foreground"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mb-8 border-t border-border/40 pt-8">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4 px-2">
          Highlights
        </h3>
        <ul className="flex flex-col gap-3 px-2">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i} className="flex items-center gap-3 text-xs text-muted-foreground group">
                <Icon className="w-4 h-4 stroke-[1.5] group-hover:text-foreground transition-colors" />
                <span className="group-hover:text-foreground transition-colors">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-auto pt-8 border-t border-border/40">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4 px-2">
          Network
        </h3>
        <div className="flex flex-col gap-2.5 px-2 mb-8">
          {networkLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.name} href={link.href} target={link.name !== "Resume" ? "_blank" : "_self"} rel={link.name !== "Resume" ? "noreferrer" : undefined} className="text-xs flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Icon className="w-4 h-4 stroke-[1.5]" />
                {link.name}
              </Link>
            );
          })}
        </div>

        <ThemeToggle />

        <div className="flex items-center justify-between px-2 text-[10px] text-muted-foreground font-mono">
          <div className="flex flex-col gap-1">
            <span>Workspace v1.0</span>
            <span>Built with Next.js</span>
          </div>
          <span>© 2026</span>
        </div>
      </div>

    </aside>
    </>
  );
}
