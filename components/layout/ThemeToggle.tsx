"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { createThemeTransitionController } from "@/lib/theme-transition";

type Theme = "light" | "dark" | "system";

const storageKey = "portfolio-theme";
const themeChangeEvent = "portfolio-theme-change";
let preferredTheme: Theme | undefined;
let changeTheme: ReturnType<typeof createThemeTransitionController> | undefined;
const themeOptions = [
  { value: "light" as const, label: "Light", icon: Sun },
  { value: "dark" as const, label: "Dark", icon: Moon },
  { value: "system" as const, label: "System", icon: Monitor },
];

function resolvesToDark(theme: Theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return theme === "dark" || (theme === "system" && prefersDark);
}

function applyTheme(theme: Theme) {
  const isDark = resolvesToDark(theme);

  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";

  try {
    const storedTheme = localStorage.getItem(storageKey);
    return storedTheme === "light" || storedTheme === "dark" || storedTheme === "system"
      ? storedTheme
      : "system";
  } catch {
    return "system";
  }
}

function selectTheme(nextTheme: Theme, button: HTMLButtonElement) {
  preferredTheme = nextTheme;
  try {
    localStorage.setItem(storageKey, nextTheme);
  } catch {
    // Switching still works when the browser disallows persistent storage.
  }
  const bounds = button.getBoundingClientRect();
  changeTheme ??= createThemeTransitionController(document, window);
  changeTheme(() => {
    flushSync(() => {
      applyTheme(nextTheme);
      window.dispatchEvent(new CustomEvent(themeChangeEvent, { detail: nextTheme }));
    });
  }, {
    origin: { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 },
    animate: resolvesToDark(nextTheme) !== document.documentElement.classList.contains("dark"),
  });
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    preferredTheme ??= getStoredTheme();
    changeTheme ??= createThemeTransitionController(document, window);
    applyTheme(preferredTheme);
    const syncTheme = window.setTimeout(() => setTheme(preferredTheme ?? "system"), 0);

    // Keep the desktop control and the mobile menu's control in sync.
    const updateSelection = (event: Event) => setTheme((event as CustomEvent<Theme>).detail);
    window.addEventListener(themeChangeEvent, updateSelection);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => {
      if (preferredTheme === "system") changeTheme?.(() => applyTheme("system"), { animate: false });
    };

    mediaQuery.addEventListener("change", updateSystemTheme);
    return () => {
      window.clearTimeout(syncTheme);
      window.removeEventListener(themeChangeEvent, updateSelection);
      mediaQuery.removeEventListener("change", updateSystemTheme);
    };
  }, []);

  return (
    <div suppressHydrationWarning className="sidebar-appearance">
      <h3 className="sidebar-section-heading mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Appearance
      </h3>
      <div className="grid grid-cols-3 gap-1" role="group" aria-label="Appearance">
        {themeOptions.map(({ value, label, icon: Icon }) => {
          const isActive = theme === value;

          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              onClick={(event) => selectTheme(value, event.currentTarget)}
              className={`flex min-h-11 items-center justify-center gap-1 rounded-sm px-1.5 py-1 text-xs font-medium transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 lg:min-h-8 ${
                isActive
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon
                aria-hidden="true"
                className={`h-3.5 w-3.5 ${isActive ? "opacity-100" : "opacity-60"}`}
              />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
