"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
    Heart,
    Baby,
    User,
    Stethoscope,
    Sparkles,
    CheckCircle,
    ArrowLeft,
    Shield,
    Star,
    Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

const getIcon = (type) => {
    switch (type?.toLowerCase()) {
        case "baby care":
            return <Baby className="w-32 h-32 text-teal-600" />;
        case "elderly care":
            return <User className="w-32 h-32 text-teal-600" />;
        case "sick care":
        case "sick people care":
            return <Stethoscope className="w-32 h-32 text-teal-600" />;
        default:
            return <Sparkles className="w-32 h-32 text-teal-600" />;
    }
};

const ServiceDetails = () => {
    const { service_id } = useParams();
    const { data: session } = useSession();
    const router = useRouter();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bookingLoading, setBookingLoading] = useState(false);

    useEffect(() => {
        if (service_id) {
            fetch(`https://care-backend-lime.vercel.app/services/${service_id}`)
                .then((res) => {
                    if (!res.ok) throw new Error("Not Found");
                    return res.json();
                })
                .then((data) => {
                    setService(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setService(null);
                    setLoading(false);
                });
        }
    }, [service_id]);

    const handleBooking = async () => {
        if (!session) {
            router.push("/login");
            return;
        }

        setBookingLoading(true);
        const bookingData = {
            serviceId: service._id,
            serviceTitle: service.title,
            price: service.price,
            userEmail: session.user.email,
            userName: session.user.name,
            bookedAt: new Date(),
            status: "pending",
        };

        try {
            const res = await fetch("https://care-backend-lime.vercel.app/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData),
            });

            if (res.ok) {
                router.push("/my-bookings");
            }
        } catch (error) {
            console.error("Booking failed:", error);
        } finally {
            setBookingLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <Loader2 className="w-12 h-12 text-teal-600 animate-spin" />
            </div>
        );
    }

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Service not found</h2>
                    <Link href="/services" className="text-teal-600 font-bold hover:underline">
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
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
                        <div className="bg-teal-50 p-12 flex flex-col items-center justify-center relative">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-8 rounded-full shadow-lg mb-6"
                            >
                                {getIcon(service.title)}
                            </motion.div>

                            <div className="flex gap-4 mt-4">
                                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-teal-800 font-semibold">
                                    <Shield className="w-4 h-4" /> Verified
                                </div>
                                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-orange-700 font-semibold">
                                    <Star className="w-4 h-4 fill-orange-500 text-orange-500" />{" "}
                                    {service.rating || 4.5} ({service.reviews || 0} Reviews)
                                </div>
                            </div>
                        </div>

                        <div className="p-10 md:p-14 flex flex-col justify-center">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-4xl font-bold text-gray-900 mb-6"
                            >
                                {service.title}
                            </motion.h1>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-8">
                                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-teal-500" /> What&#39;s Included:
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {(service.features || []).map((f, index) => (
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

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-100">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                                        Service Charge
                                    </p>
                                    <p className="text-4xl font-bold text-teal-700 mt-1">
                                        ৳{service.price}
                                        <span className="text-lg text-gray-400 font-normal ml-1">
                                            /hour
                                        </span>
                                    </p>
                                </div>

                                <div className="w-full sm:w-auto">
                                    <motion.button
                                        onClick={handleBooking}
                                        disabled={bookingLoading}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-teal-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 shadow-lg hover:shadow-teal-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                                    >
                                        {bookingLoading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            "Add Booking"
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
