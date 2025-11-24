"use client";

import { Mail, Phone, MapPin, Sparkles, Send } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple/5 to-pink/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.1),transparent_50%)]" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="text-center mb-12 md:mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-primary/20 dark:border-primary/30 shadow-sm mb-6">
                                <Sparkles size={16} className="text-primary" />
                                <span className="text-sm font-medium text-gray-dark dark:text-gray-200">Let's Work Together</span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-dark dark:text-text-light mb-4 md:mb-6 leading-tight">
                                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple">Touch</span>
                            </h1>
                            
                            <p className="text-base sm:text-lg md:text-xl text-gray-dark dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        {/* Contact Info Cards */}
                        <ScrollReveal direction="left" delay={0.2}>
                            <div className="space-y-6">
                                {/* Email Card */}
                                <motion.a
                                    href="mailto:f.mfonn@gmail.com"
                                    className="block p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="p-3 md:p-4 bg-primary/10 dark:bg-primary/20 rounded-xl group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors flex-shrink-0">
                                            <Mail size={24} className="text-primary md:w-7 md:h-7" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg md:text-xl font-bold text-text-dark dark:text-text-light mb-2">Email</h3>
                                            <p className="text-base md:text-lg text-gray-dark dark:text-gray-300 break-all group-hover:text-primary transition-colors">
                                                f.mfonn@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </motion.a>

                                {/* Phone Card */}
                                <motion.a
                                    href="tel:08035516613"
                                    className="block p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="p-3 md:p-4 bg-green-500/10 dark:bg-green-500/20 rounded-xl group-hover:bg-green-500/20 dark:group-hover:bg-green-500/30 transition-colors flex-shrink-0">
                                            <Phone size={24} className="text-green-600 dark:text-green-400 md:w-7 md:h-7" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg md:text-xl font-bold text-text-dark dark:text-text-light mb-2">Phone / WhatsApp</h3>
                                            <p className="text-base md:text-lg text-gray-dark dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                08035516613
                                            </p>
                                        </div>
                                    </div>
                                </motion.a>

                                {/* Location Card */}
                                <motion.div
                                    className="block p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
                                >
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="p-3 md:p-4 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl flex-shrink-0">
                                            <MapPin size={24} className="text-purple-600 dark:text-purple-400 md:w-7 md:h-7" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg md:text-xl font-bold text-text-dark dark:text-text-light mb-2">Location</h3>
                                            <p className="text-base md:text-lg text-gray-dark dark:text-gray-300">
                                                Port Harcourt, Nigeria
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </ScrollReveal>

                        {/* Contact Form */}
                        <ScrollReveal direction="right" delay={0.3}>
                            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-3 mb-6 md:mb-8">
                                    <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                                        <Send size={20} className="text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-text-dark dark:text-text-light">Send me a message</h2>
                                </div>
                                <ContactForm />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </main>
    );
}
