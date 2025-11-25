"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    spacing?: "none" | "sm" | "md" | "lg" | "xl";
    background?: "default" | "light" | "dark" | "gradient";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, spacing = "lg", background = "default", children, ...props }, ref) => {
        const spacings = {
            none: "py-0",
            sm: "py-12",
            md: "py-16",
            lg: "py-24",
            xl: "py-32",
        };

        const backgrounds = {
            default: "bg-background",
            light: "bg-bg-light dark:bg-dark-card",
            dark: "bg-bg-dark text-text-light",
            gradient: "bg-gradient-to-br from-primary/5 via-purple/5 to-pink/5",
        };

        return (
            <section
                ref={ref}
                className={cn(
                    "relative",
                    spacings[spacing],
                    backgrounds[background],
                    className
                )}
                {...props}
            >
                {children}
            </section>
        );
    }
);

Section.displayName = "Section";

export { Section };



