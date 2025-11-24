"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, Code, Smartphone, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple/5 to-pink/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.1),transparent_50%)]" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <ScrollReveal direction="left" delay={0.1}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple rounded-3xl blur-2xl opacity-20 transform rotate-6" />
                                <motion.div
                                    className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
                                    whileHover={{ scale: 1.02, rotate: 0 }}
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
                                </motion.div>
                            </div>
                        </ScrollReveal>

                        {/* Content */}
                        <ScrollReveal direction="right" delay={0.2}>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-primary/20 dark:border-primary/30 shadow-sm mb-4">
                                    <Sparkles size={16} className="text-primary" />
                                    <span className="text-sm font-medium text-gray-dark dark:text-gray-200">Available for Projects</span>
                                </div>
                                
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark dark:text-text-light leading-tight">
                                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple">Mfon Francis</span>
                                </h1>
                                
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-dark dark:text-gray-300 font-medium">
                                    Web Developer • React Native Mobile Developer • ICT Instructor
                                </p>
                                
                                <p className="text-base sm:text-lg text-gray-dark dark:text-gray-300 leading-relaxed">
                                    I specialise in building modern, responsive digital experiences across web and mobile. From clean and interactive websites to smooth, cross-platform mobile apps, I enjoy transforming ideas into real-world solutions that people can use and appreciate.
                                </p>

                                {/* CTA Button */}
                                <div className="pt-4">
                                    <motion.button
                                        onClick={() => {
                                            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-lg shadow-lg shadow-orange-500/40 hover:shadow-glow-orange hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Get In Touch
                                    </motion.button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-bg-white dark:bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* About Text */}
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="prose prose-lg max-w-none mb-16">
                            <div className="space-y-6 text-gray-dark dark:text-gray-300 leading-relaxed">
                                <p className="text-base sm:text-lg">
                                    On the web, I work with <strong className="text-text-dark dark:text-text-light">HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS</strong>. For mobile development, I build cross-platform applications using <strong className="text-text-dark dark:text-text-light">React Native</strong>, focusing on performance, usability, and beautiful interfaces.
                                </p>
                                <p className="text-lg">
                                    My work also includes integrating APIs, managing data with <strong className="text-text-dark dark:text-text-light">Firebase or MongoDB</strong>, and deploying scalable applications on platforms like <strong className="text-text-dark dark:text-text-light">Vercel</strong>.
                                </p>
                                <p className="text-lg">
                                    Outside development, I'm an <strong className="text-text-dark dark:text-text-light">ICT Instructor</strong>, teaching students coding, front-end technologies, Scratch, and creative problem-solving. I believe strongly in empowering young learners with digital skills that prepare them for the future.
                                </p>
                                <p className="text-lg">
                                    I value <strong className="text-text-dark dark:text-text-light">clean design, clear communication, and building digital products that have real impact</strong>.
                                </p>
                                <p className="text-lg">
                                    If you're looking for a developer who is reliable, creative, and passionate about building practical solutions — let's connect. I'm always open to freelance opportunities, collaborations, and innovative ideas.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Skills Grid */}
                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-dark dark:text-text-light text-center">
                                Technical Skills
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <motion.div
                                    className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-blue-500 rounded-lg">
                                            <Code size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-text-dark dark:text-text-light">Frontend</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"].map(skill => (
                                            <span key={skill} className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-dark dark:text-gray-200 rounded-lg text-sm font-medium shadow-sm border border-blue-200/50 dark:border-blue-700/50">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-2xl border border-green-200/50 dark:border-green-700/50 shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-green-500 rounded-lg">
                                            <Smartphone size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-text-dark dark:text-text-light">Mobile</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["React Native", "Flutter", "iOS", "Android", "Cross-Platform"].map(skill => (
                                            <span key={skill} className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-dark dark:text-gray-200 rounded-lg text-sm font-medium shadow-sm border border-green-200/50 dark:border-green-700/50">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-700/50 shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-purple-500 rounded-lg">
                                            <Code size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-text-dark dark:text-text-light">Backend</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Node.js", "Express", "MongoDB", "Firebase", "REST APIs", "Vercel"].map(skill => (
                                            <span key={skill} className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-dark dark:text-gray-200 rounded-lg text-sm font-medium shadow-sm border border-purple-200/50 dark:border-purple-700/50">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Experience */}
                    <ScrollReveal direction="up" delay={0.3}>
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-dark dark:text-text-light text-center">
                                Experience
                            </h2>
                            <div className="space-y-6">
                                <motion.div
                                    className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl flex-shrink-0">
                                            <Code size={24} className="text-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-text-dark dark:text-text-light mb-1">Freelance Web & Mobile Developer</h3>
                                            <p className="text-primary dark:text-primary-light font-semibold mb-3 text-sm sm:text-base">2022 - Present</p>
                                            <p className="text-gray-dark dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                                                Building custom solutions for clients, ranging from e-commerce platforms to educational apps. Focusing on delivering high-quality code and exceptional user experiences.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-xl flex-shrink-0">
                                            <GraduationCap size={24} className="text-green-600 dark:text-green-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-text-dark dark:text-text-light mb-1">ICT Instructor</h3>
                                            <p className="text-green-600 dark:text-green-400 font-semibold mb-3 text-sm sm:text-base">Brain Island International School</p>
                                            <p className="text-gray-dark dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                                                Teaching ICT and coding fundamentals to students. Developing curriculum for HTML, CSS, and Scratch programming. Mentoring students in building their first web pages.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Section */}
                    <ScrollReveal direction="up" delay={0.4}>
                        <div id="contact-section" className="bg-gradient-to-br from-primary/10 via-purple/5 to-pink/10 dark:from-primary/20 dark:via-purple/10 dark:to-pink/20 p-8 md:p-12 rounded-3xl border border-primary/20 dark:border-primary/30 shadow-xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-dark dark:text-text-light text-center">
                                Let's Connect
                            </h2>
                            <p className="text-lg text-gray-dark dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                                I'm always open to freelance opportunities, collaborations, and innovative ideas. Let's build something amazing together!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
                                <a
                                    href="tel:08035516613"
                                    className="flex items-center gap-3 px-4 sm:px-6 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/50 group w-full sm:w-auto"
                                >
                                    <div className="p-2 bg-green-500 rounded-lg group-hover:bg-green-600 transition-colors flex-shrink-0">
                                        <Phone size={20} className="text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-dark dark:text-gray-400">Phone</p>
                                        <p className="font-semibold text-text-dark dark:text-text-light text-sm sm:text-base break-all sm:break-normal">08035516613</p>
                                    </div>
                                </a>
                                <a
                                    href="mailto:f.mfonn@gmail.com"
                                    className="flex items-center gap-3 px-4 sm:px-6 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/50 group w-full sm:w-auto"
                                >
                                    <div className="p-2 bg-primary rounded-lg group-hover:bg-primary-dark transition-colors flex-shrink-0">
                                        <Mail size={20} className="text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-dark dark:text-gray-400">Email</p>
                                        <p className="font-semibold text-text-dark dark:text-text-light text-sm sm:text-base break-all sm:break-normal">f.mfonn@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
