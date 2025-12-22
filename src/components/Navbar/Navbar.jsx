"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X, LayoutDashboard, LogOut, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, height: 0, y: -20 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const linkHover = { scale: 1.05, color: "#0d9488" }; // teal-600

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
            >
              <div className="bg-teal-600 p-2 rounded-lg mr-2">
                <Heart className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-gray-800">
                Care<span className="text-teal-600">.xyz</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/">
              <motion.span
                whileHover={linkHover}
                className={`font-medium cursor-pointer ${
                  pathname === "/" ? "text-teal-600" : "text-gray-600"
                }`}
              >
                Home
              </motion.span>
            </Link>
            <Link href="/services">
              <motion.span
                whileHover={linkHover}
                className={`font-medium cursor-pointer ${
                  pathname === "/services" ? "text-teal-600" : "text-gray-600"
                }`}
              >
                Services
              </motion.span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/my-bookings">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-600 hover:text-teal-600 font-medium"
                >
                  My Bookings
                </motion.button>
              </Link>

              <Link href="/admin">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-600 hover:text-teal-600 flex items-center"
                >
                  <LayoutDashboard className="w-4 h-4 mr-1" /> Admin
                </motion.button>
              </Link>

              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-teal-700 flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {/* {user.name} */}
                </span>
                <motion.button
                  whileHover={{ scale: 1.2, color: "#ef4444" }}
                  // onClick={handleLogout}
                  className="text-red-500"
                >
                  <LogOut className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            <div className="space-x-4 flex items-center">
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-teal-600 font-medium"
                >
                  Login
                </motion.button>
              </Link>
              <Link href="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition shadow-md"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <motion.span
                  whileHover={{ x: 5 }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                >
                  Home
                </motion.span>
              </Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                <motion.span
                  whileHover={{ x: 5 }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                >
                  Services
                </motion.span>
              </Link>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Link href="/admin" onClick={() => setIsMenuOpen(false)}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition items-center"
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" /> Admin Dashboard
                  </motion.span>
                </Link>

                <Link href="/my-bookings" onClick={() => setIsMenuOpen(false)}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                  >
                    My Bookings
                  </motion.span>
                </Link>

                <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">
                      {/* {user.name.charAt(0)} */}
                    </div>
                    <span className="font-semibold text-gray-800"></span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center"
                  >
                    Logout <LogOut className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-center px-4 py-3 border border-teal-600 text-teal-600 rounded-xl font-bold hover:bg-teal-50 transition"
                  >
                    Login
                  </motion.button>
                </Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-center px-4 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
