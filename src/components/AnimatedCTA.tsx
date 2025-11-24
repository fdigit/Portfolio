"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface AnimatedCTAProps {
    href?: string;
    onClick?: () => void;
    children: ReactNode;
    variant?: "primary" | "secondary" | "gradient";
    size?: "sm" | "md" | "lg";
    className?: string;
    showArrow?: boolean;
}

export default function AnimatedCTA({
    href,
    onClick,
    children,
    variant = "gradient",
    size = "lg",
    className = "",
    showArrow = true,
}: AnimatedCTAProps) {
    const sizeClasses = {
        sm: "px-6 py-3 text-base",
        md: "px-8 py-4 text-lg",
        lg: "px-10 py-5 text-xl",
    };

    const variantClasses = {
        primary: "bg-[#F97316] hover:bg-[#EA580C]",
        secondary: "bg-accent hover:bg-accent-dark",
        gradient: "relative overflow-hidden",
    };

    const content = (
        <motion.div
            className={`
                relative inline-flex items-center justify-center gap-3
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                text-white font-bold rounded-xl
                shadow-lg hover:shadow-glow-orange-lg
                overflow-hidden group
                ${className}
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Animated gradient background - Bright Orange! */}
            {variant === "gradient" && (
                <>
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(to right, #F97316, #FF6B35, #FF8C42)",
                            backgroundSize: "200% auto",
                        }}
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                            background: "linear-gradient(to right, #FF8C42, #FF6B35, #F97316)",
                            backgroundSize: "200% auto",
                        }}
                        animate={{
                            backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </>
            )}

            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                }}
            />

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.5, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
                {children}
                {showArrow && (
                    <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <ArrowRight size={20} />
                    </motion.span>
                )}
            </span>

            {/* Ripple effect on click */}
            <motion.div
                className="absolute inset-0 rounded-xl"
                initial={{ scale: 0, opacity: 0.5 }}
                whileTap={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
            />
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} className="inline-block">
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className="inline-block">
            {content}
        </button>
    );
}

