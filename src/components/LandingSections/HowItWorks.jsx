"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Users, CheckCircle } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Browse Services",
        desc: "Explore our verified caregivers and select the service that fits your needs.",
        icon: <Users className="w-6 h-6 text-teal-600" />
    },
    {
        number: "02",
        title: "Book Appointment",
        desc: "Choose your preferred date, time, and duration for the care service.",
        icon: <Calendar className="w-6 h-6 text-teal-600" />
    },
    {
        number: "03",
        title: "Meet Your Caregiver",
        desc: "Our professional arrives at your doorstep on time, fully prepared.",
        icon: <Clock className="w-6 h-6 text-teal-600" />
    },
    {
        number: "04",
        title: "Enjoy Peace of Mind",
        desc: "Relax knowing your loved ones are in safe, caring hands.",
        icon: <CheckCircle className="w-6 h-6 text-teal-600" />
    }
];

const HowItWorks = () => {
    return (
        <div className="py-24 bg-linear-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-linear-to-br from-teal-600 via-teal-500 to-emerald-500 rounded-[3rem] p-12 lg:p-20 relative"
                    >
                        <span className="text-sm font-black uppercase tracking-widest text-teal-700">Simple Process</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-lg max-w-2xl mx-auto"
                    >
                        Getting started with Care.xyz is quick and easy. Follow these simple steps to book your care service.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Connecting Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-linear-to-r from-teal-200 to-transparent -translate-x-1/2 z-0" />
                            )}

                            <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-teal-100 hover:shadow-lg transition-all group">
                                {/* Step Number */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 transition-transform">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 bg-linear-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/20">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
