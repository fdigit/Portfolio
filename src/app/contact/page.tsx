"use client";

import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl font-bold mb-6 text-text-dark">Let's Work Together</h1>
                        <p className="text-lg text-gray-dark mb-12">
                            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-text-dark">Email</h3>
                                    <a href="mailto:hello@mfonfrancis.com" className="text-gray-dark hover:text-primary transition-colors">
                                        hello@mfonfrancis.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-text-dark">Phone / WhatsApp</h3>
                                    <p className="text-gray-dark">
                                        +234 800 000 0000
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-text-dark">Location</h3>
                                    <p className="text-gray-dark">
                                        Lagos, Nigeria
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    {/* Contact Form */}
                    <div className="bg-bg-white p-8 rounded-2xl shadow-lg border border-gray-medium">
                        <h2 className="text-2xl font-bold mb-6 text-text-dark">Send me a message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-light border border-gray-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-text-dark"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-light border border-gray-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-text-dark"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-light border border-gray-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-text-dark"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-light border border-gray-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-text-dark"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <div className="flex gap-4">
                                <Button variant="primary" size="lg" className="flex-1">
                                    Send Message <Send size={18} className="ml-2" />
                                </Button>
                                <Button className="bg-accent text-text-light">
                                    WhatsApp
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
