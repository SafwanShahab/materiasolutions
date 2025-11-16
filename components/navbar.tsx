"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/services", label: "Services" },
    { href: "/booking", label: "Booking" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },

  ];

  return (
    <nav className="bg-[#223241] text-white fixed left-0 w-full py-6 px-8 z-50">
      <div className="font-bold flex items-center justify-between w-full">

        {/* Left: Logo */}
        <Link href="/">
          <Image
            src="/Group.svg"
            alt="Materia Solutions"
            width={200}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Center: Links */}
        <div className="flex gap-8 justify-center flex-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-blue-400 font-semibold"
                  : "text-white"
              } hover:text-blue-300 transition`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Social icons above button */}
        <div className="flex flex-col items-end gap-2">
          {/* Social Icons */}
          <div className="flex gap-3 mb-1">
            <Link href="#"><FaFacebookF className="hover:text-blue-500 transition" /></Link>
            <Link href="#"><FaInstagram className="hover:text-pink-500 transition" /></Link>
            <Link href="#"><FaLinkedinIn className="hover:text-blue-700 transition" /></Link>
            <Link href="#"><FaXTwitter className="hover:text-sky-400 transition" /></Link>
          </div>

          {/* Request a Quote button */}
          <Link
            href="/request-quote"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold transition"
          >
            Request a Quote
          </Link>
        </div>

          


      </div>
    </nav>
  );
}
