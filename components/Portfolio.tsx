"use client";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
    title: "Royal Fashion",
    category: "AI Fashion",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
    title: "Saree Collection",
    category: "AI Fashion",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    title: "Product Visual",
    category: "AI Photography",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    title: "Luxury Editorial",
    category: "AI Fashion",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=85",
    title: "Traditional Elegance",
    category: "AI Fashion",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    title: "Premium Product",
    category: "AI Photography",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-yellow-400">
            <Sparkles size={14} />
            Selected Work
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Our
            <span className="text-yellow-500"> Portfolio</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A collection of AI-powered fashion, product and creative
            visuals crafted for modern brands.
          </p>

        </div>

        {/* Gallery */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] shadow-2xl"
              style={{
                animation: "portfolioReveal 0.8s ease-out both",
                animationDelay: `${index * 120}ms`,
              }}
            >

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full bg-black object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />

                {/* Gold Shine */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                {/* Category */}
                <div className="absolute left-5 top-5 rounded-full border border-yellow-500/30 bg-black/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-yellow-400 backdrop-blur-xl">
                  {item.category}
                </div>

                {/* View Button */}
                <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-[-10px] items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <p className="text-xs uppercase tracking-[3px] text-yellow-400">
                    Rudrakshi AI
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <a
                    href="#order"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                  >
                    Create Similar

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1"
                    />
                  </a>

                </div>

              </div>

              {/* Bottom Gold Line */}
              <div className="h-[2px] w-0 bg-yellow-500 transition-all duration-700 group-hover:w-full" />

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">

          <a
            href="#order"
            className="group inline-flex items-center gap-3 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-7 py-4 font-semibold text-yellow-400 transition-all duration-500 hover:-translate-y-1 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]"
          >
            Start Your Project

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>

      <style jsx>{`
        @keyframes portfolioReveal {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}