"use client";
import React from "react";
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  Activity,
  Search,
  Bell,
} from "lucide-react";
import { motion } from "framer-motion";

// --- DUMMY DATA ---
const DUMMY_BOOKINGS = [
  {
    id: "BK-1001",
    user: "Rahim Ahmed",
    serviceTitle: "Baby Sitting Service",
    dateBooked: "2024-03-20",
    totalCost: 2500,
    status: "Paid",
    paymentMethod: "Stripe",
  },
  {
    id: "BK-1002",
    user: "Fatema Begum",
    serviceTitle: "Elderly Care Service",
    dateBooked: "2024-03-19",
    totalCost: 5600,
    status: "Paid",
    paymentMethod: "Stripe",
  },
  {
    id: "BK-1003",
    user: "Tanvir Hasan",
    serviceTitle: "Sick Care Support",
    dateBooked: "2024-03-18",
    totalCost: 12000,
    status: "Pending",
    paymentMethod: "Cash",
  },
  {
    id: "BK-1004",
    user: "Mrs. Salma",
    serviceTitle: "Baby Sitting Service",
    dateBooked: "2024-03-18",
    totalCost: 1500,
    status: "Paid",
    paymentMethod: "Stripe",
  },
  {
    id: "BK-1005",
    user: "Karim Ullah",
    serviceTitle: "Elderly Care Service",
    dateBooked: "2024-03-17",
    totalCost: 4800,
    status: "Cancelled",
    paymentMethod: "N/A",
  },
];

export default function AdminDashboard() {
  const bookings = DUMMY_BOOKINGS;

  // Calculate stats
  const totalRevenue = bookings
    .filter((b) => b.status === "Paid")
    .reduce((acc, curr) => acc + curr.totalCost, 0);

  const totalBookings = bookings.length;
  const activeUsers = 124; // Mock number

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-teal-600 p-1.5 rounded-lg">
            <LayoutDashboard className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl text-gray-800">
            Admin<span className="text-teal-600">Panel</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 w-64"
            />
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm">
            AD
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <button className="text-sm bg-white border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 text-gray-900">
            Download Report
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Revenue
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mt-2">
                  ৳{totalRevenue.toLocaleString()}
                </h3>
                <span className="text-xs text-green-500 flex items-center mt-1 bg-green-50 w-fit px-2 py-0.5 rounded-full">
                  <TrendingUp className="w-3 h-3 mr-1" /> +12.5%
                </span>
              </div>
              <div className="p-3 bg-teal-50 rounded-xl">
                <LayoutDashboard className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Bookings
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mt-2">
                  {totalBookings}
                </h3>
                <span className="text-xs text-green-500 flex items-center mt-1 bg-green-50 w-fit px-2 py-0.5 rounded-full">
                  <TrendingUp className="w-3 h-3 mr-1" /> +8.2%
                </span>
              </div>
              <div className="p-3 bg-blue-50 rounded-xl">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Active Users
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mt-2">
                  {activeUsers}
                </h3>
                <span className="text-xs text-gray-400 mt-1 block">
                  Last 30 days
                </span>
              </div>
              <div className="p-3 bg-indigo-50 rounded-xl">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Transactions Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 bg-gray-50/50 flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">
              Recent Payment History
            </h3>
            <button className="text-sm text-teal-600 font-semibold hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-100 text-gray-700 uppercase font-semibold text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4">Booking ID</th>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookings.map((b, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-mono text-gray-500">
                      #{b.id}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                        {b.user.charAt(0)}
                      </div>
                      {b.user}
                    </td>
                    <td className="px-6 py-4">{b.serviceTitle}</td>
                    <td className="px-6 py-4">{b.dateBooked}</td>
                    <td className="px-6 py-4 text-teal-700 font-bold">
                      ৳{b.totalCost.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          b.status === "Paid"
                            ? "bg-green-100 text-green-700 border-green-200"
                            : b.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                            : "bg-red-100 text-red-700 border-red-200"
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
                {bookings.length === 0 && (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-12 text-center text-gray-400"
                    >
                      No bookings found yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
