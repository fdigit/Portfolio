"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
    return (
        <SonnerToaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
                style: {
                    background: "var(--bg-white)",
                    color: "var(--text-dark)",
                    border: "1px solid var(--gray-medium)",
                },
                className: "dark:bg-dark-card dark:text-text-light dark:border-dark-border",
            }}
        />
    );
}





