"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", onClick, ...props }, ref) => {
        const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
        const buttonRef = useRef<HTMLButtonElement>(null);
        const rippleIdRef = useRef(0);

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (buttonRef.current) {
                const rect = buttonRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const id = rippleIdRef.current++;

                setRipples((prev) => [...prev, { x, y, id }]);

                setTimeout(() => {
                    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
                }, 600);
            }

            onClick?.(e);
        };

        const variants = {
            primary: "bg-orange hover:bg-orange-dark text-white shadow-lg shadow-orange/40 hover:shadow-glow-orange hover:scale-105 font-bold",
            secondary: "bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/25 hover:shadow-glow hover:scale-105",
            outline: "border-2 border-orange text-orange hover:bg-orange/10 hover:border-orange-light hover:shadow-glow-orange hover:scale-105 relative overflow-hidden group font-semibold dark:border-orange dark:text-orange dark:hover:bg-orange/10",
            ghost: "text-gray-dark dark:text-gray-light hover:bg-gray-light dark:hover:bg-gray-medium hover:scale-105",
            gradient: "bg-gradient-to-r from-orange via-orange-bright to-orange-glow text-white shadow-lg shadow-orange/40 hover:shadow-glow-orange-lg hover:scale-105 bg-[length:200%_auto] animate-gradient-x font-bold",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        const isGradient = variant === "gradient";
        const isOutline = variant === "outline";

        return (
            <motion.button
                ref={(node) => {
                    if (typeof ref === "function") {
                        ref(node);
                    } else if (ref) {
                        ref.current = node;
                    }
                    buttonRef.current = node;
                }}
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    !isGradient && variants[variant],
                    sizes[size],
                    className
                )}
                {...(props as any)}
            >
                {isGradient && (
                    <span 
                        className="absolute inset-0 bg-[length:200%_auto] animate-gradient-x opacity-100"
                        style={{
                            background: "linear-gradient(to right, var(--orange), var(--orange-bright), var(--orange-glow))",
                        }}
                    />
                )}
                {isOutline && (
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                )}
                <span className="relative z-10 flex items-center gap-2">{props.children}</span>
                {ripples.map((ripple) => (
                    <motion.span
                        key={ripple.id}
                        className="absolute rounded-full bg-white/30 pointer-events-none"
                        initial={{ width: 0, height: 0, opacity: 0.6 }}
                        animate={{ width: 300, height: 300, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            left: ripple.x - 150,
                            top: ripple.y - 150,
                        }}
                    />
                ))}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
