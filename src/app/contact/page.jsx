"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageSquare,
    Clock,
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
} from "lucide-react";
import SectionHeader from "@/components/Common/SectionHeader";

const contactDetails = [
    {
        icon: <Mail className="w-6 h-6" />,
        title: "Email Us",
        detail: "hello@care.xyz",
        desc: "Our friendly team is here to help.",
        color: "bg-blue-50 text-blue-600",
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: "Call Us",
        detail: "+1 (555) 000-0000",
        desc: "Mon-Fri from 8am to 6pm.",
        color: "bg-teal-50 text-teal-600",
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        title: "Office",
        detail: "123 Care Street, NY 10001",
        desc: "Come say hello at our NYC office.",
        color: "bg-rose-50 text-rose-600",
    },
];

const ContactPage = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent successfully!");
        }, 1500);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50/50">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-teal-50 rounded-full blur-[120px] opacity-60" />
                    <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-rose-50 rounded-full blur-[120px] opacity-60" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeader
                        subtitle="Get In Touch"
                        title="Let's Start a Conversation Today"
                        description="Have questions about our care services? We're here to provide the support and information you need. Reach out to us today."
                    />
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-24 -mt-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left: Contact Info */}
                        <div className="space-y-12">
                            <div className="grid sm:grid-cols-1 gap-8">
                                {contactDetails.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-6 p-6 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300"
                                    >
                                        <div className={`${item.color} p-4 rounded-2xl shrink-0 h-fit`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                            <p className="text-gray-900 font-semibold mb-1">{item.detail}</p>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Socials & Additional Info */}
                            <div className="bg-teal-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-800 rounded-full blur-2xl -mr-16 -mt-16" />
                                <h4 className="text-2xl font-bold mb-6">Connect with us</h4>
                                <div className="flex gap-4 mb-8">
                                    {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                        <motion.a
                                            key={i}
                                            href="#"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
                                        >
                                            <Icon className="w-5 h-5 text-teal-50" />
                                        </motion.a>
                                    ))}
                                </div>
                                <div className="space-y-4 pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-3 text-teal-100">
                                        <Clock className="w-5 h-5" />
                                        <span>Average response time: 2 hours</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-teal-100">
                                        <MessageSquare className="w-5 h-5" />
                                        <span>Live Chat available 9am - 5pm EST</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-50"
                        >
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 transition-all outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 transition-all outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                                    <select className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 transition-all outline-none appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Service Booking</option>
                                        <option>Caregiver Application</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="How can we help you?"
                                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 transition-all outline-none resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-5 rounded-2xl shadow-lg shadow-teal-600/20 flex items-center justify-center gap-3 transition-all disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Map or Locations Placeholder */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeader
                        title="Our Global"
                        subtitle="Presence"
                        description="Explore our locations worldwide where we provide top-tier caregiving services."
                    />
                    <div className="aspect-21/9 bg-white rounded-[3rem] border border-gray-100 shadow-sm flex items-center justify-center relative overflow-hidden">
                        {/* Visual placeholder for map */}
                        <div className="absolute inset-0 bg-teal-50/30" />
                        <div className="relative z-10 flex flex-col items-center gap-4 text-teal-800">
                            <MapPin className="w-12 h-12 animate-bounce" />
                            <p className="font-bold text-xl uppercase tracking-widest">Interactive Map Placeholder</p>
                            <div className="flex gap-8 mt-4">
                                <div className="text-center">
                                    <div className="font-bold text-3xl">NYC</div>
                                    <div className="text-sm opacity-60">Headquarters</div>
                                </div>
                                <div className="text-center border-l border-teal-200 pl-8">
                                    <div className="font-bold text-3xl">LDN</div>
                                    <div className="text-sm opacity-60">European Hub</div>
                                </div>
                                <div className="text-center border-l border-teal-200 pl-8">
                                    <div className="font-bold text-3xl">SYD</div>
                                    <div className="text-sm opacity-60">APAC Center</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
