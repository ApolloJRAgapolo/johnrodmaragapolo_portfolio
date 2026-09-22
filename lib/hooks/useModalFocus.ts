"use client";

import { useEffect, useRef, type RefObject } from "react";

/** Keep focus and interaction inside an open modal, then restore the trigger. */
export function useModalFocus(ref: RefObject<HTMLElement | null>, open: boolean, onClose: () => void) {
  const close = useRef(onClose);
  useEffect(() => { close.current = onClose; }, [onClose]);
  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return;
    const trigger = document.activeElement as HTMLElement | null;
    const inertElements = new Map<HTMLElement, boolean>();
    let branch: HTMLElement = dialog;
    while (branch.parentElement) {
      for (const sibling of branch.parentElement.children) {
        if (sibling !== branch && sibling instanceof HTMLElement) {
          inertElements.set(sibling, sibling.inert);
          sibling.setAttribute("inert", "");
        }
      }
      branch = branch.parentElement;
      if (branch === document.body) break;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = () => Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]')).filter(el => el.tabIndex >= 0 && !el.closest('[inert], [hidden]') && el.getClientRects().length > 0);
    (focusable()[0] ?? dialog).focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); close.current(); }
      if (event.key !== "Tab") return;
      const elements = focusable();
      const first = elements[0];
      const last = elements.at(-1);
      if (!first || !last) { event.preventDefault(); dialog.focus(); return; }
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialog)) { event.preventDefault(); first.focus(); }
    };
    const keepFocus = (event: FocusEvent) => { if (!dialog.contains(event.target as Node)) (focusable()[0] ?? dialog).focus(); };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", keepFocus);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", keepFocus);
      inertElements.forEach((value, element) => { element.toggleAttribute("inert", value); });
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) trigger.focus();
    };
  }, [open, ref]);
}
