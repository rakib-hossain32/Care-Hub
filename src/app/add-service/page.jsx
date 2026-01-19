"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { PlusCircle, Loader2, Image as ImageIcon, Tag, Hash, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const AddService = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        features: '',
    });

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-teal-600 animate-spin" />
            </div>
        );
    }

    if (!session) {
        router.push("/login?callbackUrl=/add-service");
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const serviceData = {
            ...formData,
            price: Number(formData.price),
            features: formData.features.split(',').map(f => f.trim()),
            addedBy: session.user.email,
            createdAt: new Date()
        };

        try {
            const res = await fetch("https://care-backend-lime.vercel.app/services", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(serviceData)
            });

            if (res.ok) {
                toast.success("Service added successfully!");
                router.push("/");
            }
        } catch (error) {
            console.error("Failed to add service:", error);
            toast.error("Failed to add service. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-32 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
                >
                    <div className="p-8 sm:p-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center">
                                <PlusCircle className="w-6 h-6 text-teal-600" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-black text-gray-900 leading-none">Add New Service</h1>
                                <p className="text-gray-400 mt-2 font-medium">List your professional care services</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Service Title</label>
                                <div className="relative group">
                                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600" />
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium"
                                        placeholder="e.g. Professional Baby Care"
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Price (৳/hr)</label>
                                    <div className="relative group">
                                        <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600" />
                                        <input
                                            type="number"
                                            required
                                            className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium"
                                            placeholder="500"
                                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Features (Comma separated)</label>
                                <div className="relative group">
                                    <CheckCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600" />
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium"
                                        placeholder="Feeding, Diaper change, Playing"
                                        onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Description</label>
                                <div className="relative group">
                                    <FileText className="absolute left-4 top-6 w-5 h-5 text-gray-400 group-focus-within:text-teal-600" />
                                    <textarea
                                        required
                                        rows="4"
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium resize-none"
                                        placeholder="Describe the service details..."
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-teal-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-teal-700 transition shadow-[0_20px_40px_-10px_rgba(13,148,136,0.3)] flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Create Service"}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AddService;
