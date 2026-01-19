"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({
    title,
    subtitle,
    description,
    align = "center",
    className = ""
}) => {
    const isCentered = align === "center";

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`flex flex-col ${isCentered ? "items-center text-center" : "items-start text-left"} ${className}`}
        >
            {subtitle && (
                <span className="text-teal-600 font-bold tracking-[0.25em] uppercase text-[10px] sm:text-[11px] mb-3 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
                    {description}
                </p>
            )}
            <div className={`my-6 flex gap-1 ${isCentered ? "justify-center" : ""}`}>
                <div className="h-1 w-10 bg-teal-600 rounded-full" />
                <div className="h-1 w-2 bg-teal-200 rounded-full" />
            </div>
        </motion.div>
    );
};

export default SectionHeader;
