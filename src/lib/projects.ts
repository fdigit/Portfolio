import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project } from '@/types';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getProjectSlugs() {
    if (!fs.existsSync(projectsDirectory)) return [];
    return fs.readdirSync(projectsDirectory)
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace(/\.mdx$/, ''));
}

export function getProjectBySlug(slug: string): Project | null {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
        if (!fs.existsSync(fullPath)) return null;
        
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            description: data.description,
            tags: data.tags || [],
            image: data.image,
            url: data.url,
            androidUrl: data.androidUrl,
            iosUrl: data.iosUrl,
            githubUrl: data.githubUrl,
            role: data.role,
            timeline: data.timeline,
            year: data.year,
            content,
        } as Project;
    } catch (e) {
        return null;
    }
}

export function getAllProjects(): Project[] {
    const slugs = getProjectSlugs();
    const projects = slugs
        .map(slug => getProjectBySlug(slug))
        .filter((project): project is Project => project !== null);
    
    return projects;
}
