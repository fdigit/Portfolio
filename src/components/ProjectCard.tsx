"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    slug: string;
}

export default function ProjectCard({ title, description, tags, image, slug }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-glow-lg transition-all duration-300 border border-gray-medium hover:border-primary-light perspective-1000"
        >
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 via-purple/0 to-pink/0 group-hover:from-primary/10 group-hover:via-purple/10 group-hover:to-pink/10 transition-all duration-500"
                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            />

            <div className="relative h-48 w-full overflow-hidden">
                <motion.div
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </motion.div>
                
                {/* Animated overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="absolute bottom-4 left-4 right-4">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-text-light"
                        >
                            <p className="text-sm font-medium mb-2">View Project Details</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%", skewX: -20 }}
                    animate={isHovered ? { x: "200%", skewX: -20 } : { x: "-100%", skewX: -20 }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                />
            </div>

            <div className="p-6 relative z-10">
                <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial="hidden"
                    animate="visible"
                >
                    {tags.map((tag, index) => (
                        <motion.span
                            key={tag}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: { delay: index * 0.05 },
                                },
                            }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary/10 to-purple/10 text-primary rounded-full border border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all cursor-default"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.h3
                    className="text-xl font-bold text-text-dark mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple transition-all duration-300"
                    whileHover={{ x: 5 }}
                >
                    {title}
                </motion.h3>

                <p className="text-gray-dark text-sm mb-6 line-clamp-2">
                    {description}
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                        href={`/projects/${slug}`}
                        className="group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-text-light bg-gradient-to-r from-primary to-purple rounded-lg hover:from-primary-dark hover:to-purple-dark shadow-lg hover:shadow-glow transition-all duration-300"
                    >
                        <span>View Case Study</span>
                        <motion.div
                            animate={isHovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <ArrowUpRight size={16} />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>

            {/* Glow effect */}
            <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple to-pink rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"
                animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
            />
        </motion.div>
    );
}
