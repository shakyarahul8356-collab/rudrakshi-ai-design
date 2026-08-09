"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pb-20 pt-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-yellow-500/[0.07] blur-[170px]" />

        <div className="absolute left-[5%] top-[20%] h-32 w-32 rounded-full bg-yellow-500/[0.05] blur-[80px]" />

        <div className="absolute bottom-[10%] right-[5%] h-48 w-48 rounded-full bg-yellow-500/[0.05] blur-[100px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <div className="mx-auto flex w-fit animate-[fadeUp_0.7s_ease-out] items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-yellow-400 lg:mx-0">
            <Sparkles size={14} />
            AI Creative Studio
          </div>

          {/* Heading */}
          <h1 className="mt-7 animate-[fadeUp_0.9s_ease-out] text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Create.
            <br />

            <span className="text-yellow-500">
              Imagine.
            </span>

            <br />

            <span className="text-white">
              Inspire.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-xl animate-[fadeUp_1.1s_ease-out] text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
            We transform ideas into premium AI-powered fashion,
            photography, video and visual experiences.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex animate-[fadeUp_1.3s_ease-out] flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            <a
              href="#order"
              className="group flex items-center justify-center gap-3 rounded-full bg-yellow-500 px-7 py-4 font-bold text-black transition-all duration-500 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[0_0_45px_rgba(234,179,8,0.25)]"
            >
              Start Your Project

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </a>

            <a
              href="#portfolio"
              className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-yellow-500/[0.05]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition group-hover:border-yellow-500/40">
                <Play
                  size={12}
                  className="ml-0.5 fill-current text-yellow-400"
                />
              </span>

              View Our Work
            </a>

          </div>

          {/* Stats */}
          <div className="mt-12 flex animate-[fadeUp_1.5s_ease-out] flex-wrap justify-center gap-8 border-t border-white/10 pt-8 lg:justify-start">

            <div>
              <p className="text-2xl font-bold text-white">
                100+
              </p>

              <p className="mt-1 text-xs uppercase tracking-widest text-gray-600">
                Projects
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-bold text-white">
                50+
              </p>

              <p className="mt-1 text-xs uppercase tracking-widest text-gray-600">
                Clients
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-bold text-white">
                24/7
              </p>

              <p className="mt-1 text-xs uppercase tracking-widest text-gray-600">
                Creative
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-xl animate-[heroImage_1.2s_ease-out]">

          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-yellow-500/10 blur-[100px]" />

          {/* Main Card */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-2xl backdrop-blur-xl">

            {/* Decorative circles */}
            <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-yellow-500/20" />

            <div className="absolute bottom-10 right-8 h-28 w-28 rounded-full border border-yellow-500/10" />

            {/* Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

              <div className="flex h-24 w-24 animate-[float_4s_ease-in-out_infinite] items-center justify-center rounded-[30px] border border-yellow-500/30 bg-yellow-500/10 shadow-[0_0_50px_rgba(234,179,8,0.12)]">
                <Sparkles
                  size={42}
                  className="text-yellow-400"
                />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[5px] text-yellow-500">
                Rudrakshi
              </p>

              <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
                AI Design
              </h2>

              <p className="mt-5 max-w-xs text-sm leading-7 text-gray-500">
                Where creativity meets artificial intelligence.
              </p>

            </div>

            {/* Bottom glass */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs text-gray-500">
                    Creative Intelligence
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Next Generation Visuals
                  </p>
                </div>

                <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.8)]" />

              </div>

            </div>

          </div>

          {/* Floating badge */}
          <div className="absolute -left-5 top-20 hidden animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">

            <p className="text-[10px] uppercase tracking-widest text-gray-500">
              Powered By
            </p>

            <p className="mt-1 font-bold text-yellow-400">
              AI + Creativity
            </p>

          </div>

          <div className="absolute -right-5 bottom-28 hidden animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">

            <p className="text-[10px] uppercase tracking-widest text-gray-500">
              Experience
            </p>

            <p className="mt-1 font-bold text-white">
              Premium Visuals
            </p>

          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroImage {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(30px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
}{/* RIGHT VISUAL */}
<div className="relative mx-auto w-full max-w-xl animate-[heroImage_1.2s_ease-out]">

  {/* Main Glow */}
  <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-yellow-500/10 blur-[120px]" />

  {/* Main Image Card */}
  <div className="group relative aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 bg-black shadow-2xl">

    <img
      src="/images/fashion-01.jpg"
      alt="Premium AI Fashion Design"
      className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
    />

    {/* Image Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

    {/* Gold Shine */}
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

    {/* Top Badge */}
    <div className="absolute left-5 top-5 rounded-full border border-yellow-500/30 bg-black/60 px-4 py-2 text-xs font-semibold text-yellow-400 backdrop-blur-xl">
      AI FASHION
    </div>

    {/* Bottom Content */}
    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl">

      <p className="text-[10px] uppercase tracking-[4px] text-yellow-500">
        Premium Visual
      </p>

      <h3 className="mt-2 text-2xl font-bold text-white">
        Fashion Reimagined
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        AI-powered fashion photography & creative design.
      </p>

    </div>

  </div>

  {/* Floating Small Image */}
  <div className="absolute -bottom-8 -left-8 hidden h-36 w-28 rotate-[-6deg] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl sm:block">

    <img
      src="/images/saree-01.jpg"
      alt="AI Saree Design"
      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
    />

  </div>

  {/* Floating Product Image */}
  <div className="absolute -right-8 top-16 hidden h-36 w-28 rotate-[6deg] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl sm:block">

    <img
      src="/images/product-01.jpg"
      alt="AI Product Design"
      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
    />

  </div>

  {/* Floating Badge */}
  <div className="absolute -right-4 bottom-24 hidden animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-yellow-500/20 bg-black/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">

    <p className="text-[10px] uppercase tracking-widest text-gray-500">
      Creative Power
    </p>

    <p className="mt-1 font-bold text-yellow-400">
      AI + Design
    </p>

  </div>

</div>