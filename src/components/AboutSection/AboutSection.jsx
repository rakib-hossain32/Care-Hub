"use client"
import React from 'react';
import { motion } from "framer-motion";
import {
  Heart,
  Baby,
  User,
  Stethoscope,
  CheckCircle,
  Star,
  Users,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
const stats = [
  {
    label: "Verified Caregivers",
    value: "500+",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    label: "Happy Families",
    value: "1200+",
    icon: <Users className="w-6 h-6" />,
  },
  {
    label: "Hours of Care",
    value: "50k+",
    icon: <Clock className="w-6 h-6" />,
  },
];
const AboutSection = () => {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-2">
                Our Mission
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Making Caregiving Accessible, Secure & Easy
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Care.xyz, we understand that finding the right person to care
                for your family is a matter of trust. Our platform bridges the
                gap between professional caregivers and families in need,
                ensuring safety through rigorous verification and providing a
                seamless booking experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100"
                  >
                    <div className="flex justify-center text-teal-600 mb-2">
                      {stat.icon}
                    </div>
                    <div className="font-bold text-2xl text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-linear-to-tr from-teal-100 to-white rounded-3xl p-8 border border-teal-50 shadow-xl">
                {/* Abstract Illustration Placeholder */}
                <div className="aspect-video bg-teal-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <Heart className="w-32 h-32 text-teal-200 absolute -bottom-4 -right-4" />
                  <Heart className="w-16 h-16 text-rose-200 absolute top-4 left-4" />
                  <div className="text-center z-10">
                    <h4 className="text-xl font-bold text-gray-800">
                      Care.xyz Promise
                    </h4>
                    <p className="text-gray-500 mt-2">
                      Safety • Empathy • Trust
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

export default AboutSection;