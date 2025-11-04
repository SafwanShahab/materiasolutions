"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/services", label: "Services" },
    { href: "/booking", label: "Booking" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/request-quote", label: "Request a Quote" },

  ];

  return (
<nav className="bg-[#223241] text-white fixed top-0 left-0 w-full z-50 py-8 px-8">
    <div className="flex items-center justify-between w-full">
      {/* Logo all the way on the left */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/MSLogo.png"
          alt="Materia Solutions"
          width={200}
          height={60}
          className="object-contain h-12 w-auto cursor-pointer"
          
          
          priority
        />
      </Link>

      {/* Links all the way on the right */}
      <div className="flex gap-8">
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
    </div>
  </nav>
);}