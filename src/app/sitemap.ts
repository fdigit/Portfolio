import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import projectsData from "@/data/projects.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;

    const routes = [
        "",
        "/projects",
        "/about",
        "/contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const projectRoutes = projectsData.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...routes, ...projectRoutes];
}

