"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What services does Rudrakshi AI Design provide?",
    answer:
      "We create premium AI-powered fashion models, saree creatives, product photography, brand visuals, social media creatives and AI videos.",
  },
  {
    question: "Can I use my own product or clothing photos?",
    answer:
      "Yes. You can provide your own product or clothing images and we can create professional AI-powered visuals around them.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most creative projects are completed quickly depending on the number of visuals, revisions and overall project requirements.",
  },
  {
    question: "Can you create multiple images for my brand?",
    answer:
      "Yes. We can create complete visual campaigns with multiple models, poses, backgrounds, products and creative variations.",
  },
  {
    question: "Do you also create AI videos?",
    answer:
      "Yes. We can create cinematic AI-powered promotional videos, product videos, fashion reels and social media content.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Simply fill out the Start Project form on this website. Your project details will be sent to WhatsApp so our team can discuss the requirements with you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-500/[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-yellow-400">
            <Sparkles size={14} />
            FAQ
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Frequently Asked
            <span className="text-yellow-500"> Questions</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Everything you need to know before starting your
            AI-powered creative project.
          </p>

        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-3xl border transition-all duration-500 ${
                  isOpen
                    ? "border-yellow-500/30 bg-yellow-500/[0.04]"
                    : "border-white/10 bg-white/[0.025] hover:border-white/20"
                }`}
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                >

                  <div className="flex items-center gap-4">

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-500 ${
                        isOpen
                          ? "bg-yellow-500 text-black"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-bold text-white sm:text-lg">
                      {faq.question}
                    </span>

                  </div>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isOpen
                        ? "rotate-180 border-yellow-500/40 bg-yellow-500 text-black"
                        : "border-white/10 bg-white/5 text-gray-400"
                    }`}
                  >
                    <ChevronDown size={19} />
                  </span>

                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">

                    <div className="px-6 pb-7 pl-[76px] pr-8 text-sm leading-7 text-gray-400 sm:text-base">
                      {faq.answer}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">

          <p className="mb-5 text-sm text-gray-500">
            Still have a question?
          </p>

          <a
            href="#contact"
            className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-7 py-3 font-semibold text-yellow-400 transition-all duration-500 hover:-translate-y-1 hover:bg-yellow-500 hover:text-black"
          >
            Contact Us
          </a>

        </div>

      </div>
    </section>
  );
}