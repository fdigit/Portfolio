"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

interface EmptyStateProps {
    title: string;
    description: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    icon?: React.ReactNode;
    className?: string;
}

export default function EmptyState({
    title,
    description,
    action,
    icon,
    className,
}: EmptyStateProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center py-12 px-4 text-center",
                className
            )}
        >
            {icon && (
                <div className="mb-4 text-gray-medium dark:text-gray-dark">
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-semibold text-text-dark dark:text-text-light mb-2">
                {title}
            </h3>
            <p className="text-gray-dark dark:text-gray-light max-w-md mb-6">
                {description}
            </p>
            {action && (
                <Button onClick={action.onClick} variant="primary">
                    {action.label}
                </Button>
            )}
        </div>
    );
}

