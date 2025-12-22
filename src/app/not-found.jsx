"use client"
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, AlertCircle } from "lucide-react";


export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full border border-gray-100"
      >
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
          className="bg-red-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <AlertCircle className="w-12 h-12 text-red-500" />
        </motion.div>

        <h1 className="text-8xl font-extrabold text-teal-600 mb-2 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-8 leading-relaxed">
          Oops! The page you are looking for doesn&#39;t exist or has been
          moved. Let&#39;s get you back to safety.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-teal-700 transition flex items-center gap-2 mx-auto"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </motion.button>
        </Link>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-gray-400 text-sm"
      >
        © 2024 Care.xyz. All rights reserved.
      </motion.p>
    </div>
  );
}
