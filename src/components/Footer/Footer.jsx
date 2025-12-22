"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Baby Sitting", href: "/services/baby-sitting" },
        { name: "Elderly Care", href: "/services/elderly-care" },
        { name: "Sick Support", href: "/services/sick-support" },
        { name: "Special Needs", href: "/services/special-needs" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/" },
        { name: "Our Team", href: "/" },
        { name: "Careers", href: "/" },
        { name: "Blog", href: "/" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Safety & Security", href: "/" },
        { name: "Terms of Service", href: "/" },
        { name: "Privacy Policy", href: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-teal-600 p-2 rounded-lg group-hover:bg-teal-500 transition">
                <Heart className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">
                Care<span className="text-teal-400">.xyz</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Trusted by thousands of families in Bangladesh. We provide
              professional, secure, and compassionate care services at your
              doorstep.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -3, color: "#2dd4bf" }} // teal-400
                  className="bg-gray-800 p-3 rounded-full text-gray-400 hover:bg-gray-700 transition"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold mb-6 text-white">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-teal-400 transition"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="border-t border-gray-800 pt-10 pb-10 grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="bg-gray-800 p-3 rounded-full">
              <Phone className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Call Us</p>
              <p className="font-semibold text-white">+880 1712 345 678</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="bg-gray-800 p-3 rounded-full">
              <Mail className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email Us</p>
              <p className="font-semibold text-white">support@care.xyz</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="bg-gray-800 p-3 rounded-full">
              <MapPin className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Visit Us</p>
              <p className="font-semibold text-white">Banani, Dhaka-1213</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Care.xyz. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
