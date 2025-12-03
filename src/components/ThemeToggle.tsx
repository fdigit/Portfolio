"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { getTheme, setTheme, applyTheme, type Theme } from "@/lib/theme";
import { Button } from "@/components/ui/Button";

export default function ThemeToggle() {
    const [theme, setThemeState] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setThemeState(getTheme());
    }, []);

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        setThemeState(newTheme);
    };

    if (!mounted) {
        return (
            <div className="w-20 h-10 rounded-lg bg-gray-light dark:bg-dark-card animate-pulse" aria-hidden="true" />
        );
    }

    return (
        <div className="relative inline-flex items-center gap-1 p-1 bg-gray-light dark:bg-dark-card rounded-lg border border-gray-medium dark:border-dark-border">
            <motion.button
                onClick={() => handleThemeChange("light")}
                className={`relative px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    theme === "light"
                        ? "text-primary bg-bg-white dark:bg-dark-card shadow-sm"
                        : "text-gray-dark dark:text-gray-light hover:text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Switch to light theme"
            >
                <Sun size={16} />
            </motion.button>
            <motion.button
                onClick={() => handleThemeChange("dark")}
                className={`relative px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    theme === "dark"
                        ? "text-primary bg-bg-white dark:bg-dark-card shadow-sm"
                        : "text-gray-dark dark:text-gray-light hover:text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Switch to dark theme"
            >
                <Moon size={16} />
            </motion.button>
        </div>
    );
}

