"use client";
import React from "react";
// In your actual Next.js project, uncomment the following line:
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
} from "lucide-react";



// --- DUMMY DATA ---
const DUMMY_BOOKINGS = [
  {
    id: 1,
    serviceTitle: "Baby Sitting Service",
    status: "Confirmed",
    paymentId: "stripe_987x543",
    address: "House 12, Road 5, Block B, Banani",
    district: "Dhaka",
    date: "2024-03-15",
    duration: 5,
    totalCost: 2625, // 500 * 5 + 5% fee
    dateBooked: "2024-03-10",
  },
  {
    id: 2,
    serviceTitle: "Elderly Care Service",
    status: "Pending",
    paymentId: "stripe_123abc4",
    address: "Flat 4A, Green Garden, Agrabad",
    district: "Chittagong",
    date: "2024-03-20",
    duration: 8,
    totalCost: 5040, // 600 * 8 + 5% fee
    dateBooked: "2024-03-18",
  },
  {
    id: 3,
    serviceTitle: "Sick People Support",
    status: "Completed",
    paymentId: "stripe_xyz789",
    address: "Village Tower, Zindabazar",
    district: "Sylhet",
    date: "2024-02-28",
    duration: 12,
    totalCost: 10080, // 800 * 12 + 5% fee
    dateBooked: "2024-02-25",
  },
];

export default function MyBookingsPage() {
  const bookings = DUMMY_BOOKINGS;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
            <p className="text-gray-500 mt-1">
              Manage your upcoming and past care services.
            </p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-600">
            Total Bookings: {bookings.length}
          </div>
        </div>

        {bookings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No bookings found
            </h3>
            <p className="text-gray-500 mb-6">
              You haven&#39;t booked any services yet.
            </p>
            <Link href="/services">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition">
                Browse Services
              </button>
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking, idx) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1
                      ${
                        booking.status === "Pending"
                          ? "bg-yellow-50 text-yellow-700 border-yellow-100"
                          : booking.status === "Confirmed"
                          ? "bg-blue-50 text-blue-700 border-blue-100"
                          : "bg-green-50 text-green-700 border-green-100"
                      }`}
                    >
                      {booking.status === "Pending" && (
                        <AlertCircle className="w-3 h-3" />
                      )}
                      {booking.status === "Confirmed" && (
                        <CheckCircle className="w-3 h-3" />
                      )}
                      {booking.status === "Completed" && (
                        <CheckCircle className="w-3 h-3" />
                      )}
                      {booking.status}
                    </span>
                    <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">
                      #{booking.paymentId}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {booking.serviceTitle}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-y-1 gap-x-6 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-teal-500" />
                      <span className="truncate max-w-50">
                        {booking.address}, {booking.district}
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-500" />
                      {booking.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-500" />
                      {booking.duration} Hours Duration
                    </p>
                  </div>
                </div>

                <div className="mt-6 md:mt-0 md:ml-8 text-right border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-8 min-w-35">
                  <p className="text-xs text-gray-500 mb-1">Total Paid</p>
                  <div className="text-2xl font-bold text-teal-700">
                    ৳{booking.totalCost}
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2">
                    Booked on {booking.dateBooked}
                  </p>

                  {booking.status === "Pending" && (
                    <button className="mt-3 text-xs text-red-500 font-medium hover:text-red-700 hover:underline">
                      Cancel Booking
                    </button>
                  )}
                  {booking.status === "Confirmed" && (
                    <button className="mt-3 text-xs text-teal-600 font-medium hover:text-teal-800 hover:underline">
                      View Receipt
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
