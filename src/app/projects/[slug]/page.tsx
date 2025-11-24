import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Smartphone, Globe } from "lucide-react";
import ProjectHeroImage from "@/components/ProjectHeroImage";
import projectsData from "@/data/projects.json";
import { createMetadata, createStructuredData } from "@/lib/metadata";

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

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        return {};
    }

    return createMetadata({
        title: project.title,
        description: project.description,
        path: `/projects/${slug}`,
        type: "article",
    });
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const projectStructuredData = createStructuredData("Project", {
        name: project.title,
        description: project.description,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData) }}
            />
            <main className="min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative h-[50vh] sm:h-[60vh] w-full">
                <ProjectHeroImage
                    src={project.image}
                    alt={project.title}
                    slug={project.slug}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />

                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 lg:p-12">
                    <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4">
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-white hover:text-gray-200 transition-colors drop-shadow-lg z-10 relative text-sm sm:text-base"
                        >
                            <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
                            Back to Projects
                        </Link>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-2xl leading-tight break-words">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs sm:text-sm border border-white/30 shadow-lg"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 border-t border-gray-medium pt-8 sm:pt-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-text-dark dark:text-text-light">Overview</h2>
                            <p className="text-sm sm:text-base text-gray-dark dark:text-gray-300 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {project.content && (
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-text-dark dark:text-text-light">Project Details</h2>
                                <p className="text-sm sm:text-base text-gray-dark dark:text-gray-300 leading-relaxed">
                                    {project.content}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-medium dark:border-gray-700 shadow-sm">
                            <h3 className="font-bold text-base sm:text-lg mb-4 text-text-dark dark:text-text-light">Project Info</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-dark dark:text-gray-400">Role</p>
                                    <p className="font-medium text-text-dark dark:text-text-light text-sm sm:text-base">Lead Developer</p>
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-dark dark:text-gray-400">Timeline</p>
                                    <p className="font-medium text-text-dark dark:text-text-light text-sm sm:text-base">2 Months</p>
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-dark dark:text-gray-400">Year</p>
                                    <p className="font-medium text-text-dark dark:text-text-light text-sm sm:text-base">2024</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-lg shadow-green-600/40 hover:shadow-glow hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                >
                                    <Globe size={18} />
                                    Visit Site
                                </a>
                            )}
                            {(project as any).androidUrl && (
                                <a
                                    href={(project as any).androidUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-lg shadow-green-600/40 hover:shadow-glow hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                >
                                    <Smartphone size={18} />
                                    Android App
                                </a>
                            )}
                            {(project as any).iosUrl && (
                                <a
                                    href={(project as any).iosUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gray-900 hover:bg-black rounded-lg shadow-lg shadow-gray-900/40 hover:shadow-glow hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                >
                                    <Smartphone size={18} />
                                    iOS App
                                </a>
                            )}
                            {(project as any).githubUrl && (
                                <a
                                    href={(project as any).githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-orange text-orange hover:bg-orange/10 hover:border-orange-light hover:shadow-glow-orange hover:scale-105 relative overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
                                >
                                    <Github size={18} />
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}
