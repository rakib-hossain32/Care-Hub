"use client";
import React from "react";
// In your actual Next.js project, uncomment the following line:
import Link from "next/link";
import {
  Heart,
  Baby,
  CheckCircle,
  ArrowLeft,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";



const ServiceDetails = () => {
  // --- DUMMY DATA ---
  const selectedService = {
    id: 1,
    title: "Professional Baby Sitting",
    description:
      "Our experienced babysitters provide a safe, nurturing, and engaging environment for your children. Whether you need a few hours for an evening out or regular daily care, our verified professionals are trained to handle all your child's needs with love and patience.",
    pricePerHour: 500,
    rating: 4.9,
    reviews: 120,
    icon: <Baby />,
    features: [
      "Diaper Changing & Hygiene",
      "Healthy Meal Preparation & Feeding",
      "Educational Playtime & Activities",
      "Bedtime Routine Assistance",
      "Light Housekeeping (Toys cleanup)",
      "First Aid Certified Caregivers",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/services">
          <motion.button
            whileHover={{ x: -5 }}
            className="mb-8 text-gray-500 hover:text-teal-600 flex items-center font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Services
          </motion.button>
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            {/* Left Column: Icon/Image Area */}
            <div className="bg-teal-50 p-12 flex flex-col items-center justify-center relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-full shadow-lg mb-6"
              >
                {React.cloneElement(selectedService.icon, {
                  className: "w-32 h-32 text-teal-600",
                })}
              </motion.div>

              {/* Trust Badges */}
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-teal-800 font-semibold">
                  <Shield className="w-4 h-4" /> Verified
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-orange-700 font-semibold">
                  <Star className="w-4 h-4 fill-orange-500 text-orange-500" />{" "}
                  {selectedService.rating} ({selectedService.reviews} Reviews)
                </div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl font-bold text-gray-900 mb-6"
              >
                {selectedService.title}
              </motion.h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-8">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-teal-500" /> What&#39;s Included:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedService.features.map((f, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 shrink-0" />
                      <span className="text-sm font-medium">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-100">
                <div>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                    Service Charge
                  </p>
                  <p className="text-4xl font-bold text-teal-700 mt-1">
                    ৳{selectedService.pricePerHour}
                    <span className="text-lg text-gray-400 font-normal ml-1">
                      /hour
                    </span>
                  </p>
                </div>

                <Link href="/booking/baby-care" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-teal-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 shadow-lg hover:shadow-teal-200 transition-all"
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
