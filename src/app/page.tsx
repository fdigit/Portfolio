"use client";

import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCTA from "@/components/AnimatedCTA";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
    const featuredProjects = projectsData.slice(0, 3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <main className="min-h-screen">
            <Hero />

            {/* Tech Stack Section */}
            <TechStack />

            {/* Featured Projects Section */}
            <section className="py-24 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
                    >
                        <ScrollReveal direction="right" delay={0.1}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-dark">
                                    Featured Projects
                                </h2>
                                <p className="text-gray-dark max-w-xl text-lg">
                                    A selection of my best work, ranging from web applications to mobile solutions.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="left" delay={0.2}>
                            <Link href="/projects" className="hidden md:block">
                                <Button variant="outline" size="lg" className="hover:shadow-glow">
                                    View All Projects
                                </Button>
                            </Link>
                        </ScrollReveal>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.6,
                                            delay: index * 0.1,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                        },
                                    },
                                }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </motion.div>

                    <ScrollReveal direction="up" delay={0.3}>
                        <div className="mt-12 text-center md:hidden">
                            <Link href="/projects">
                                <Button variant="outline" size="lg">
                                    View All Projects
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="py-24 bg-bg-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple/10 rounded-full blur-3xl -z-0" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink/10 to-accent/10 rounded-full blur-3xl -z-0" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal direction="left" delay={0.1}>
                            <div className="relative">
                                <motion.div
                                    className="aspect-square rounded-2xl overflow-hidden bg-gray-light shadow-2xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-full h-full flex items-center justify-center text-gray-dark bg-gradient-to-br from-primary/10 to-purple/10">
                                        <Image
                                            src="/images/mfon.png"
                                            alt="About Mfon"
                                            width={400}
                                            height={400}
                                            className="object-cover rounded-2xl"
                                        />
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-purple/20 rounded-full blur-3xl -z-10"
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
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.2}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-dark">
                                    About Me
                                </h2>
                                <p className="text-lg text-gray-dark mb-6 leading-relaxed">
                                    I'm a passionate developer with a knack for teaching. I've helped students at Brain Island International School master the basics of coding, and I bring that same clarity and patience to my development work.
                                </p>
                                <p className="text-lg text-gray-dark mb-8 leading-relaxed">
                                    Whether I'm building a complex web app or a cross-platform mobile solution, I focus on creating intuitive, user-friendly experiences.
                                </p>
                                <Link href="/about">
                                    <Button
                                        variant="gradient"
                                        size="lg"
                                        className="text-white hover:shadow-[0_0_50px_rgba(249,115,22,0.8)]"
                                    >
                                        Learn More About Me
                                    </Button>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple/10 to-pink/10" />
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <ScrollReveal direction="fade" delay={0.1}>
                        <motion.div
                            className="bg-gradient-to-br from-primary via-purple to-pink p-12 md:p-16 rounded-3xl text-text-light shadow-2xl relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Animated background - Bright Orange! */}
                            <motion.div
                                className="absolute inset-0 bg-[length:200%_auto]"
                                style={{
                                    background: "linear-gradient(to right, #F97316, #FF6B35, #FF8C42)",
                                }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                            
                            {/* Glassmorphism overlay */}
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                            
                            {/* Shimmer effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                animate={{
                                    x: ["-100%", "200%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                    ease: "easeInOut",
                                }}
                            />

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                                    Have a project in mind?
                                </h2>
                                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                    I'm currently available for freelance work and full-time opportunities. Let's build something amazing together.
                                </p>
                                <Link href="/contact">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white/80 shadow-lg font-bold"
                                        >
                                            Contact Me
                                        </Button>
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
