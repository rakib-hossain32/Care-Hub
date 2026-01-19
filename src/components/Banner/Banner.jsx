"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative bg-teal-50/50 py-20 lg:py-32 pt-30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-teal-800">#1 Trusted Care Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8">
              Professional Care for <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-emerald-500">
                Your Loved Ones
              </span>
            </h1>

            <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
              Trusted babysitters, elderly companions, and specialized nurses at your doorstep. Book secure and reliable care services in minutes.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#services">
                <button
                  className="bg-teal-600 text-white px-10 py-5 rounded-2xl text-lg font-black shadow-[0_20px_40px_-10px_rgba(13,148,136,0.5)] hover:bg-teal-700 transition-all transform hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2"
                >
                  Find a Caretaker
                </button>
              </Link>
              <button className="bg-white text-gray-900 px-10 py-5 rounded-2xl text-lg font-black hover:bg-gray-50 border border-gray-100 shadow-xl shadow-gray-200/50 transition-all cursor-pointer">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default Banner;