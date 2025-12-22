"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Regex: 6+ chars, 1 upper, 1 lower
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passRegex.test(formData.password)) {
      setError(
        "Password must be 6+ chars with 1 uppercase & 1 lowercase letter."
      );
      return;
    }
    if (formData.password !== formData.confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    // Demo Registration Logic
    console.log("Registering user:", formData);
    // সফল রেজিস্ট্রেশনের পর ইউজারকে রিডাইরেক্ট করতে পারেন
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Join Care.xyz</h2>
          <p className="text-gray-500 mt-2">
            Create an account to find reliable care
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-100"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 block">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                placeholder="John Doe"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 block">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                placeholder="you@example.com"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 block">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                placeholder="Min 6 chars (A-Z, a-z)"
                required
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Min 6 chars, 1 Uppercase, 1 Lowercase
            </p>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 block">
              Confirm Password
            </label>
            <div className="relative">
              <CheckCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                placeholder="Confirm your password"
                required
                onChange={(e) =>
                  setFormData({ ...formData, confirmPass: e.target.value })
                }
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition shadow-lg mt-2"
          >
            Create Account
          </motion.button>
        </form>

        <div className="mt-6">
          <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition font-medium text-gray-700">
            <span className="font-bold text-blue-600 text-xl">G</span> Continue
            with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-teal-600 font-bold hover:underline"
          >
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
