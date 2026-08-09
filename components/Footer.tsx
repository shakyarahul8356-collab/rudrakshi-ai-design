"use client";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const services = [
  "AI Fashion Design",
  "AI Product Photography",
  "AI Video Creation",
  "AI Image Generation",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303] px-6 pt-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/30 bg-yellow-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:bg-yellow-500">
                <Sparkles
                  size={22}
                  className="text-yellow-400 transition group-hover:text-black"
                />
              </div>

              <div>
                <p className="text-base font-black tracking-[3px] text-white">
                  RUDRAKSHI
                </p>

                <p className="text-[9px] font-bold uppercase tracking-[4px] text-yellow-500">
                  AI DESIGN
                </p>
              </div>
            </a>

            <p className="mt-7 max-w-md text-sm leading-8 text-gray-500">
              Premium AI-powered fashion, product photography,
              video and creative visual solutions for modern brands.
            </p>

            {/* Social */}
            <div className="mt-7 flex gap-3">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-yellow-500 hover:text-black"
              >
                <Sparkles size={18} />
              </a>

              <a
                href="https://wa.me/918273018692"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-yellow-500 hover:text-black"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="mailto:shakyarahul8356@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-yellow-500 hover:text-black"
              >
                <Mail size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[3px] text-yellow-500">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">

              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-yellow-500 transition-all duration-300 group-hover:w-4" />
                  {link.name}
                </a>
              ))}

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[3px] text-yellow-500">
              Services
            </h3>

            <div className="mt-6 space-y-4">

              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="group flex items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-yellow-500 transition-all duration-300 group-hover:w-4" />
                  {service}
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* Contact Bar */}
        <div className="grid gap-4 border-y border-white/10 py-7 sm:grid-cols-3">

          <a
            href="tel:+918273018692"
            className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-yellow-500/20"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
              <Phone size={17} className="text-yellow-400" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-600">
                Call
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                +91 82730 18692
              </p>
            </div>
          </a>

          <a
            href="mailto:shakyarahul8356@gmail.com"
            className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-yellow-500/20"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
              <Mail size={17} className="text-yellow-400" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-widest text-gray-600">
                Email
              </p>

              <p className="mt-1 truncate text-sm font-semibold text-white">
                shakyarahul8356@gmail.com
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
              <MapPin size={17} className="text-yellow-400" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-600">
                Location
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Indore, Madhya Pradesh
              </p>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Rudrakshi AI Design. All rights reserved.
          </p>

          <a
            href="#order"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-yellow-500 transition-colors hover:text-yellow-400"
          >
            Start Your Project

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </footer>
  );
}