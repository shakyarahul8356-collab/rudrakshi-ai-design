"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "918273018692";

  const message = encodeURIComponent(
    "Hello Rudrakshi AI Design, I want to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-sm font-bold text-white shadow-[0_10px_35px_rgba(34,197,94,0.35)] transition-all duration-300 hover:scale-105 hover:bg-green-400 sm:px-6"
    >
      <MessageCircle size={22} />

      <span className="hidden sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}