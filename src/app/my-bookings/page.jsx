"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Loader2,
} from "lucide-react";

export default function MyBookingsPage() {
  const { data: session, status: authStatus } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`https://care-backend-lime.vercel.app/bookings/${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else if (authStatus !== "loading") {
      setLoading(false);
    }
  }, [session, authStatus]);

  if (loading || authStatus === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-12 h-12 text-teal-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
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
              <button className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition cursor-pointer">
                Browse Services
              </button>
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking, idx) => (
              <motion.div
                key={booking._id}
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
                      ${booking.status === "pending"
                          ? "bg-yellow-50 text-yellow-700 border-yellow-100"
                          : booking.status === "confirmed"
                            ? "bg-blue-50 text-blue-700 border-blue-100"
                            : "bg-green-50 text-green-700 border-green-100"
                        }`}
                    >
                      {booking.status === "pending" && (
                        <AlertCircle className="w-3 h-3" />
                      )}
                      {(booking.status === "confirmed" || booking.status === "completed") && (
                        <CheckCircle className="w-3 h-3" />
                      )}
                      <span className="capitalize">{booking.status}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {booking.serviceTitle}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-y-1 gap-x-6 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-teal-500" />
                      <span className="truncate max-w-50">
                        {booking.address || "Standard Home Service"}
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-500" />
                      {new Date(booking.bookedAt).toLocaleDateString()}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-500" />
                      1 Hour Duration
                    </p>
                  </div>
                </div>

                <div className="mt-6 md:mt-0 md:ml-8 text-right border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-8 min-w-[140px]">
                  <p className="text-xs text-gray-500 mb-1">Total Paid</p>
                  <div className="text-2xl font-bold text-teal-700">
                    ৳{booking.price}
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2">
                    Ref: {booking._id.substring(0, 8)}...
                  </p>

                  {booking.status === "pending" && (
                    <button className="mt-3 text-xs text-red-500 font-medium hover:text-red-700 hover:underline cursor-pointer">
                      Cancel Booking
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
