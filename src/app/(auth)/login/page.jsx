"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Chrome, Github, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/Common/SectionHeader";
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      window.location.href = "/";
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 py-20 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0D9488 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1000px] w-full grid lg:grid-cols-2 bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative z-10 max-lg:w-[500px]"
      >
        {/* Left Side: Branding & Trust */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gray-50/50 border-r border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tight">Care.xyz</span>
            </div>

            <h3 className="text-3xl font-black text-gray-900 leading-tight mb-6">
              Empowering Families <br />
              <span className="text-teal-600">with Elite Care.</span>
            </h3>

            <ul className="space-y-4">
              {['5-Step Verification Process', '24/7 Dedicated Support', 'Real-time Activity Tracking'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-500 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-gray-600 font-medium italic mb-4">
              "The level of professionalism and care we received was absolutely outstanding."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 border-2 border-white shadow-sm" />
              <div>
                <p className="text-sm font-bold text-gray-900 leading-none">Sarah Jenkins</p>
                <p className="text-[11px] font-bold text-teal-600 uppercase tracking-widest mt-1">Verified Parent</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 sm:p-12 lg:p-16">
          <SectionHeader
            align="left"
            subtitle="Secure Login"
            title="Welcome Back"
            className="mb-8"
          />

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-bold mb-6 border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                <input
                  type="email"
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900"
                  placeholder="name@example.com"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Password
                </label>
                <Link href="#" className="text-[11px] font-bold text-teal-600 hover:text-teal-700">
                  Forgot?
                </Link>
              </div>
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

            <button
              className="w-full bg-teal-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-teal-700 transition shadow-[0_20px_40px_-10px_rgba(13,148,136,0.3)] flex justify-center items-center gap-3 active:scale-[0.98] cursor-pointer"
            >
              Sign In <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-8">
              <div className="w-full border-t border-gray-100"></div>
              <span className="bg-white px-4 text-[9px] font-black text-gray-300 uppercase tracking-[0.3em] absolute">
                Instant Access
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

          <p className="mt-10 text-center text-sm font-medium text-gray-400">
            Join the community?{" "}
            <Link
              href="/register"
              className="text-teal-600 font-black hover:underline underline-offset-4"
            >
              Create Account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
