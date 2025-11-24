"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import AnimatedCTA from "@/components/AnimatedCTA";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import Parallax from "./animations/Parallax";
import Link from "next/link";
import { downloadCV } from "@/lib/downloads";
import { toast } from "sonner";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-bg-light">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 via-purple/20 to-pink/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/30 via-cyan/20 to-primary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-purple/5 to-pink/5 rounded-full blur-3xl"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                
                {/* Animated gradient mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple/5" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Text Content */}
                    <motion.div variants={itemVariants}>
                        <div className="relative overflow-hidden mb-6 h-10" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 text-white font-medium text-sm shadow-lg whitespace-nowrap"
                                style={{
                                    background: "linear-gradient(to right, var(--orange), var(--orange-bright), var(--orange-glow))",
                                    boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
                                }}
                                initial={{ x: "100vw" }}
                                animate={{
                                    x: ["100vw", "-100%"],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <Sparkles size={14} className="animate-pulse" />
                                <span>Available for new projects</span>
                            </motion.div>
                        </div>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-dark mb-6 leading-tight"
                            variants={itemVariants}
                        >
                            Hi, <br className="md:hidden" />
                            <span className="md:block">I'm Mfon Francis</span>{" "}
                            <span className="text-orange text-2xl md:text-3xl lg:text-4xl font-semibold block md:inline md:ml-2">
                                Web & Mobile Developer
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-dark mb-8 max-w-lg leading-relaxed"
                            variants={itemVariants}
                        >
                            I build modern web apps, mobile apps, and beautiful user experiences with a focus on performance and design.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={itemVariants}
                        >
                            <Link href="/projects">
                                <AnimatedCTA variant="gradient" size="lg">
                                    View My Projects
                                </AnimatedCTA>
                            </Link>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={async () => {
                                    try {
                                        await downloadCV();
                                        toast.success("CV downloaded successfully!");
                                    } catch (error) {
                                        toast.error("Failed to download CV. Please try again.");
                                    }
                                }}
                                aria-label="Download CV"
                            >
                                Download CV
                                <Download className="ml-2" size={20} />
                            </Button>
                        </motion.div>

                        {/* Tech Stack Mini-list */}
                        <motion.div
                            className="mt-12 pt-8 border-t border-gray-medium"
                            variants={itemVariants}
                        >
                            <p className="text-sm text-gray-dark mb-4 font-medium">Tech Stack</p>
                            <div className="flex gap-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <motion.span
                                    className="text-2xl"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    ⚛️
                                </motion.span>
                                <motion.span
                                    className="text-2xl"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    🔷
                                </motion.span>
                                <motion.span
                                    className="text-2xl"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    🎨
                                </motion.span>
                                <motion.span
                                    className="text-2xl"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    📱
                                </motion.span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image with Parallax */}
                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <Parallax speed={0.3}>
                            <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">
                                {/* Enhanced glow effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary via-purple to-pink rounded-full opacity-30 blur-3xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                
                                <motion.div
                                    className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-bg-white shadow-2xl"
                                    whileHover={{ rotate: 0, scale: 1.05 }}
                                    initial={{ rotate: 3 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <Image
                                        src="/images/mfon.png"
                                        alt="Mfon Francis"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    
                                    {/* Animated overlay gradient */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/0 via-purple/0 to-pink/0"
                                        whileHover={{
                                            background: "linear-gradient(to bottom right, rgba(37, 99, 235, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>

                                {/* Floating particles effect */}
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-primary rounded-full"
                                        style={{
                                            left: `${20 + i * 15}%`,
                                            top: `${10 + i * 12}%`,
                                        }}
                                        animate={{
                                            y: [0, -20, 0],
                                            opacity: [0.3, 0.8, 0.3],
                                            scale: [1, 1.5, 1],
                                        }}
                                        transition={{
                                            duration: 3 + i * 0.5,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                            ease: "easeInOut",
                                        }}
                                    />
                                ))}
                            </div>
                        </Parallax>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
