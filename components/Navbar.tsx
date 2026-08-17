"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Rudrakshi AI Design"
        >
          {/* Logo Image */}
          <div className="relative h-20 w-20 shrink-0">
            <Image
              src="/logo.png"
              alt="Rudrakshi AI Design Logo"
              fill
              priority
              sizes="80px"
              className="object-contain"
            />
          </div>

          {/* Logo Text */}
          <div className="flex flex-col justify-center">
            <span className="text-xl font-extrabold tracking-wide text-white sm:text-2xl">
              RUDRAKSHI
            </span>

            <span className="text-xs font-semibold tracking-[0.3em] text-purple-300 sm:text-sm">
              AI DESIGN
            </span>

            <span className="mt-1 text-[9px] tracking-[0.2em] text-gray-400 sm:text-[10px]">
              DESIGN • CREATE • INSPIRE
            </span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-white transition hover:text-purple-300"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-white transition hover:text-purple-300"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="text-sm font-medium text-white transition hover:text-purple-300"
          >
            Portfolio
          </a>

          <a
            href="#pricing"
            className="text-sm font-medium text-white transition hover:text-purple-300"
          >
            Pricing
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-white transition hover:text-purple-300"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105 md:block"
        >
          Get Started
        </a>

      </div>
    </header>
  );
}