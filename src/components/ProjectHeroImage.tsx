"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectHeroImageProps {
    src: string;
    alt: string;
    slug: string;
}

export default function ProjectHeroImage({ src, alt, slug }: ProjectHeroImageProps) {
    const [imageError, setImageError] = useState(false);

    const getGradientColors = (slug: string) => {
        const gradients = [
            "from-blue-500 via-purple-500 to-pink-500",
            "from-orange-500 via-red-500 to-pink-500",
            "from-green-500 via-teal-500 to-blue-500",
            "from-purple-500 via-indigo-500 to-blue-500",
            "from-pink-500 via-rose-500 to-orange-500",
            "from-cyan-500 via-blue-500 to-indigo-500",
        ];
        const hash = slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return gradients[hash % gradients.length];
    };

    if (imageError) {
        return (
            <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColors(slug)} opacity-50`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/60 text-6xl font-bold">
                        {alt.charAt(0).toUpperCase()}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill
            className="object-cover opacity-50"
            priority
            onError={() => setImageError(true)}
        />
    );
}

