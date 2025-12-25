"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/services", label: "Our Services" },
    { href: "/consultation", label: "Free Consultation" },
    { href: "/request-quote", label: "Request a Quote" },
    { href: "/contact", label: "About" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#223241] text-white fixed left-0 top-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between py-10 px-5 md:px-8">
        {/* Logo */}
        <Link href="/" className="z-50">
          <Image
            src="/Group.svg"
            alt="Materia Solutions"
            width={160}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href ? "text-blue-400 font-bold" : "text-white font-bold"
              } hover:text-blue-300 transition`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-3">
          <Link href="#"><FaLinkedinIn className="hover:text-blue-700 transition text-xl" /></Link>
          <Link href="#"><FaYoutube className="hover:text-red-700 transition text-xl" /></Link>
          <Link href="#"><FaFacebookF className="hover:text-blue-500 transition text-xl" /></Link>
          <Link href="#"><FaInstagram className="hover:text-pink-500 transition text-xl" /></Link>
          <Link href="#"><FaXTwitter className="hover:text-sky-400 transition text-xl" /></Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block absolute h-0.5 w-8 bg-white rounded transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`block absolute h-0.5 w-8 bg-white rounded transform transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block absolute h-0.5 w-8 bg-white rounded transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#223241] bg-gradient-to-b from-[#223241] to-[#1a2733] flex flex-col items-center justify-center gap-10 z-40"
          >

            {/* Links */}
            <div className="flex flex-col items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-2xl sm:text-3xl font-semibold transition hover:text-blue-300 ${
                    pathname === link.href ? "text-blue-400" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10">
              <Link href="#"><FaLinkedinIn className="hover:text-blue-700 transition text-2xl" /></Link>
              <Link href="#"><FaYoutube className="hover:text-red-700 transition text-2xl" /></Link>
              <Link href="#"><FaFacebookF className="hover:text-blue-500 transition text-2xl" /></Link>
              <Link href="#"><FaInstagram className="hover:text-pink-500 transition text-2xl" /></Link>
              <Link href="#"><FaXTwitter className="hover:text-sky-400 transition text-2xl" /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
