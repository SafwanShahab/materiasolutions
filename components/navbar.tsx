"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/services", label: "Our Services" },
    { href: "/contact", label: "About" },
    { href: "/consultation", label: "Free Consultation" },
    { href: "/request-quote", label: "Request a Quote" },
  ];

  return (
    <nav className="bg-[#223241] text-white fixed left-0 w-full py-8 px-8 z-50">
      <div className="relative flex items-center justify-between w-full">

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

        {/* Center: Links perfectly centered */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-blue-400 font-bold"
                  : "text-white font-bold"
              } hover:text-blue-300 transition`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Social icons + button */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-3 mb-1">
            <Link href="#"><FaLinkedinIn className="hover:text-blue-700 transition" /></Link>
            <Link href="#"><FaYoutube className="hover:text-red-700 transition" /></Link>
            <Link href="#"><FaFacebookF className="hover:text-blue-500 transition" /></Link>
            <Link href="#"><FaInstagram className="hover:text-pink-500 transition" /></Link>
            <Link href="#"><FaXTwitter className="hover:text-sky-400 transition" /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
