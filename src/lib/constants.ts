/**
 * Application constants
 */

export const SITE_CONFIG = {
    name: "Mfon Francis",
    title: "Mfon Francis | Web & Mobile Developer",
    description: "Portfolio of Mfon Francis, a Web and Cross-Platform Mobile Developer specializing in modern web apps and mobile experiences.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mfonfrancis.com",
    author: "Mfon Francis",
    email: "f.mfonn@gmail.com",
    phone: "08035516613",
    location: "Lagos, Nigeria",
} as const;

export const SOCIAL_LINKS = {
    github: "https://github.com/fdigit",
    facebook: "https://www.facebook.com/mfon.francis.112956/",
    twitter: "https://x.com/Funkyy002",
    linkedin: "https://linkedin.com",
} as const;

export const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
] as const;



