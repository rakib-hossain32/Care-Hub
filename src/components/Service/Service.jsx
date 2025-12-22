import React from "react";
import { Heart, Baby, User, Star } from "lucide-react";
import ServiceCard from "../ServiceCard/ServiceCard";

// --- MOCK DATA ---
const SERVICES = [
  {
    id: 1,
    title: "Baby Sitting",
    description:
      "Experienced babysitters to take care of your little ones with love and safety.",
    pricePerHour: 500, // BDT
    image: "baby-care",
    icon: <Baby className="w-8 h-8 text-teal-600" />,
    features: ["Diaper Changing", "Feeding", "Playtime", "Bedtime Stories"],
  },
  {
    id: 2,
    title: "Elderly Care",
    description:
      "Compassionate caregivers for your elderly parents offering companionship and assistance.",
    pricePerHour: 600, // BDT
    image: "elderly-care",
    icon: <User className="w-8 h-8 text-teal-600" />,
    features: [
      "Medication Reminder",
      "Walking Assistance",
      "Companionship",
      "Light Housekeeping",
    ],
  },
  {
    id: 3,
    title: "Special Sick Care",
    description:
      "Professional nursing assistance for post-surgery or sick family members at home.",
    pricePerHour: 800, // BDT
    image: "sick-care",
    icon: <Heart className="w-8 h-8 text-teal-600" />,
    features: [
      "Vitals Monitoring",
      "Wound Dressing",
      "Injection Support",
      "24/7 Monitoring",
    ],
  },
];

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-white">
      <div className="text-center mb-16">
        <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
          Our Services
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Choose the Right Care
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            //   onSelect={handleServiceSelect}
          />
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-32">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What Families Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex text-yellow-400 mb-4">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
            <p className="text-gray-600 italic mb-4">
              &#34;Found an amazing nanny for my daughter within 2 hours. The
              background check feature gave us peace of mind.&#34;
            </p>
            <p className="font-bold text-gray-900">- Sarah Ahmed</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex text-yellow-400 mb-4">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
            <p className="text-gray-600 italic mb-4">
              &#34;The elderly care service for my father was exceptional. The
              nurse was professional and very kind.&#34;
            </p>
            <p className="font-bold text-gray-900">- Rafiqul Islam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
