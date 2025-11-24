/**
 * Application constants
 */

export const SITE_CONFIG = {
    name: "Mfon Francis",
    title: "Mfon Francis | Web & Mobile Developer",
    description: "Portfolio of Mfon Francis, a Web and Cross-Platform Mobile Developer specializing in modern web apps and mobile experiences.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mfonfrancis.com",
    author: "Mfon Francis",
    email: "hello@mfonfrancis.com",
    phone: "+234 800 000 0000",
    location: "Lagos, Nigeria",
} as const;

export const SOCIAL_LINKS = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
} as const;

export const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
] as const;

