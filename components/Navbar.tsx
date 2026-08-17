"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0a0a0a] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Rudrakshi AI Design Logo"
                width={55}
                height={55}
                priority
                unoptimized
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-widest">
                  RUDRAKSHI
                </span>
                <span className="text-[11px] font-bold text-yellow-500 tracking-[0.2em]">
                  AI DESIGN
                </span>
              </div>
            </Link>
          </div>

          {/* Menu Button (Hamburger) */}
          <div className="flex items-center">
            <button
              className="text-gray-300 hover:text-white focus:outline-none p-2 border border-gray-700 rounded-md"
              aria-label="Menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}