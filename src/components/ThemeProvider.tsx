"use client";

import { useEffect } from "react";
import { initTheme } from "@/lib/theme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Theme is already initialized via inline script in layout
        // This just sets up the listener for system theme changes
        initTheme();
    }, []);

    return <>{children}</>;
}

