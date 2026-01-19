"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";

const stats = [
  {
    label: "Professional Caregivers",
    value: "500+",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    label: "Trusted Families",
    value: "1,200+",
    icon: <Users className="w-5 h-5" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Hours of Care",
    value: "50,000+",
    icon: <Clock className="w-5 h-5" />,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const AboutSection = () => {
  return (
    <section className="relative pb-24 bg-white overflow-hidden text-left">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-teal-50/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-50/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              align="left"
              subtitle="Our Mission"
              title="Redefining the Standard of Domestic Care"
              description="At Care.xyz, we understand that finding the right person to care for your family is a matter of profound trust. We've built a world-class platform that merges human empathy with rigorous safety standards."
            />

            <ul className="space-y-5 mb-10">
              {[
                "100% Verified professional caregivers",
                "Personalized care plans for every family",
                "24/7 dedicated support & monitoring",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <div className="bg-teal-100 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  </div>
                  {text}
                </motion.li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all group"
                >
                  <div className={`${stat.bg} ${stat.color} w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="font-black text-2xl text-gray-900 mb-1 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <motion.button
                whileHover={{ gap: "1.25rem" }}
                className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-gray-200 hover:bg-teal-600 transition-all cursor-pointer"
              >
                Explore Our Mission
                <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Side: Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative z-10 p-4 bg-white rounded-[3rem] shadow-2xl shadow-gray-200 border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
                alt="Compassionate Care"
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-teal-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-5 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 items-center gap-5 max-w-[240px] hidden sm:flex"
            >
              <div className="bg-rose-50 p-4 rounded-2xl">
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
              </div>
              <div>
                <p className="font-black text-xl text-gray-900 leading-none mb-1 text-left">Elite</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider text-left">Compassion</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 sm:-left-4 z-20 bg-teal-900 p-8 rounded-[2.5rem] shadow-2xl shadow-teal-900/30 text-white max-w-[300px] text-left hidden sm:block"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-teal-800 bg-gray-200 overflow-hidden shadow-inner">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-teal-300 uppercase tracking-widest">Trust Index</div>
              </div>
              <p className="font-bold text-lg leading-snug">
                "Finding Care.xyz was the best decision for our mother."
              </p>
              <p className="text-teal-400 text-sm mt-2">— The Rahman Family</p>
            </motion.div>

            {/* Background Blob Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-tr from-teal-50 to-blue-50/20 rounded-full -z-20 blur-3xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;