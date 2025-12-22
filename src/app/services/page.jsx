"use client";
import React from "react";
// In your actual Next.js project, uncomment the following line:
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Baby,
  User,
  Stethoscope,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";



const servicesList = [
  {
    id: 1,
    title: "Baby Sitting",
    description:
      "Expert care for your little ones. We ensure a safe, engaging, and nurturing environment with verified professionals.",
    price: "500",
    icon: <Baby className="w-8 h-8 text-white" />,
    linear: "from-teal-400 to-emerald-500",
    shadow: "shadow-teal-100",
    features: [
      "Certified Caregivers",
      "Educational Activities",
      "Meal & Nap Support",
      "Real-time Updates",
    ],
    link: "/service/baby-care",
    popular: true,
  },
  {
    id: 2,
    title: "Elderly Care",
    description:
      "Compassionate companionship for seniors. We assist with daily routines, medication, and mobility to ensure dignity and comfort.",
    price: "600",
    icon: <User className="w-8 h-8 text-white" />,
    linear: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-100",
    features: [
      "Mobility Assistance",
      "Medication Management",
      "Health Monitoring",
      "Companionship",
    ],
    link: "/service/elderly-care",
    popular: false,
  },
  {
    id: 3,
    title: "Sick Care Support",
    description:
      "Specialized nursing for post-surgery or chronic needs. Professional medical monitoring and support right at your home.",
    price: "800",
    icon: <Stethoscope className="w-8 h-8 text-white" />,
    linear: "from-rose-400 to-pink-500",
    shadow: "shadow-rose-100",
    features: [
      "Vitals Monitoring",
      "Wound Dressing",
      "Injection Service",
      "24/7 Availability",
    ],
    link: "/service/sick-care",
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-100/50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6"
          >
            <Sparkles className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
              World Class Care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Services Tailored for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-blue-600">
              Your Needs
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 leading-relaxed"
          >
            Experience peace of mind with our verified professionals. Choose a
            service that fits your family&#39;s unique requirements.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className={`group relative bg-white rounded-4xl p-2 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 border border-gray-100`}
            >
              {/* Card Body */}
              <div className="h-full bg-white rounded-3xl p-8 flex flex-col relative overflow-hidden">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-linear-to-l from-teal-500 to-teal-400 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl shadow-sm">
                    MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.linear} flex items-center justify-center shadow-lg ${service.shadow} mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Title & Desc */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-100">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm font-medium text-slate-700"
                      >
                        <Check
                          className="w-4 h-4 text-teal-500 mr-2.5 mt-0.5 shrink-0"
                          strokeWidth={3}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action */}
                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Starting at
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-slate-900">
                        ৳{service.price}
                      </span>
                      <span className="text-sm text-slate-500 font-medium ml-1">
                        /hr
                      </span>
                    </div>
                  </div>

                  <Link href={service.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-linear-to-r ${service.linear} shadow-lg transition-all duration-300`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 mb-4">
            Not sure which service to choose?
          </p>
          <button className="text-teal-600 font-bold hover:text-teal-800 transition-colors border-b-2 border-teal-100 hover:border-teal-600 pb-0.5">
            Contact our support team
          </button>
        </motion.div>
      </div>
    </div>
  );
}
