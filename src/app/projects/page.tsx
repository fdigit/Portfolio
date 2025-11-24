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
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-0" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollReveal direction="up" delay={0.1}>
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-dark">
                            All Projects
                        </h1>
                        <p className="text-gray-dark max-w-2xl text-lg">
                            A collection of my work in web and mobile development. Each project represents a unique challenge and solution.
                        </p>
                    </div>
                </ScrollReveal>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
