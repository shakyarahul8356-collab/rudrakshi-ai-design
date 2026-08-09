"use client";

import {
  Check,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    description: "Perfect for small businesses and simple AI creatives.",
    features: [
      "5 AI Images",
      "1 Product Creative",
      "Basic Retouching",
      "Social Media Ready",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹7,999",
    description: "A complete AI creative package for growing brands.",
    features: [
      "15 AI Images",
      "5 Product Creatives",
      "AI Fashion Model",
      "Premium Retouching",
      "Social Media Creatives",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹14,999",
    description: "Luxury AI content production for premium brands.",
    features: [
      "30 AI Images",
      "10 Product Creatives",
      "AI Fashion Campaign",
      "Cinematic AI Video",
      "Advanced Retouching",
      "Premium Brand Creative",
      "Priority Support",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-yellow-400">
            <Sparkles size={14} />
            Simple Pricing
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Choose Your
            <span className="text-yellow-500"> Plan</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Flexible AI creative packages designed for businesses,
            creators and premium brands.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative rounded-[32px] border p-8 transition-all duration-700 hover:-translate-y-3 ${
                plan.popular
                  ? "border-yellow-500/50 bg-yellow-500/[0.06] shadow-[0_25px_80px_rgba(234,179,8,0.10)]"
                  : "border-white/10 bg-white/[0.025] hover:border-yellow-500/30"
              }`}
              style={{
                animation: "pricingReveal 0.7s ease-out both",
                animationDelay: `${index * 150}ms`,
              }}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-500 px-5 py-2 text-xs font-black uppercase tracking-[2px] text-black shadow-[0_0_25px_rgba(234,179,8,0.3)]">
                  Most Popular
                </div>
              )}

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-[70px] transition duration-700 group-hover:opacity-100" />

              {/* Plan */}
              <div className="relative">

                <p className="text-sm font-bold uppercase tracking-[3px] text-yellow-400">
                  {plan.name}
                </p>

                <h3 className="mt-5 text-4xl font-black text-white">
                  {plan.price}
                </h3>

                <p className="mt-4 min-h-[56px] text-sm leading-7 text-gray-500">
                  {plan.description}
                </p>

              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/10" />

              {/* Features */}
              <div className="space-y-4">

                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-500/10">
                      <Check
                        size={13}
                        className="text-yellow-400"
                      />
                    </div>

                    {feature}
                  </div>
                ))}

              </div>

              {/* Button */}
              <a
                href="#order"
                className={`group/button mt-9 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold transition-all duration-500 ${
                  plan.popular
                    ? "bg-yellow-500 text-black hover:bg-yellow-400 hover:shadow-[0_0_35px_rgba(234,179,8,0.25)]"
                    : "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                }`}
              >
                Start This Plan

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1"
                />
              </a>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] scale-x-0 bg-yellow-500 transition-transform duration-700 group-hover:scale-x-100" />

            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">

          <p className="text-sm text-gray-600">
            Need a custom package?
            <a
              href="#contact"
              className="ml-2 font-semibold text-yellow-500 transition-colors hover:text-yellow-400"
            >
              Let's talk
            </a>
          </p>

        </div>

      </div>

      <style jsx>{`
        @keyframes pricingReveal {
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