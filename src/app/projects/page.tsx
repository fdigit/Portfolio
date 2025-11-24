"use client";

import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

export default function ProjectsPage() {
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

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            variants={itemVariants}
                            custom={index}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}
