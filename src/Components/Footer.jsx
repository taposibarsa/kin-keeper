"use client";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          KeenKeeper
        </h2>

        {/* Subtitle */}
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mt-8">
          <p className="text-sm mb-3">Social Links</p>

          <div className="flex justify-center gap-4">
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FiYoutube />
            </div>

            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FiFacebook />
            </div>

            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FiTwitter />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 gap-4">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;