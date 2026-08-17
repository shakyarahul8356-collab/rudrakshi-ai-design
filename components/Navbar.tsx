"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Rudrakshi AI Design Home"
        >
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full">
            <Image
              src="/logo.png"
              alt="Rudrakshi AI Design Logo"
              width={120}
              height={120}
              priority
              className="h-full w-full object-contain"
            />
          </div>

          <div className="hidden sm:block">
            <div className="text-lg font-bold leading-tight text-white">
              RUDRAKSHI
            </div>

            <div className="text-xs font-medium tracking-[0.25em] text-purple-300">
              AI DESIGN
            </div>

            <div className="text-[9px] tracking-wider text-gray-400">
              DESIGN • CREATE • INSPIRE
            </div>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
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
          className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
        >
          Get Started
        </a>

      </div>
    </header>
  );
}