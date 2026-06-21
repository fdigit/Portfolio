"use client";

import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

export default function ProjectsClient({ projectsData }: { projectsData: Project[] }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const,
            },
        },
    };

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projectsData.forEach((p) => p.tags.forEach((t) => tags.add(t)));
        return ["All", ...Array.from(tags).sort()];
    }, [projectsData]);

    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projectsData;
        return projectsData.filter((p) => p.tags.includes(activeFilter));
    }, [projectsData, activeFilter]);

    return (
        <main className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-0" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollReveal direction="up" delay={0.1}>
                    <div className="mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-text-dark dark:text-text-light">
                            All Projects
                        </h1>
                        <p className="text-base sm:text-lg text-gray-dark dark:text-gray-300 max-w-2xl">
                            A collection of my work in web and mobile development. Each project represents a unique challenge and solution.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Filter Tabs */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="flex overflow-x-auto flex-nowrap sm:flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mask-edges">
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setActiveFilter(tag)}
                                className={`relative px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-colors duration-300 z-10 shrink-0 whitespace-nowrap ${
                                    activeFilter === tag
                                        ? "text-white"
                                        : "text-gray-dark dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
                                }`}
                            >
                                {activeFilter === tag && (
                                    <motion.div
                                        layoutId="activeFilterBubble"
                                        className="absolute inset-0 bg-gradient-to-r from-primary to-purple rounded-full -z-10 shadow-glow"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tag}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                <motion.div
                    layout
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
