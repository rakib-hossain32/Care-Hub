"use client";
import React, { useState, useEffect } from "react";
// In your actual Next.js project, uncomment the following lines:
import { useRouter, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  ShieldCheck,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

// Mock router/params for preview
// const useRouter = () => ({
//   push: (path) => console.log("Navigating to:", path),
// });
// const useParams = () => ({ id: "baby-care" }); // Default ID for preview

// Mock Data Database
const SERVICES_DB = {
  "baby-care": { id: 1, title: "Baby Sitting Service", pricePerHour: 500 },
  "elderly-care": { id: 2, title: "Elderly Care Service", pricePerHour: 600 },
  "sick-care": { id: 3, title: "Sick People Support", pricePerHour: 800 },
};

const DIVISIONS = [
  "Dhaka",
  "Chittagong",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barisal",
  "Rangpur",
  "Mymensingh",
];

export default function BookingPage() {
  const router = useRouter();
  const params = useParams();
  const serviceId = params.id;

  // Find service based on URL ID
  const service = SERVICES_DB[serviceId] || SERVICES_DB["baby-care"];

  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    duration: 4,
    division: "Dhaka",
    district: "",
    address: "",
    date: "",
    note: "",
  });

  // Derived State
  const totalCost = formData.duration * service.pricePerHour;
  const serviceFee = Math.round(totalCost * 0.05); // 5% Platform fee
  const grandTotal = totalCost + serviceFee;

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate Stripe API Call
    setTimeout(() => {
      setIsProcessing(false);
      const bookingData = {
        ...formData,
        serviceId: service.id,
        serviceTitle: service.title,
        totalCost: grandTotal,
        status: "Pending",
        paymentId: "stripe_" + Math.random().toString(36).substr(2, 9),
        dateBooked: new Date().toLocaleDateString(),
      };

      console.log("Booking Success:", bookingData);
      alert("Payment Successful! Booking Confirmed.");
      router.push("/my-bookings"); // Redirect after success
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/services")}
            className="text-gray-500 hover:text-teal-600 flex items-center mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Cancel & Return
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <div className="flex items-center gap-2 mt-2">
            <div
              className={`h-2 w-20 rounded-full ${
                step === 1 ? "bg-teal-600" : "bg-green-500"
              }`}
            ></div>
            <div
              className={`h-2 w-20 rounded-full ${
                step === 2 ? "bg-teal-600" : "bg-gray-200"
              }`}
            ></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form Section */}
          <div className="lg:col-span-2">
            <motion.div
              layout
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="bg-teal-600 p-6 text-white flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    {step === 1 ? (
                      <MapPin className="w-5 h-5" />
                    ) : (
                      <CreditCard className="w-5 h-5" />
                    )}
                    {step === 1 ? "Service Details" : "Payment Method"}
                  </h2>
                  <p className="text-teal-100 text-sm mt-1">
                    {step === 1
                      ? "Where and when do you need care?"
                      : "Secure encrypted transaction"}
                  </p>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                  Step {step} of 2
                </div>
              </div>

              <div className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Date & Time */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-teal-600" />{" "}
                            Service Date
                          </label>
                          <input
                            type="date"
                            className="w-full border-gray-300 rounded-xl shadow-sm focus:border-teal-500 focus:ring-teal-500 p-3 border bg-gray-50 text-gray-800"
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-teal-600" /> Duration
                            (Hours)
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="24"
                            defaultValue={4}
                            className="w-full border-gray-300 rounded-xl shadow-sm focus:border-teal-500 focus:ring-teal-500 p-3 border bg-gray-50 text-gray-800"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                duration: parseInt(e.target.value) || 0,
                              })
                            }
                          />
                        </div>
                      </div>

                      {/* Location */}
                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        <h3 className="font-semibold text-gray-900">
                          Location Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <select
                            className="w-full border border-gray-300 rounded-xl p-3 bg-gray-50 text-gray-800"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                division: e.target.value,
                              })
                            }
                          >
                            {DIVISIONS.map((d) => (
                              <option
                                className="text-gray-800"
                                key={d}
                                value={d}
                              >
                                {d}
                              </option>
                            ))}
                          </select>
                          <input
                            type="text"
                            placeholder="District / Area"
                            className="w-full border border-gray-300 rounded-xl p-3 bg-gray-50 text-gray-800"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                district: e.target.value,
                              })
                            }
                          />
                        </div>
                        <textarea
                          placeholder="Full Address (House No, Road No, Flat No)"
                          className="w-full border border-gray-300 rounded-xl p-3 h-24 bg-gray-50 resize-none text-gray-800"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>

                      <button
                        onClick={() => {
                          if (formData.date && formData.address) setStep(2);
                          else alert("Please fill in the date and address");
                        }}
                        className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-600 transition flex items-center justify-center gap-2"
                      >
                        Continue to Payment <ChevronRight className="w-5 h-5" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      onSubmit={handlePayment}
                      className="space-y-6"
                    >
                      <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5" />
                        <p className="text-sm text-blue-700">
                          Your payment is secured with 256-bit SSL encryption.
                          We do not store your card details.
                        </p>
                      </div>

                      {/* Fake Stripe Elements */}
                      <div className="space-y-4">
                        <div className="relative">
                          <label className="text-xs font-bold text-gray-500 uppercase ml-1 mb-1 block">
                            Card Number
                          </label>
                          <input
                            type="text"
                            placeholder="0000 0000 0000 0000"
                            className="w-full border border-gray-300 p-3 rounded-xl pl-12 font-mono text-gray-800"
                            disabled
                            value="4242 4242 4242 4242"
                          />
                          <CreditCard className="absolute left-4 top-9 text-gray-400 w-5 h-5" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1 mb-1 block">
                              Expiry
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full border border-gray-300 p-3 rounded-xl font-mono text-gray-800"
                              disabled
                              value="12/25"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1 mb-1 block ">
                              CVC
                            </label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full border border-gray-300 p-3 rounded-xl font-mono text-gray-800"
                              disabled
                              value="***"
                            />
                          </div>
                        </div>
                        <div className="relative">
                          <label className="text-xs font-bold text-gray-500 uppercase ml-1 mb-1 block">
                            Card Holder Name
                          </label>
                          <input
                            type="text"
                            placeholder="Name on Card"
                            className="w-full border border-gray-300 p-3 rounded-xl text-gray-900"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isProcessing}
                          className={`flex-2 py-4 rounded-xl font-bold text-white transition flex items-center justify-center gap-2 shadow-lg
                            ${
                              isProcessing
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-teal-600 hover:bg-teal-700"
                            }`}
                        >
                          {isProcessing ? (
                            <span className="flex items-center gap-2">
                              Processing...
                            </span>
                          ) : (
                            `Pay ৳${grandTotal}`
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Booking Summary</h3>

              <div className="space-y-3 text-sm text-gray-600 pb-4 border-b border-gray-100">
                <div className="flex justify-between">
                  <span>Service</span>
                  <span className="font-medium text-gray-900 text-right">
                    {service.title}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Rate</span>
                  <span className="font-medium text-gray-900">
                    ৳{service.pricePerHour}/hr
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="font-medium text-gray-900">
                    {formData.duration} Hours
                  </span>
                </div>
                {formData.date && (
                  <div className="flex justify-between">
                    <span>Date</span>
                    <span className="font-medium text-gray-900">
                      {formData.date}
                    </span>
                  </div>
                )}
              </div>

              <div className="py-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>৳{totalCost}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Platform Fee (5%)</span>
                  <span>৳{serviceFee}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-gray-900">Total</span>
                  <span className="font-bold text-2xl text-teal-600">
                    ৳{grandTotal}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
