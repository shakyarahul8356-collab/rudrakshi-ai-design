"use client";

import {
  Image,
  Camera,
  Video,
  Sparkles,
  Palette,
  Wand2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "AI Fashion Design",
    description:
      "Premium AI fashion visuals, model styling, traditional wear and luxury campaign creatives.",
    icon: Sparkles,
    number: "01",
  },
  {
    title: "AI Product Photography",
    description:
      "Turn your product images into premium studio-quality visuals without expensive photography.",
    icon: Camera,
    number: "02",
  },
  {
    title: "AI Video Creation",
    description:
      "Cinematic AI videos, product reels, fashion campaigns and social media content.",
    icon: Video,
    number: "03",
  },
  {
    title: "AI Image Generation",
    description:
      "Create unique characters, concepts, advertisements and creative visuals with AI.",
    icon: Image,
    number: "04",
  },
  {
    title: "Brand Creative Design",
    description:
      "Premium social media creatives, advertisements, posters and complete visual branding.",
    icon: Palette,
    number: "05",
  },
  {
    title: "Creative AI Editing",
    description:
      "Professional AI-powered editing, enhancement, retouching and visual transformation.",
    icon: Wand2,
    number: "06",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-yellow-400">
            <Sparkles size={14} />
            What We Create
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Our
            <span className="text-yellow-500"> Services</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            From fashion visuals to cinematic AI videos, we create
            premium digital experiences designed to make your brand stand out.
          </p>

        </div>

        {/* Service Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7 transition-all duration-700 hover:-translate-y-3 hover:border-yellow-500/30 hover:bg-yellow-500/[0.035] hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]"
                style={{
                  animation: "serviceReveal 0.7s ease-out both",
                  animationDelay: `${index * 100}ms`,
                }}
              >

                {/* Gold Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-[70px] transition duration-700 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute right-6 top-6 text-xs font-bold tracking-[3px] text-white/10 transition duration-500 group-hover:text-yellow-500/30">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-yellow-500/40 group-hover:bg-yellow-500/15">
                  <Icon
                    size={25}
                    className="text-yellow-400"
                  />
                </div>

                {/* Content */}
                <div className="relative">

                  <h3 className="mt-7 text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                    {service.description}
                  </p>

                </div>

                {/* Bottom CTA */}
                <a
                  href="#order"
                  className="group/link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors duration-300 hover:text-yellow-400"
                >
                  Start Project

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                  />
                </a>

                {/* Bottom Gold Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-700 group-hover:w-full" />

              </div>
            );
          })}

        </div>

      </div>

      <style jsx>{`
        @keyframes serviceReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}