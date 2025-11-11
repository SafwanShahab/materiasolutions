import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#223241] text-white py-10 px-6 md:px-16">
      {/* === Footer Container === */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* === Left Section === */}
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/Group.svg" alt="Materia Solutions Logo" width={200} height={100} />
          </div>

          {/* Terms & Privacy */}
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-300"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn size={18} /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter size={18} /></a>
          </div>

          {/* Contact Info */}
          <div className="text-gray-300">
            <p>
              Email:{" "}
              <a href="mailto:info@materiasolutions.com" className="hover:underline">
                info@materiasolutions.com
              </a>
            </p>
            <p>Phone: (000) 000-0000</p>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 mt-4 text-sm">
            © Materia Solutions. All rights reserved.
          </p>
        </div>

        {/* === Right Section === */}
        <div className="flex flex-col justify-between w-full md:w-1/2">
          {/* Site Links */}
          <div className="flex flex-wrap gap-6 md:justify-end">
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Booking</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-left mt-6 md:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

      </div>
    </footer>
  );
}
