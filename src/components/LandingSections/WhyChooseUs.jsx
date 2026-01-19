"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';

const reasons = [
    {
        title: "Rigorous Screening",
        desc: "Every caretaker undergoes a thorough background check and multi-level interview process.",
        icon: <ShieldCheck className="w-6 h-6 text-teal-600" />
    },
    {
        title: "Real-time Monitoring",
        desc: "Track daily activities and receive updates directly through our secure platform.",
        icon: <Clock className="w-6 h-6 text-teal-600" />
    },
    {
        title: "Certified Experts",
        desc: "Our team consists of certified nurses and experienced babysitters with proven track records.",
        icon: <Award className="w-6 h-6 text-teal-600" />
    },
    {
        title: "Insurance Coverage",
        desc: "We provide comprehensive insurance for all our services to ensure complete peace of mind.",
        icon: <CheckCircle2 className="w-6 h-6 text-teal-600" />
    }
];

const WhyChooseUs = () => {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Why Families Trust <br />
                            <span className="text-teal-600">Care.xyz</span> for Their Loved Ones
                        </h2>
                        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                            We understand that choosing a caretaker is a deeply personal decision. That's why we've built a platform that prioritizes safety, transparency, and expert care above all else.
                        </p>
                        <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all">
                            Learn Our Process
                        </button>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-slate-50 rounded-3xl border border-gray-100 group hover:bg-teal-50 hover:border-teal-100 transition-all"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
