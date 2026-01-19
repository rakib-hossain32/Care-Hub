"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User, CheckCircle, ArrowRight, Chrome, Github, Heart } from "lucide-react";
import SectionHeader from "@/components/Common/SectionHeader";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export default function RegisterPage() {
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
      createdAt: new Date().toISOString(),
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
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 py-30 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0D9488 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1050px] w-full grid lg:grid-cols-2 bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative z-10 max-lg:w-[500px]"
      >
        {/* Left Side: Join Benefits */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-teal-900 overflow-hidden relative">
          {/* Decorative background for the dark panel */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-16">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                <Heart className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">Care.xyz</span>
            </div>

            <h3 className="text-4xl font-black text-white leading-[1.1] mb-8">
              Start Your <br />
              <span className="text-teal-400">Elite Journey</span> <br />
              Today.
            </h3>

            <div className="space-y-6 max-w-sm">
              {[
                { title: 'Identity Verification', desc: 'Secure blockchain-based provider vetting.' },
                { title: 'Priority Access', desc: 'Early booking for specialized caregivers.' },
                { title: 'Global Network', desc: 'Connect with experts across 50 countries.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-teal-100/60 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-teal-900 bg-teal-800 shadow-sm" />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-teal-900 bg-teal-500 flex items-center justify-center text-[10px] font-black text-white">+5k</div>
            </div>
            <p className="text-teal-50 text-xs font-medium">
              Join over 5,000+ elite caregivers and families worldwide.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
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
      </motion.div>
    </div>
  );
}
