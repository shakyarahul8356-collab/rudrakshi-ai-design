"use client";

import {
  ArrowUpRight,
  Quote,
  Star,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Fashion Brand Owner",
    text: "Rudrakshi AI transformed our product visuals completely. The AI fashion creatives look premium and professional.",
  },
  {
    id: 2,
    name: "Aarav Mehta",
    role: "E-commerce Founder",
    text: "The quality of the product images is amazing. We were able to create a complete campaign much faster than before.",
  },
  {
    id: 3,
    name: "Neha Rajput",
    role: "Fashion Creator",
    text: "The AI model visuals are beautiful and perfect for social media. The whole experience feels premium.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-yellow-500/[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-yellow-400">
            <Sparkles size={14} />
            Client Reviews
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            What Our
            <span className="text-yellow-500"> Clients Say</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Real feedback from brands and creators using
            AI-powered visual content.
          </p>

        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-8 transition-all duration-700 hover:-translate-y-3 hover:border-yellow-500/30"
              style={{
                animation: "testimonialReveal 0.8s ease-out both",
                animationDelay: `${index * 150}ms`,
              }}
            >

              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-[70px] transition duration-700 group-hover:opacity-100" />

              {/* Quote */}
              <div className="relative flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10">
                  <Quote
                    size={21}
                    className="text-yellow-400"
                  />
                </div>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className="fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

              </div>

              {/* Review */}
              <p className="relative mt-7 min-h-[130px] text-base leading-8 text-gray-300">
                “{item.text}”
              </p>

              {/* Divider */}
              <div className="my-7 h-px bg-white/10" />

              {/* Client */}
              <div className="relative flex items-center justify-between">

                <div>
                  <h3 className="font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10 text-sm font-bold text-yellow-400">
                  {item.name.charAt(0)}
                </div>

              </div>

              {/* Gold Line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] scale-x-0 bg-yellow-500 transition-transform duration-700 group-hover:scale-x-100" />

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">

          <a
            href="#order"
            className="group inline-flex items-center gap-3 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-7 py-4 font-semibold text-yellow-400 transition-all duration-500 hover:-translate-y-1 hover:bg-yellow-500 hover:text-black"
          >
            Create Your Visuals

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>

      <style jsx>{`
        @keyframes testimonialReveal {
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