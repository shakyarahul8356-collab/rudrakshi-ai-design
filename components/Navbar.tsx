"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center transition-all duration-500 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Rudrakshi AI Design logo"
              width={56}
              height={56}
              className="h-full w-full object-contain"
              priority
              unoptimized
            />
          </div>

          <div>
            <p className="text-sm font-black tracking-[3px] text-white">RUDRAKSHI</p>

            <p className="text-[8px] font-bold uppercase tracking-[4px] text-yellow-500">
              AI DESIGN
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-yellow-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#order"
          className="group hidden items-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] lg:inline-flex"
        >
          Start Project

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-yellow-500/30 hover:text-yellow-400 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-500 lg:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 py-5">

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold text-gray-300 transition-all duration-300 hover:bg-yellow-500/10 hover:text-yellow-400"
              >
                {link.name}

                <ArrowUpRight size={17} />
              </a>
            ))}
          </div>

          <a
            href="#order"
            onClick={closeMenu}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-4 font-bold text-black transition-all duration-300 hover:bg-yellow-400"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </a>

        </nav>
      </div>
    </header>
  );
}