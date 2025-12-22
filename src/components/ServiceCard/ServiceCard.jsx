
import React from "react";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col h-full">
      <div className="p-8 flex-1">
        <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-500 mb-6 leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-500 uppercase font-semibold">
            Starting at
          </span>
          <div className="text-xl font-bold text-teal-700">
            ৳{service.pricePerHour}
            <span className="text-sm font-normal text-gray-500">/hr</span>
          </div>
        </div>
        <Link href={'/service/33'}
          // onClick={() => onSelect(service)}
          className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
