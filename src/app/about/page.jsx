"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Heart,
    ShieldCheck,
    Users,
    Clock,
    Target,
    Eye,
    CheckCircle2,
    Award,
} from "lucide-react";
import SectionHeader from "@/components/Common/SectionHeader";

const stats = [
    {
        label: "Verified Caregivers",
        value: "500+",
        icon: <ShieldCheck className="w-6 h-6" />,
        color: "bg-blue-50 text-blue-600",
    },
    {
        label: "Happy Families",
        value: "1200+",
        icon: <Users className="w-6 h-6" />,
        color: "bg-teal-50 text-teal-600",
    },
    {
        label: "Hours of Care",
        value: "50k+",
        icon: <Clock className="w-6 h-6" />,
        color: "bg-rose-50 text-rose-600",
    },
];

const values = [
    {
        title: "Unmatched Safety",
        desc: "Every caregiver undergoes a rigorous 5-step verification process, including background checks.",
        icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
        title: "Deep Empathy",
        desc: "We select caregivers who don't just have the skills, but the heart to provide compassionate care.",
        icon: <Heart className="w-8 h-8" />,
    },
    {
        title: "Pure Reliability",
        desc: "Our platform ensures consistent, on-time care that you can depend on, day or night.",
        icon: <Clock className="w-8 h-8" />,
    },
];

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-50 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-50 rounded-full blur-3xl opacity-50" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeader
                        subtitle="About Our Mission"
                        title="Elevating the Standard of Compassionate Care"
                        description="At Care.xyz, we believe everyone deserves premium care. We've built a platform that merges cutting-edge technology with human empathy to find the perfect caregiver for your loved ones."
                    />
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 -mt-16 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-100 border border-gray-50 flex flex-col items-center text-center"
                            >
                                <div className={`${stat.color} p-4 rounded-2xl mb-4`}>
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-gray-500 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-bold mb-4">
                                    <Target className="w-4 h-4" /> Our Mission
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Bridging the Gap Between Families and Quality Care
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Our mission is to empower families by providing a secure, transparent,
                                    and efficient way to find highly qualified caregivers. We handle the
                                    complexities so you can focus on what matters most—your loved ones.
                                </p>
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-sm font-bold mb-4">
                                    <Eye className="w-4 h-4" /> Our Vision
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    The Future of Domestic Caregiving
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    We envision a world where high-quality home care is accessible to
                                    everyone at the touch of a button, supported by a community of
                                    respected and well-supported caregivers.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-linear-to-tr from-teal-600/20 to-transparent" />
                                <img
                                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
                                    alt="Caregiving"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs border border-gray-100">
                                <div className="bg-yellow-100 p-3 rounded-xl">
                                    <Award className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-lg">Trusted Provider</div>
                                    <div className="text-sm text-gray-500">Certified by Care Standards</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        badge="Our Values"
                        title="Our Core"
                        subtitle="Values"
                        description="The principles that guide everything we do, ensuring the highest standards of care."
                    />
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                    {v.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Factors */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-teal-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Care.xyz?</h2>
                                <div className="space-y-4">
                                    {[
                                        "Strict background screening for all staff",
                                        "Continuous medical and empathy training",
                                        "Dedicated support available 24/7",
                                        "Seamless and transparent pricing model"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-teal-400 w-6 h-6" />
                                            <span className="text-teal-50 text-lg">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-teal-800/50 p-6 rounded-2xl backdrop-blur-sm">
                                    <div className="text-3xl font-bold mb-1">98%</div>
                                    <div className="text-teal-200 text-sm italic">Client Satisfaction</div>
                                </div>
                                <div className="bg-teal-800/50 p-6 rounded-2xl backdrop-blur-sm mt-8">
                                    <div className="text-3xl font-bold mb-1">24/7</div>
                                    <div className="text-teal-200 text-sm italic">Emergency Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
