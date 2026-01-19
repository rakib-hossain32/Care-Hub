"use client";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import ServiceCard from "../ServiceCard/ServiceCard";
import SectionHeader from "../Common/SectionHeader";
import { Star } from "lucide-react";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://care-backend-lime.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.slice(0, 3)); // Show top 3 on home page
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div id="services" className="max-w-7xl mx-auto px-4 py-24 bg-white">
      <SectionHeader
        subtitle="Our Expert Services"
        title="Choose the Best Care for Your Family"
        description="We provide professional caregiving services tailored to your family's needs, ensuring safety and comfort."
      />

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-10 h-10 text-teal-600 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      )}

      {/* Testimonials */}
      <div className="mt-32">
        <SectionHeader
          subtitle="Testimonials"
          title="What Families Say About Us"
          description="Read about the experiences of families who have trusted Care.xyz with their loved ones."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" stroke="none" className="w-5 h-5" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-4 leading-relaxed">
              "Found an amazing nanny for my daughter within 2 hours. The
              background check feature gave us peace of mind. Highly recommended!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold">S</div>
              <p className="font-bold text-gray-900">Sarah Ahmed</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" stroke="none" className="w-5 h-5" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-4 leading-relaxed">
              "The elderly care service for my father was exceptional. The
              nurse was professional and very kind. It made a huge difference."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">R</div>
              <p className="font-bold text-gray-900">Rafiqul Islam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
