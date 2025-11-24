import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-bg-dark py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-text-light mb-4">Mfon Francis</h3>
                        <p className="text-gray-light max-w-xs">
                            Building modern web apps and mobile experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-text-light mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-light hover:text-primary-light transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-light hover:text-primary-light transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-light hover:text-primary-light transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-light hover:text-primary-light transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-text-light mb-4">Connect</h4>
                        <div className="flex space-x-4 mb-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-light hover:text-primary-light transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-light hover:text-primary-light transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-light hover:text-primary-light transition-colors">
                                <Twitter size={24} />
                            </a>
                        </div>
                        <a href="mailto:hello@mfonfrancis.com" className="flex items-center text-gray-light hover:text-primary-light transition-colors">
                            <Mail size={20} className="mr-2" />
                            hello@mfonfrancis.com
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-dark mt-12 pt-8 text-center text-gray-light text-sm">
                    &copy; {new Date().getFullYear()} Mfon Francis. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
