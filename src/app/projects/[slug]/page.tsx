import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import projectsData from "@/data/projects.json";

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-light to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-text-light hover:text-bg-white mb-6 transition-colors drop-shadow-lg"
                        >
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Projects
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold text-text-light mb-4 drop-shadow-lg">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-3">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-white/10 backdrop-blur-md text-text-light rounded-full text-sm border border-white/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-medium pt-12">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-text-dark">Overview</h2>
                            <p className="text-gray-dark leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-text-dark">The Challenge</h2>
                            <p className="text-gray-dark leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-text-dark">The Solution</h2>
                            <p className="text-gray-dark leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-bg-white p-6 rounded-xl border border-gray-medium shadow-sm">
                            <h3 className="font-bold text-lg mb-4 text-text-dark">Project Info</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-dark">Role</p>
                                    <p className="font-medium text-text-dark">Lead Developer</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-dark">Timeline</p>
                                    <p className="font-medium text-text-dark">2 Months</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-dark">Year</p>
                                    <p className="font-medium text-text-dark">2024</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Button variant="primary" size="lg" className="w-full justify-center">
                                <ExternalLink size={18} className="mr-2" />
                                Live Demo
                            </Button>
                            <Button variant="outline" size="lg" className="w-full justify-center border-[#F97316] text-[#F97316]">
                                <Github size={18} className="mr-2" />
                                View Code
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
