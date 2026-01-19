"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        q: "How do you verify your caretakers?",
        a: "Our verification process includes NID/Passport verification, criminal background checks, previous employment reference calls, and a mandatory in-person skills assessment."
    },
    {
        q: "What happens if I'm not happy with a service?",
        a: "We offer a 100% satisfaction guarantee. If you are not satisfied with your caretaker, we will arrange a replacement within 24 hours at no extra cost to you."
    },
    {
        q: "Is there a minimum booking time?",
        a: "Yes, our minimum booking for most services is 4 hours per day. However, we also offer 24/7 full-time care packages for long-term needs."
    },
    {
        q: "How do I pay for the services?",
        a: "You can pay securely through our platform using Bkash, Rocket, Nagad, or any major credit/debit card. We provide automated invoices for every transaction."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6">
                        <HelpCircle className="w-4 h-4 text-teal-500" />
                        <span className="text-sm font-black uppercase tracking-widest text-gray-500">Support Center</span>
                    </div>
                    <h2 className="text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full p-6 text-left flex items-center justify-between gap-4"
                            >
                                <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
