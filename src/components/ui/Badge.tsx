"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "primary" | "secondary" | "outline" | "success" | "warning" | "error";
    size?: "sm" | "md" | "lg";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = "default", size = "md", ...props }, ref) => {
        const variants = {
            default: "bg-gray-light dark:bg-gray-medium text-gray-dark dark:text-gray-light",
            primary: "bg-primary/10 text-primary border-primary/20",
            secondary: "bg-accent/10 text-accent border-accent/20",
            outline: "border-2 border-gray-medium dark:border-dark-border text-gray-dark dark:text-gray-light",
            success: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800",
            warning: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
            error: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800",
        };

        const sizes = {
            sm: "px-2 py-0.5 text-xs",
            md: "px-3 py-1 text-sm",
            lg: "px-4 py-1.5 text-base",
        };

        return (
            <span
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full border font-medium transition-colors",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Badge.displayName = "Badge";

export { Badge };




