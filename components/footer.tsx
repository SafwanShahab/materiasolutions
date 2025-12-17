import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

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



          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-2">
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn size={18} /></a>
            <a href="#" className="hover:text-red-700"><FaYoutube size={18} /></a>
            <a href="#" className="hover:text-blue-500"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-sky-400"><FaXTwitter size={18} /></a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 mt-4 text-sm">
            © 2025 Materia Solutions. All rights reserved.
          </p>
        </div>

        {/* === Right Section === */}
        <div className="flex flex-col justify-between w-full md:w-1/2 md:mt-3">
          {/* Site Links */}
          <div className="flex flex-wrap gap-10 md:justify-left text-lg">
            
          </div>

          {/* Description */}
          <div className="flex flex-col space-y-1 text-gray-300 text-sm leading-relaxed max-w-lg mt-8">
            <a href="#" className="hover:underline">
              Privacy Policy – We respect your privacy and handle all personal and project information in accordance with applicable regulations.
            </a>
            <a href="#" className="hover:underline">
              Terms of Use – By using this website, you agree to our terms and conditions regarding content and services.
            </a>
           
          </div>
        </div>

      </div>
    </footer>
  );
}
