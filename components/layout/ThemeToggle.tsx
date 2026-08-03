"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark" | "system";

const storageKey = "portfolio-theme";
const themeOptions = [
  { value: "light" as const, label: "Light", icon: Sun },
  { value: "dark" as const, label: "Dark", icon: Moon },
  { value: "system" as const, label: "System", icon: Monitor },
];

function applyTheme(theme: Theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && prefersDark);

  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";

  const storedTheme = localStorage.getItem(storageKey);
  return storedTheme === "light" || storedTheme === "dark" || storedTheme === "system"
    ? storedTheme
    : "system";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);
  const themeRef = useRef<Theme>(theme);

  useEffect(() => {
    applyTheme(themeRef.current);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => {
      if (themeRef.current === "system") applyTheme("system");
    };

    mediaQuery.addEventListener("change", updateSystemTheme);
    return () => mediaQuery.removeEventListener("change", updateSystemTheme);
  }, []);

  const selectTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    themeRef.current = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <div suppressHydrationWarning className="mb-8 border-t border-border/40 pt-8">
      <h3 className="mb-4 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Appearance
      </h3>
      <div className="grid grid-cols-3 rounded-md border border-border/50 bg-secondary/20 p-1">
        {themeOptions.map(({ value, label, icon: Icon }) => {
          const isActive = theme === value;

          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              onClick={() => selectTheme(value)}
              className={`flex flex-col items-center gap-1 rounded-sm px-2 py-2 text-[9px] font-medium transition-colors ${
                isActive
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
