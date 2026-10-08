"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useModalFocus } from "@/lib/hooks/useModalFocus";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { highlights, networkLinks, workspaceLinks } from "@/lib/data/sidebar";

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileMenuCue, setShowMobileMenuCue] = useState(false);

  useEffect(() => {
    const cueStorageKey = "mobile-navigation-cue-seen";
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && !window.localStorage.getItem(cueStorageKey)) {
      window.localStorage.setItem(cueStorageKey, "true");
      const cueTimer = window.setTimeout(() => setShowMobileMenuCue(true), 0);
      return () => window.clearTimeout(cueTimer);
    }
  }, []);

  const mobileDialog = useRef<HTMLDivElement>(null);
  useModalFocus(mobileDialog, isMobileMenuOpen, () => setIsMobileMenuOpen(false));
  const isActiveRoute = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsMobileMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const navClass = (isActive: boolean) => `sidebar-nav-link flex min-h-11 items-center lg:min-h-8 rounded-md px-3 py-1.5 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 ${
    isActive ? "bg-foreground font-medium text-background" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
  }`;
  const renderWorkspaceLinks = (mobile = false) => (["primary", "supporting"] as const).map((priority) => (
    <div key={priority} role="group" aria-label={priority === "primary" ? "Primary destinations" : "Supporting destinations"} className={`sidebar-navigation-group flex flex-col gap-1 lg:gap-0.5 ${priority === "supporting" ? "border-t border-border/40 pt-3" : ""}`}>
      {workspaceLinks.filter((item) => item.priority === priority).map((item) => {
        const Icon = item.icon;
        return <Link key={item.name} href={item.href} onClick={mobile ? () => setIsMobileMenuOpen(false) : undefined} aria-current={isActiveRoute(item.href) ? (pathname === item.href ? "page" : "location") : undefined} className={`${navClass(isActiveRoute(item.href))} ${priority === "primary" ? "font-medium" : ""}`}><Icon className="mr-3 h-4 w-4 shrink-0 stroke-[1.5]" aria-hidden="true" />{item.name}</Link>;
      })}
    </div>
  ));

  return (
    <>
      <button type="button" aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)} className={`fixed right-4 top-4 z-[60] flex h-11 items-center justify-center gap-1 rounded-md border border-border/70 bg-background/90 px-2 text-xs font-medium tracking-[0.06em] text-foreground shadow-sm backdrop-blur-md transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden ${showMobileMenuCue && !isMobileMenuOpen ? "animate-mobile-menu-cue" : ""}`}>
        {isMobileMenuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}<span>{isMobileMenuOpen ? "Close" : "Menu"}</span>
      </button>
      {isMobileMenuOpen && <div ref={mobileDialog} tabIndex={-1} id="mobile-navigation" className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button type="button" aria-label="Close navigation menu" tabIndex={-1} onClick={() => setIsMobileMenuOpen(false)} className="absolute inset-0 cursor-default bg-background/60 backdrop-blur-sm" />
        <aside className="relative flex h-full w-[min(20rem,calc(100vw-2rem))] flex-col overflow-y-auto border-r border-border/40 bg-background px-5 py-5 shadow-2xl">
          <div className="mb-6 flex items-center justify-between"><span className="text-sm font-bold tracking-tight text-foreground">John Rodmar Agapolo</span><button type="button" aria-label="Close navigation menu" onClick={() => setIsMobileMenuOpen(false)} className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"><X className="h-4 w-4" /></button></div>
          <nav className="sidebar-navigation flex flex-col gap-3" aria-label="Mobile workspace navigation">{renderWorkspaceLinks(true)}</nav>
          <div className="mt-6 border-t border-border/40 pt-4"><h2 className="sidebar-section-heading mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Highlights</h2><ul className="flex flex-col gap-0.5">{highlights.map((item) => { const Icon = item.icon; return <li key={item.label} className="sidebar-highlight flex min-h-6 items-center px-3 text-xs text-muted-foreground"><Icon className="mr-3.5 h-3.5 w-3.5 shrink-0 stroke-[1.5]" />{item.label}</li>; })}</ul></div>
          <div className="mt-6 border-t border-border/40 pt-4"><h2 className="sidebar-section-heading mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Network</h2><div className="flex flex-col gap-0.5">{networkLinks.map((link) => { const Icon = link.icon; return <Link key={link.name} href={link.href} target={link.name !== "Resume" ? "_blank" : "_self"} rel={link.name !== "Resume" ? "noreferrer" : undefined} className="sidebar-network-link flex min-h-11 items-center px-3 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"><Icon className="mr-3.5 h-3.5 w-3.5 shrink-0 stroke-[1.5]" /><span className="inline-flex items-center gap-1">{link.name}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></span></Link>; })}</div><div className="mt-6 border-t border-border/40 pt-4"><ThemeToggle /></div></div>
        </aside>
      </div>}
      <aside className="desktop-sidebar sticky top-0 hidden h-dvh w-[17rem] shrink-0 flex-col justify-between overflow-y-auto border-r border-border/40 bg-background/95 px-5 backdrop-blur-md lg:flex">
        <header className="desktop-sidebar-header">
          <p className="text-[17px] font-semibold tracking-tight text-foreground">John Rodmar Agapolo</p>
        </header>
        <section className="desktop-sidebar-workspace w-full"><h2 className="sidebar-section-heading mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Workspace</h2><nav className="sidebar-navigation flex flex-col gap-3" aria-label="Workspace navigation">{renderWorkspaceLinks()}</nav></section>
        <section className="desktop-sidebar-highlights border-t border-border/40 pt-4"><h2 className="sidebar-section-heading mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Highlights</h2><ul className="flex flex-col gap-0.5">{highlights.map((item) => { const Icon = item.icon; return <li key={item.label} className="sidebar-highlight flex min-h-8 items-center px-3 text-xs text-muted-foreground"><Icon className="mr-3.5 h-3.5 w-3.5 shrink-0 stroke-[1.5]" />{item.label}</li>; })}</ul></section>
        <section className="desktop-sidebar-network border-t border-border/40 pt-4"><h2 className="sidebar-section-heading mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Network</h2><div className="flex flex-col gap-0.5">{networkLinks.map((link) => { const Icon = link.icon; return <Link key={link.name} href={link.href} target={link.name !== "Resume" ? "_blank" : "_self"} rel={link.name !== "Resume" ? "noreferrer" : undefined} className="sidebar-network-link flex min-h-8 items-center px-3 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"><Icon className="mr-3.5 h-3.5 w-3.5 shrink-0 stroke-[1.5]" /><span className="inline-flex items-center gap-1">{link.name}<span aria-hidden="true">↗</span></span></Link>; })}</div></section>
        <div className="desktop-sidebar-footer flex flex-col gap-3 border-t border-border/40 pt-4"><ThemeToggle /><div className="text-[10px] font-mono text-muted-foreground">© 2026 John Rodmar Agapolo</div></div>
      </aside>
    </>
  );
}
