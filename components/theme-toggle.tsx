"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch color theme"
      className="text-muted transition-colors hover:text-foreground"
    >
      <span data-theme-label="dark">
        <MoonIcon className="h-4 w-4" />
      </span>
      <span data-theme-label="light">
        <SunIcon className="h-4 w-4" />
      </span>
    </button>
  );
}
