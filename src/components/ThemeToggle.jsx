"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted
    ? theme === "dark" || theme === "light"
      ? theme
      : resolvedTheme
    : undefined;
  const isDark = activeTheme === "dark";

  const handleToggle = () => {
    if (!mounted) {
      return;
    }

    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition hover:bg-zinc-200 disabled:cursor-default disabled:opacity-70 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
      disabled={!mounted}
      onClick={handleToggle}
    >
      {!mounted ? (
        <span aria-hidden="true" className="h-4 w-4 rounded-full border border-current/40" />
      ) : isDark ? (
        <Sun aria-hidden="true" className="h-4 w-4" />
      ) : (
        <Moon aria-hidden="true" className="h-4 w-4" />
      )}
    </button>
  );
}
