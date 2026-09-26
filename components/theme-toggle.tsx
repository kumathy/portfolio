"use client";

import { LuMoon, LuSun } from "react-icons/lu";

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
      className="inline-flex items-center text-muted transition-colors hover:text-foreground"
    >
      <span data-theme-label="dark">
        <LuMoon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span data-theme-label="light">
        <LuSun className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </span>
    </button>
  );
}
