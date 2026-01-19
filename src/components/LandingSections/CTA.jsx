"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden">
                    {/* Main CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-linear-to-br from-teal-600 via-teal-500 to-emerald-500 rounded-[3rem] p-12 lg:p-20 relative"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl" />

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
                            >
                                Ready to Find Your Perfect Caregiver?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed"
                            >
                                Join thousands of families who trust Care.xyz for their loved ones. Get started in minutes.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Link href="/services">
                                    <button className="bg-white text-teal-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Browse Services
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="bg-teal-800 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-teal-900 transition-all border-2 border-white/20 hover:scale-105 active:scale-95">
                                        Contact Us
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 -mt-12 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6 text-teal-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                                <p className="text-lg font-bold text-gray-900">+880 1234-567890</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-teal-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</p>
                                <p className="text-lg font-bold text-gray-900">support@care.xyz</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                                <MessageCircle className="w-6 h-6 text-teal-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Chat</p>
                                <p className="text-lg font-bold text-gray-900">24/7 Available</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;
