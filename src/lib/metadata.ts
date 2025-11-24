import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function createMetadata({
    title,
    description,
    path = "",
    image,
    type = "website",
}: {
    title?: string;
    description?: string;
    path?: string;
    image?: string;
    type?: "website" | "article";
}): Metadata {
    const fullTitle = title
        ? `${title} | ${SITE_CONFIG.name}`
        : SITE_CONFIG.title;
    const fullDescription = description || SITE_CONFIG.description;
    const url = `${SITE_CONFIG.url}${path}`;
    const ogImage = image || `${SITE_CONFIG.url}/og-image.jpg`;

    return {
        title: fullTitle,
        description: fullDescription,
        metadataBase: new URL(SITE_CONFIG.url),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: fullTitle,
            description: fullDescription,
            url,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
            locale: "en_US",
            type,
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description: fullDescription,
            images: [ogImage],
            creator: "@mfonfrancis",
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
        },
    };
}

export function createStructuredData(type: "Person" | "Portfolio" | "Project", data?: Record<string, unknown>) {
    const base = {
        "@context": "https://schema.org",
    };

    if (type === "Person") {
        return {
            ...base,
            "@type": "Person",
            name: SITE_CONFIG.name,
            jobTitle: "Web & Mobile Developer",
            email: SITE_CONFIG.email,
            url: SITE_CONFIG.url,
            sameAs: [
                SITE_CONFIG.url,
                SITE_CONFIG.url + "/projects",
                SITE_CONFIG.url + "/about",
            ],
            ...data,
        };
    }

    if (type === "Portfolio") {
        return {
            ...base,
            "@type": "CreativeWork",
            "@id": SITE_CONFIG.url,
            name: SITE_CONFIG.name,
            description: SITE_CONFIG.description,
            author: {
                "@type": "Person",
                name: SITE_CONFIG.name,
            },
            ...data,
        };
    }

    if (type === "Project") {
        return {
            ...base,
            "@type": "SoftwareApplication",
            ...data,
        };
    }

    return base;
}

