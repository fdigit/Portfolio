export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    url?: string;
    androidUrl?: string;
    iosUrl?: string;
    githubUrl?: string;
    content?: string;
    role?: string;
    timeline?: string;
    year?: string;
    featured?: boolean;
    order?: number;
}
