"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedCTA from "@/components/AnimatedCTA";
import MagneticEffect from "./animations/MagneticEffect";
import Parallax from "./animations/Parallax";
import blurData from "@/lib/blurData.json";

const technologies = ["Next.js", "React", "TypeScript", "React Native"];

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();
    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: "easeOut" as const },
        },
    };

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-bg-light pt-20">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
                <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-orange/15 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.08),transparent_38%)]" />
            </div>

            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <motion.div
                    initial={shouldReduceMotion ? false : "hidden"}
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
                >
                    <div>
                        <motion.p
                            variants={itemVariants}
                            className="mb-6 inline-flex rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-sm font-medium text-orange-dark dark:text-orange-light"
                        >
                            Available for new projects
                        </motion.p>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl font-bold leading-[1.08] tracking-tight text-text-dark sm:text-5xl lg:text-6xl"
                        >
                            Hi, I&apos;m <span className="animated-gradient-text">Mfon Francis</span>
                            <span className="mt-4 block text-2xl font-semibold text-orange sm:text-3xl">
                                Web &amp; Mobile Developer
                            </span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="mt-6 max-w-xl text-lg leading-8 text-gray-dark sm:text-xl">
                            I build thoughtful web and mobile products with a focus on reliable performance, clear design, and useful user experiences.
                        </motion.p>

                        <motion.div variants={itemVariants} className="mt-8">
                            <Link href="/projects">
                                <MagneticEffect>
                                    <AnimatedCTA variant="gradient" size="lg">
                                        View my projects
                                    </AnimatedCTA>
                                </MagneticEffect>
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-12 border-t border-gray-medium pt-7">
                            <p className="mb-3 text-sm font-semibold text-gray-dark">Core stack</p>
                            <ul className="flex flex-wrap gap-2" aria-label="Core technologies">
                                {technologies.map((technology) => (
                                    <li key={technology} className="rounded-full bg-bg-white px-3 py-1.5 text-sm font-medium text-gray-dark shadow-sm ring-1 ring-gray-medium">
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0">
                        <Parallax speed={0.2}>
                            <div className="relative aspect-square">
                                <div className="absolute inset-5 rounded-full bg-gradient-to-br from-primary/30 via-purple/20 to-orange/30 blur-3xl" aria-hidden="true" />
                                <div className="relative h-full overflow-hidden rounded-3xl border-4 border-bg-white shadow-2xl">
                                    <Image
                                        src="/images/mfon.webp"
                                        alt="Mfon Francis"
                                        fill
                                        sizes="(max-width: 1024px) min(90vw, 448px), 448px"
                                        className="object-cover"
                                        priority
                                        placeholder="blur"
                                        blurDataURL={(blurData as Record<string, string>)["/images/mfon.webp"]}
                                    />
                                </div>
                            </div>
                        </Parallax>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
