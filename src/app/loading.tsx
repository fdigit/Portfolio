"use client";

import { motion } from "framer-motion";

export default function LoadingPage() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-light dark:bg-bg-dark backdrop-blur-sm">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="relative flex flex-col items-center justify-center"
            >
                <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-primary border-t-transparent rounded-full animate-spin shadow-glow" />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-purple to-pink blur-xl opacity-50 -z-10 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </motion.div>
        </div>
    );
}
