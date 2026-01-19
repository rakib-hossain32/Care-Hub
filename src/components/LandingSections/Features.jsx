"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Award, Clock, Users, Star } from 'lucide-react';

const features = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: "100% Verified",
        desc: "All caregivers undergo rigorous background checks"
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Compassionate Care",
        desc: "Trained professionals who genuinely care"
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: "Certified Experts",
        desc: "Licensed nurses and experienced babysitters"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "24/7 Availability",
        desc: "Round-the-clock support when you need it"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Family First",
        desc: "Your family's safety is our top priority"
    },
    {
        icon: <Star className="w-6 h-6" />,
        title: "Top Rated",
        desc: "4.9/5 average rating from 10,000+ families"
    }
];

const Features = () => {
    return (
        <div className="py-24 bg-linear-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6"
                    >
                        <Star className="w-4 h-4 text-teal-500" />
                        <span className="text-sm font-black uppercase tracking-widest text-gray-500">Our Promise</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
                    >
                        What Makes Us <span className="text-teal-600">Different</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-lg max-w-2xl mx-auto"
                    >
                        We go above and beyond to ensure your family receives the highest quality care with complete peace of mind.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-teal-100 hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-linear-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/20">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
