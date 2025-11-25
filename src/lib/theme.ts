"use client";

/**
 * Theme management utilities
 */

export type Theme = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "portfolio-theme";

/**
 * Get the current theme from localStorage or system preference
 */
export function getTheme(): Theme {
    if (typeof window === "undefined") return "system";
    
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    return stored || "system";
}

/**
 * Set the theme in localStorage
 */
export function setTheme(theme: Theme): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    applyTheme(theme);
}

/**
 * Apply the theme to the document
 */
export function applyTheme(theme: Theme): void {
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        root.classList.add(systemTheme);
    } else {
        root.classList.add(theme);
    }
}

/**
 * Initialize theme on mount
 */
export function initTheme(): void {
    if (typeof window === "undefined") return;
    applyTheme(getTheme());

    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        const currentTheme = getTheme();
        if (currentTheme === "system") {
            applyTheme("system");
        }
    });
}



