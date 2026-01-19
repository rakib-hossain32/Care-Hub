"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full -ml-32 -mb-32 blur-3xl" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                Stay Updated with <br />
                                <span className="text-teal-400">Care Tips & News</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Join 5,000+ families receiving our weekly newsletter on elderly care, child development, and home safety tips.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <form className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-teal-500 text-gray-900 px-8 py-4 rounded-2xl font-black hover:bg-teal-400 transition-all flex items-center justify-center gap-2"
                                >
                                    Subscribe Now <Send className="w-5 h-5" />
                                </button>
                            </form>
                            <p className="text-gray-500 text-xs text-center sm:text-left">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Newsletter;
