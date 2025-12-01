"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiFirebase,
    SiExpress,
    SiPostgresql,
} from "react-icons/si";
import ScrollReveal from "./animations/ScrollReveal";

interface TechItem {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    category: "Frontend" | "Backend" | "Mobile" | "Database" | "Tools";
    proficiency: number; // 1-5
}

const technologies: TechItem[] = [
    { name: "Next.js", icon: SiNextdotjs, category: "Frontend", proficiency: 5 },
    { name: "React", icon: SiReact, category: "Frontend", proficiency: 5 },
    { name: "TypeScript", icon: SiTypescript, category: "Frontend", proficiency: 5 },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", proficiency: 5 },
    { name: "Node.js", icon: SiNodedotjs, category: "Backend", proficiency: 4 },
    { name: "Express", icon: SiExpress, category: "Backend", proficiency: 4 },
    { name: "MongoDB", icon: SiMongodb, category: "Database", proficiency: 4 },
    { name: "PostgreSQL", icon: SiPostgresql, category: "Database", proficiency: 3 },
    { name: "React Native", icon: SiReact, category: "Mobile", proficiency: 4 },
    { name: "Firebase", icon: SiFirebase, category: "Tools", proficiency: 4 },
];

const categories = ["Frontend", "Backend", "Mobile", "Database", "Tools"] as const;

export default function TechStack() {
    return (
        <section className="py-20 bg-bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="fade">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-text-dark">
                        Technologies I Work With
                    </h2>
                    <p className="text-center text-gray-dark mb-12 max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern web and mobile applications
                    </p>
                </ScrollReveal>

                <div className="space-y-12">
                    {categories.map((category, categoryIndex) => {
                        const categoryTechs = technologies.filter((tech) => tech.category === category);
                        if (categoryTechs.length === 0) return null;

                        return (
                            <ScrollReveal key={category} delay={categoryIndex * 0.1} direction="up">
                                <div>
                                    <h3 className="text-xl font-semibold text-text-dark mb-6 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-gradient-to-b from-primary to-purple rounded-full" />
                                        {category}
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                        {categoryTechs.map((tech, index) => (
                                            <TechIcon
                                                key={tech.name}
                                                tech={tech}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function TechIcon({ tech, index }: { tech: TechItem; index: number }) {
    const [isHovered, setIsHovered] = React.useState(false);
    const Icon = tech.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative"
        >
            <motion.div
                className="p-6 bg-gray-light rounded-xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-purple/10 transition-all duration-300 cursor-pointer border border-gray-medium hover:border-primary/30 hover:shadow-glow"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="flex flex-col items-center gap-3">
                    <motion.div
                        animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <Icon className="text-4xl text-primary group-hover:text-purple transition-colors" />
                    </motion.div>
                    <p className="font-medium text-gray-dark text-sm text-center">{tech.name}</p>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${
                                    i < tech.proficiency
                                        ? "bg-primary group-hover:bg-purple"
                                        : "bg-gray-medium"
                                }`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.05 + i * 0.05 }}
                            />
                        ))}
                    </div>
                </div>

                {/* Tooltip */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-bg-dark text-text-light px-3 py-1.5 rounded-lg text-xs whitespace-nowrap pointer-events-none z-10"
                >
                    <div className="flex items-center gap-1">
                        {[...Array(tech.proficiency)].map((_, i) => (
                            <span key={i}>⭐</span>
                        ))}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-bg-dark rotate-45" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

