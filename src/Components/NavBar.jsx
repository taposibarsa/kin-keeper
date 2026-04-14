"use client";
import Link from "next/link";
import { FiHome, FiClock, FiBarChart2, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Timeline", path: "/timeline", icon: <FiClock /> },
    { name: "Stats", path: "/stats", icon: <FiBarChart2 /> },
  ];

  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-800">
          KeenKeeper
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
                pathname === link.path
                  ? "bg-green-700 text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
                  pathname === link.path
                    ? "bg-green-700 text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;