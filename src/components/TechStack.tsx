"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
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
}

interface TechGroup {
    title: string;
    description: string;
    technologies: TechItem[];
}

const techGroups: TechGroup[] = [
    {
        title: "Web experiences",
        description: "Interfaces that are fast, maintainable, and designed around real user needs.",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        title: "APIs & data",
        description: "The dependable services and data layers behind product experiences.",
        technologies: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
            { name: "PostgreSQL", icon: SiPostgresql },
        ],
    },
    {
        title: "Mobile & services",
        description: "Cross-platform apps and managed services that help teams ship efficiently.",
        technologies: [
            { name: "React Native", icon: SiReact },
            { name: "Firebase", icon: SiFirebase },
        ],
    },
];

export default function TechStack() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="relative overflow-hidden bg-bg-white py-20 sm:py-24" aria-labelledby="tech-stack-heading">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="fade">
                    <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                            Core toolkit
                        </p>
                        <h2 id="tech-stack-heading" className="text-3xl font-bold text-text-dark sm:text-4xl">
                            Technologies I use to ship products
                        </h2>
                        <p className="mt-4 text-base leading-7 text-gray-dark sm:text-lg">
                            A focused stack for building thoughtful web and mobile products—from polished interfaces to dependable APIs and data.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
                    {techGroups.map((group, groupIndex) => (
                        <motion.section
                            key={group.title}
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : groupIndex * 0.08 }}
                            className="rounded-2xl border border-gray-medium bg-bg-light p-6 shadow-sm transition-shadow duration-300 hover:shadow-soft sm:p-7"
                        >
                            <h3 className="text-lg font-semibold text-text-dark">{group.title}</h3>
                            <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-dark">{group.description}</p>

                            <ul className="mt-6 grid grid-cols-2 gap-3" aria-label={`${group.title} technologies`}>
                                {group.technologies.map((tech) => (
                                    <TechItem key={tech.name} tech={tech} />
                                ))}
                            </ul>
                        </motion.section>
                    ))}
                </div>

                <p className="mt-8 text-center text-sm text-gray-dark">
                    I choose tools based on the product, the team, and the problem to solve—not just the trend.
                </p>
            </div>
        </section>
    );
}

function TechItem({ tech }: { tech: TechItem }) {
    const Icon = tech.icon;

    return (
        <li className="flex min-h-14 items-center gap-3 rounded-xl border border-gray-medium bg-bg-white px-3 py-3">
            <Icon className="shrink-0 text-2xl text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-text-dark">{tech.name}</span>
        </li>
    );
}
