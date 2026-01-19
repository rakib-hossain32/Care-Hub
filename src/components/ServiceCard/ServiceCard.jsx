"use client";
import React from "react";
import { Baby, User, Stethoscope, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const getIcon = (type) => {
  switch (type?.toLowerCase()) {
    case "baby care": return <Baby className="w-8 h-8 text-teal-600" />;
    case "elderly care": return <User className="w-8 h-8 text-teal-600" />;
    case "sick care":
    case "sick people care": return <Stethoscope className="w-8 h-8 text-teal-600" />;
    default: return <Sparkles className="w-8 h-8 text-teal-600" />;
  }
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-4xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col h-full group"
    >
      <div className="p-8 flex-1">
        <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {getIcon(service.title)}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
          {service.title}
        </h3>
        {/* ডেসক্রিপশন ছোট করে দেখানো হচ্ছে */}
        <p className="text-gray-500 mb-4 leading-relaxed line-clamp-2 text-sm">
          {service.description}
        </p>
      </div>

      <div className="p-8 pt-0 mt-auto">
        <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-5 border border-gray-100 group-hover:bg-teal-50/50 transition-colors">
          <div>
            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none">
              Rate
            </span>
            <div className="text-2xl font-black text-teal-700">
              ৳{service.price}
              <span className="text-sm font-bold text-gray-400">/hr</span>
            </div>
          </div>
          <Link href={`/services/${service._id}`}
            className="w-12 h-12 bg-white text-gray-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-200 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all active:scale-95"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;