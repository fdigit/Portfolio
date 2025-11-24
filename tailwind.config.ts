import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}", // Keep this for root components if any
    ],
    theme: {
        extend: {
            colors: {
                // Primary Blue Palette
                primary: {
                    DEFAULT: "var(--primary)", // #2563EB Blue-600
                    light: "var(--primary-light)", // #3B82F6 Blue-500
                    dark: "var(--primary-dark)", // #1E40AF Blue-800
                },
                // Accent
                accent: {
                    DEFAULT: "var(--accent)", // #10B981 Green-500
                    dark: "var(--accent-dark)", // #059669 Green-600
                },
                // Text Colors
                "text-dark": "var(--text-dark)", // #0F172A
                "text-light": "var(--text-light)", // #F8FAFC
                // Gray Scale
                "gray-light": "var(--gray-light)", // #F3F4F6
                "gray-medium": "var(--gray-medium)", // #E5E7EB
                "gray-dark": "var(--gray-dark)", // #374151
                // Backgrounds
                "bg-light": "var(--bg-light)", // #F8FAFC
                "bg-white": "var(--bg-white)", // #FFFFFF
                "bg-dark": "var(--bg-dark)", // #0F172A
                // Legacy support
                background: "var(--background)",
                foreground: "var(--foreground)",
                secondary: {
                    DEFAULT: "var(--accent)",
                    light: "#34D399",
                    dark: "var(--accent-dark)",
                },
                dark: {
                    DEFAULT: "var(--bg-dark)",
                    card: "#1E293B",
                    border: "#334155",
                },
                neutral: {
                    50: "var(--bg-light)",
                    100: "var(--gray-light)",
                    200: "var(--gray-medium)",
                    300: "#CBD5E1",
                    400: "#94A3B8",
                    500: "#64748B",
                    600: "#475569",
                    700: "var(--gray-dark)",
                    800: "#1E293B",
                    900: "var(--text-dark)",
                },
                // Modern gradient colors
                purple: {
                    DEFAULT: "#8B5CF6",
                    light: "#A78BFA",
                    dark: "#7C3AED",
                },
                pink: {
                    DEFAULT: "#EC4899",
                    light: "#F472B6",
                    dark: "#DB2777",
                },
                cyan: {
                    DEFAULT: "#06B6D4",
                    light: "#22D3EE",
                    dark: "#0891B2",
                },
                // Bright Orange - Eye-catching!
                orange: {
                    DEFAULT: "#F97316", // Orange-500 - Bright and vibrant
                    light: "#FB923C", // Orange-400 - Lighter shade
                    dark: "#EA580C", // Orange-600 - Darker shade
                    bright: "#FF6B35", // Bright coral-orange
                    glow: "#FF8C42", // Glowing orange
                },
            },
            boxShadow: {
                soft: "var(--shadow-soft)",
                glow: "0 0 20px rgba(37, 99, 235, 0.5)",
                "glow-lg": "0 0 40px rgba(37, 99, 235, 0.6)",
                "glow-purple": "0 0 20px rgba(139, 92, 246, 0.5)",
                "glow-pink": "0 0 20px rgba(236, 72, 153, 0.5)",
                "glow-orange": "var(--shadow-orange-glow)",
                "glow-orange-lg": "var(--shadow-orange-glow-lg)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-poppins)", "sans-serif"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            perspective: {
                1000: "1000px",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                shimmer: {
                    "0%": {
                        backgroundPosition: "-1000px 0",
                    },
                    "100%": {
                        backgroundPosition: "1000px 0",
                    },
                },
                "gradient-x": {
                    "0%, 100%": {
                        backgroundPosition: "0% 50%",
                    },
                    "50%": {
                        backgroundPosition: "100% 50%",
                    },
                },
                "gradient-y": {
                    "0%, 100%": {
                        backgroundPosition: "50% 0%",
                    },
                    "50%": {
                        backgroundPosition: "50% 100%",
                    },
                },
                "gradient-xy": {
                    "0%, 100%": {
                        backgroundPosition: "0% 50%, 50% 50%",
                    },
                    "50%": {
                        backgroundPosition: "100% 50%, 50% 100%",
                    },
                },
                float: {
                    "0%, 100%": {
                        transform: "translateY(0px)",
                    },
                    "50%": {
                        transform: "translateY(-20px)",
                    },
                },
                pulse: {
                    "0%, 100%": {
                        opacity: "1",
                    },
                    "50%": {
                        opacity: "0.5",
                    },
                },
                "slide-in-left": {
                    "0%": {
                        transform: "translateX(-100%)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateX(0)",
                        opacity: "1",
                    },
                },
                "slide-in-right": {
                    "0%": {
                        transform: "translateX(100%)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateX(0)",
                        opacity: "1",
                    },
                },
                "fade-in-up": {
                    "0%": {
                        transform: "translateY(20px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
                glow: {
                    "0%, 100%": {
                        boxShadow: "0 0 5px rgba(37, 99, 235, 0.5), 0 0 10px rgba(37, 99, 235, 0.3)",
                    },
                    "50%": {
                        boxShadow: "0 0 20px rgba(37, 99, 235, 0.8), 0 0 30px rgba(37, 99, 235, 0.5)",
                    },
                },
                "glow-orange": {
                    "0%, 100%": {
                        boxShadow: "0 0 10px rgba(249, 115, 22, 0.6), 0 0 20px rgba(249, 115, 22, 0.4)",
                    },
                    "50%": {
                        boxShadow: "0 0 30px rgba(249, 115, 22, 0.9), 0 0 50px rgba(249, 115, 22, 0.6)",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                blob: "blob 7s infinite",
                shimmer: "shimmer 2s infinite linear",
                "gradient-x": "gradient-x 15s ease infinite",
                "gradient-y": "gradient-y 15s ease infinite",
                "gradient-xy": "gradient-xy 15s ease infinite",
                float: "float 6s ease-in-out infinite",
                pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "slide-in-left": "slide-in-left 0.5s ease-out",
                "slide-in-right": "slide-in-right 0.5s ease-out",
                "fade-in-up": "fade-in-up 0.6s ease-out",
                glow: "glow 2s ease-in-out infinite",
                "glow-orange": "glow-orange 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
export default config;
