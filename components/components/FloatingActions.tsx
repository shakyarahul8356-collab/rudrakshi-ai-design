"use client";

import { useEffect, useState } from "react";
import {
  MessageCircle,
  ArrowUp,
  X,
} from "lucide-react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918273018692?text=Hello%20Rudrakshi%20AI%20Design%2C%20I%20want%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(37,211,102,0.25)] transition-all duration-500 hover:scale-110 sm:bottom-7 sm:right-7"
      >
        <MessageCircle size={25} />

        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full border border-white/10 bg-black/90 px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Chat on WhatsApp
        </span>

        {/* Pulse */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
      </a>

      {/* Scroll To Top */}
      {showTop && (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/30 bg-black/80 text-yellow-400 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-yellow-500 hover:text-black sm:bottom-24 sm:right-7"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}