"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, ShieldCheck, HeartPulse } from 'lucide-react';

const stats = [
    { icon: <Users className="w-8 h-8 text-teal-600" />, value: '10K+', label: 'Happy Families' },
    { icon: <Star className="w-8 h-8 text-orange-500" />, value: '4.9/5', label: 'Average Rating' },
    { icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />, value: '100%', label: 'Verified Staff' },
    { icon: <HeartPulse className="w-8 h-8 text-rose-500" />, value: '24/7', label: 'Support Available' },
];

const Stats = () => {
    return (
        <div className="bg-slate-50 py-20 pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-center mb-4">{stat.icon}</div>
                            <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
