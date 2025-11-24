"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md",
                scrolled
                    ? "bg-bg-white/95 dark:bg-dark-card/95 shadow-soft border-b border-gray-medium/50 dark:border-dark-border/50"
                    : "bg-transparent"
            )}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="relative group">
                        <motion.div
                            className="text-2xl font-bold text-text-dark relative"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="bg-gradient-to-r from-primary via-purple to-pink bg-clip-text text-transparent">
                                MF
                            </span>
                            <motion.div
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple group-hover:w-full transition-all duration-300"
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-4" aria-label="Desktop navigation">
                        <div className="flex space-x-1">
                            {NAV_LINKS.map((link, index) => {
                            const isActive = pathname === link.href;
                            return (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className={cn(
                                            "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                            isActive
                                                ? "text-primary"
                                                : "text-text-dark dark:text-text-light hover:text-primary"
                                        )}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        <motion.span
                                            whileHover={{ scale: 1.05 }}
                                            className="relative z-10"
                                        >
                                            {link.name}
                                        </motion.span>
                                        
                                        {/* Active indicator */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple/10 rounded-lg"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        
                                        {/* Hover underline */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </Link>
                                </motion.div>
                            );
                        })}
                        </div>
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                        >
                            <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text-dark hover:text-primary focus:outline-none p-2 rounded-lg hover:bg-gray-light transition-colors"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={28} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={28} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-bg-white border-t border-gray-medium shadow-lg relative z-50"
                        >
                            <nav className="px-4 pt-2 pb-6 space-y-1" aria-label="Mobile navigation">
                                {NAV_LINKS.map((link, index) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "block px-4 py-3 text-base font-medium rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                                    isActive
                                                        ? "text-primary bg-gradient-to-r from-primary/10 to-purple/10"
                                                        : "text-text-dark dark:text-text-light hover:text-primary hover:bg-gray-light dark:hover:bg-gray-medium"
                                                )}
                                                aria-current={isActive ? "page" : undefined}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
