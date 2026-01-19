"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User, CheckCircle, ArrowRight, Chrome, Github, Heart } from "lucide-react";
import SectionHeader from "@/components/Common/SectionHeader";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";


export default function RegisterForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: "",
    });
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passRegex.test(formData.password)) {
            setError("Password must be 6+ chars with 1 uppercase & 1 lowercase letter.");
            return;
        }
        if (formData.password !== formData.confirmPass) {
            setError("Passwords do not match.");
            return;
        }

        const hashedPassword = await bcrypt.hash(formData.password, 10);

        const newUser = {
            ...formData,
            password: hashedPassword,
            createdAt: new Date(),
        }
        console.log("Registering user:", newUser);

        const res = await fetch("https://care-backend-lime.vercel.app/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        const data = await res.json();
        console.log(data);
        if (data.insertedId) {
            return redirect("/login");
        }

    };




    return (
        <div className="p-6 sm:p-8 lg:p-10 h-full overflow-y-hidden ">
            <SectionHeader
                align="left"
                subtitle="Register Now"
                title="Create Account"
                className="mb-8"
            />

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-bold mb-6 border border-red-100">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
                        Full Name
                    </label>
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                        <input
                            type="text"
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900"
                            placeholder="John Doe"
                            required
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
                        Email Address
                    </label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                        <input
                            type="email"
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900"
                            placeholder="john@example.com"
                            required
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
                            Password
                        </label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                            <input
                                type="password"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900"
                                placeholder="••••••••"
                                required
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
                            Confirm
                        </label>
                        <div className="relative group">
                            <CheckCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                            <input
                                type="password"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900"
                                placeholder="••••••••"
                                required
                                onChange={(e) =>
                                    setFormData({ ...formData, confirmPass: e.target.value })
                                }
                            />
                        </div>
                    </div>
                </div>

                <button
                    className="w-full bg-teal-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-teal-700 transition shadow-[0_20px_40px_-10px_rgba(13,148,136,0.3)] flex justify-center items-center gap-3 active:scale-[0.98] mt-4 cursor-pointer"
                >
                    Get Started <ArrowRight className="w-5 h-5" />
                </button>
            </form>

            <div className="mt-8">
                <div className="relative flex items-center justify-center mb-8">
                    <div className="w-full border-t border-gray-100"></div>
                    <span className="bg-white px-4 text-[9px] font-black text-gray-300 uppercase tracking-[0.3em] absolute">
                        Social Sign Up
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-100 rounded-2xl transition hover:bg-gray-50 hover:border-gray-200 group">
                        <Chrome className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                        <span className="text-xs font-bold text-gray-700">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-100 rounded-2xl transition hover:bg-gray-50 hover:border-gray-200 group">
                        <Github className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                        <span className="text-xs font-bold text-gray-700">GitHub</span>
                    </button>
                </div>
            </div>

            <p className="mt-8 text-center text-sm font-medium text-gray-400">
                Already am ambassador?{" "}
                <Link
                    href="/login"
                    className="text-teal-600 font-black hover:underline underline-offset-4"
                >
                    Sign In
                </Link>
            </p>
        </div>
    )
}
