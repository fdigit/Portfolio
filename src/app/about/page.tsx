import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro */}
                <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                    <div className="w-full md:w-1/3">
                        <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/mfon.png"
                                alt="Mfon Francis"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h1 className="text-4xl font-bold mb-6 text-text-dark">About Me</h1>
                        <p className="text-lg text-gray-dark mb-6 leading-relaxed">
                            Hi, I'm Mfon Francis. I'm a passionate Web & Cross-Platform Mobile Developer based in Nigeria. I specialize in building modern, performant, and user-friendly applications using cutting-edge technologies.
                        </p>
                        <p className="text-lg text-gray-dark mb-8 leading-relaxed">
                            Beyond coding, I have a deep love for teaching. I've had the privilege of mentoring students at Brain Island International School, helping them discover the joy of programming. I believe that the best way to master a skill is to teach it.
                        </p>
                        <Button variant="primary" size="lg">
                            Download CV <Download size={18} className="ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-text-dark">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-light p-6 rounded-xl border border-gray-medium">
                            <h3 className="font-bold text-primary mb-4">Frontend Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-bg-white text-gray-dark rounded-full text-sm shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-light p-6 rounded-xl border border-gray-medium">
                            <h3 className="font-bold text-primary mb-4">Backend & Mobile</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Node.js", "Express", "MongoDB", "React Native", "Flutter", "Firebase", "REST APIs"].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-bg-white text-gray-dark rounded-full text-sm shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-text-dark">Experience</h2>
                    <div className="space-y-8 border-l-2 border-gray-medium pl-8 ml-4">
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-bg-white" />
                            <h3 className="text-xl font-bold text-text-dark">Freelance Web & Mobile Developer</h3>
                            <p className="text-gray-dark text-sm mb-2">2022 - Present</p>
                            <p className="text-gray-dark">
                                Building custom solutions for clients, ranging from e-commerce platforms to educational apps. Focusing on delivering high-quality code and exceptional user experiences.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-bg-white" />
                            <h3 className="text-xl font-bold text-text-dark">ICT Teacher</h3>
                            <p className="text-gray-dark text-sm mb-2">Brain Island International School</p>
                            <p className="text-gray-dark">
                                Teaching ICT and coding fundamentals to students. Developing curriculum for HTML, CSS, and Scratch programming. Mentoring students in building their first web pages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
