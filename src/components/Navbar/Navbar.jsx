"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Menu,
  X,
  LayoutDashboard,
  LogOut,
  User as UserIcon,
  ChevronDown,
  ShoppingBag,
} from "lucide-react";
import AuthButton from "../AuthButton/AuthButton";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  // Scroll handler for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  const [dbServices, setDbServices] = useState([]);

  useEffect(() => {
    fetch("https://care-backend-lime.vercel.app/services")
      .then(res => res.json())
      .then(data => setDbServices(data))
      .catch(err => console.error("Nav fetch failed:", err));
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesLinks = dbServices.map(s => ({
    name: s.title,
    href: `/services/${s._id}`,
    desc: s.description.substring(0, 30) + "..."
  }));

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${isScrolled
        ? "py-3 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border-b border-white/20"
        : "py-5 bg-white border-b border-gray-50"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="bg-linear-to-tr from-teal-600 to-emerald-400 p-2.5 rounded-2xl shadow-lg shadow-teal-500/20"
            >
              <Heart className="text-white w-6 h-6" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-gray-900 leading-none tracking-tight">
                Care<span className="text-teal-600">.xyz</span>
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Premium Care</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${pathname === link.href
                  ? "text-teal-600 bg-teal-50"
                  : "text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${pathname.startsWith("/services")
                  ? "text-teal-600 bg-teal-50"
                  : "text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                  }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-2 overflow-hidden"
                  >
                    <div className="grid gap-1">
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex flex-col p-3 rounded-xl hover:bg-teal-50 group transition-colors"
                        >
                          <span className="text-sm font-bold text-gray-900 group-hover:text-teal-600">{service.name}</span>
                          <span className="text-xs text-gray-500">{service.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Buttons / Auth */}
          <div className="hidden md:flex items-center gap-4">
            {
              session && (
                <> <Link href="/add-service" className="px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:text-teal-600 hover:bg-gray-50 transition-all">
                  Add Service
                </Link>
                  <Link href="/my-bookings" className="relative p-2 text-gray-400 hover:text-teal-600 transition-colors group">
                    <ShoppingBag className="w-6 h-6" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-teal-500 rounded-full border-2 border-white" />
                  </Link>
                  <div className="h-6 w-px bg-gray-200 mx-1" /></>
              )
            }
            <AuthButton />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button className="md:hidden p-2 text-gray-400">
              <ShoppingBag className="w-6 h-6" />
            </button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 bg-gray-50 text-gray-900 rounded-2xl lg:hidden border border-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-[-1]"
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-4 right-4 mt-2 lg:hidden bg-white/95 backdrop-blur-2xl rounded-4xl shadow-2xl border border-white/20 overflow-hidden"
            >
              <div className="p-6 space-y-6">
                <div className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-6 py-4 rounded-2xl text-lg font-bold transition-all ${pathname === link.href
                        ? "bg-teal-600 text-white shadow-xl shadow-teal-500/20"
                        : "text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="px-6 text-xs font-black uppercase tracking-widest text-teal-600">Our Services</p>
                  <div className="grid grid-cols-1 gap-2 px-6">
                    {servicesLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="px-6 py-4 bg-gray-50/50 rounded-2xl hover:bg-teal-50 group flex items-center justify-between"
                      >
                        <span className="font-bold text-gray-900 group-hover:text-teal-600">{service.name}</span>
                        <ChevronDown className="w-4 h-4 -rotate-90 text-gray-300" />
                      </Link>
                    ))}
                  </div>
                </div>

                {
                  session ? <button
                    onClick={() => signOut()}
                    className="py-5 text-gray-400 hover:text-red-600 transition-all hover:bg-red-50 rounded-lg w-full cursor-pointer flex items-center justify-center"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button> : <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                    <Link
                      href="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center py-4 rounded-2xl font-bold text-gray-600 bg-gray-50"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center py-4 rounded-2xl font-bold text-white bg-teal-600 shadow-xl shadow-teal-500/20"
                    >
                      Join Now
                    </Link>
                  </div>
                }
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
