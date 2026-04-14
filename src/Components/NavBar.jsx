"use client";
import Link from "next/link";
import { FiHome, FiClock, FiBarChart2 } from "react-icons/fi";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Timeline", path: "/timeline", icon: <FiClock /> },
    { name: "Stats", path: "/stats", icon: <FiBarChart2 /> },
  ];

  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className=" mx-auto flex items-center justify-between px-20 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-semibold text-black">
          Keen <span className="text-[#244D3F]">Keeper</span> 
        </div>

        {/* Nav */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;