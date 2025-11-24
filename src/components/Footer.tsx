import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-bg-dark py-12" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-text-light mb-4">{SITE_CONFIG.name}</h3>
                        <p className="text-gray-light max-w-xs">
                            Building modern web apps and mobile experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Footer navigation">
                        <h4 className="text-lg font-semibold text-text-light mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-light hover:text-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark rounded"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social & Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-text-light mb-4">Connect</h4>
                        <div className="flex space-x-4 mb-4" role="list">
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-light hover:text-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark rounded"
                                aria-label="Visit GitHub profile"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-light hover:text-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark rounded"
                                aria-label="Visit LinkedIn profile"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href={SOCIAL_LINKS.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-light hover:text-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark rounded"
                                aria-label="Visit Twitter profile"
                            >
                                <Twitter size={24} />
                            </a>
                        </div>
                        <a
                            href={`mailto:${SITE_CONFIG.email}`}
                            className="flex items-center text-gray-light hover:text-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark rounded"
                            aria-label={`Send email to ${SITE_CONFIG.email}`}
                        >
                            <Mail size={20} className="mr-2" />
                            {SITE_CONFIG.email}
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-dark mt-12 pt-8 text-center text-gray-light text-sm">
                    &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
