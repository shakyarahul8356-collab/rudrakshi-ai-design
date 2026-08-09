"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  MessageCircle,
  User,
  Phone,
  Sparkles,
  Upload,
  X,
} from "lucide-react";

const services = [
  "AI Fashion Design",
  "AI Product Photography",
  "AI Video Creation",
  "AI Image Generation",
  "Brand Creative Design",
  "Creative Editing",
];

const budgets = [
  "Under ₹5,000",
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000+",
];

export default function OrderForm() {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!service || !budget) return;

    setLoading(true);

    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const phone = (
      form.elements.namedItem("phone") as HTMLInputElement
    ).value;

    const details = (
      form.elements.namedItem("details") as HTMLTextAreaElement
    ).value;

    const message = `
✨ NEW PROJECT ENQUIRY

👤 Name: ${name}
📱 Phone: ${phone}

🎨 Service: ${service}
💰 Budget: ${budget}

📝 Project Details:
${details}

📎 Reference File:
${fileName || "No file attached"}

— Rudrakshi AI Design
    `.trim();

    const whatsappUrl =
      `https://wa.me/918273018692?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  if (submitted) {
    return (
      <section
        id="order"
        className="relative overflow-hidden bg-[#050505] px-6 py-28"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-yellow-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-3xl">

          <div className="rounded-[35px] border border-yellow-500/30 bg-white/[0.03] p-10 text-center shadow-[0_0_80px_rgba(234,179,8,0.08)] backdrop-blur-xl sm:p-16">

            <div className="mx-auto flex h-24 w-24 animate-[successPop_0.7s_ease-out] items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10">
              <CheckCircle2
                size={48}
                className="text-yellow-400"
              />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[5px] text-yellow-500">
              Enquiry Sent
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Thank You
              <span className="text-yellow-500"> ✨</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400">
              Your project details have been prepared for WhatsApp.
              Our team will connect with you shortly.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-10 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-7 py-4 font-semibold text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
            >
              Submit Another Project
            </button>

          </div>

        </div>

        <style jsx>{`
          @keyframes successPop {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }

            70% {
              transform: scale(1.08);
            }

            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section
      id="order"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >

      {/* Luxury Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 animate-pulse rounded-full bg-yellow-500/[0.07] blur-[160px]" />

      <div className="pointer-events-none absolute bottom-0 left-[-150px] h-[350px] w-[350px] rounded-full bg-yellow-500/[0.04] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-yellow-400">
            <Sparkles size={14} />
            Premium Creative Studio
          </div>

          <h2 className="mt-7 animate-[fadeUp_0.8s_ease-out] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s Create
            <span className="text-yellow-500">
              {" "}Something Amazing
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Tell us about your project and let&apos;s turn your idea
            into a premium AI-powered visual experience.
          </p>

        </div>

        {/* Main Card */}
        <div className="group relative mx-auto mt-16 max-w-5xl">

          {/* Animated Glow */}
          <div className="absolute -inset-[1px] rounded-[36px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent opacity-40 blur-sm transition duration-700 group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-[#090909]/90 p-6 shadow-2xl backdrop-blur-2xl sm:p-10">

            {/* Top Line */}
            <div className="mb-10 flex items-center gap-4">

              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-500/30" />

              <span className="text-xs font-bold uppercase tracking-[4px] text-gray-600">
                Project Details
              </span>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-500/30" />

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-10"
            >

              {/* Personal Details */}
              <div className="grid gap-6 md:grid-cols-2">

                <div className="animate-[fadeUp_0.6s_ease-out]">

                  <label
                    htmlFor="name"
                    className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-300"
                  >
                    <User
                      size={16}
                      className="text-yellow-400"
                    />
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all duration-500 placeholder:text-gray-600 focus:border-yellow-500/60 focus:bg-yellow-500/[0.03] focus:shadow-[0_0_30px_rgba(234,179,8,0.08)]"
                  />

                </div>

                <div className="animate-[fadeUp_0.8s_ease-out]">

                  <label
                    htmlFor="phone"
                    className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-300"
                  >
                    <Phone
                      size={16}
                      className="text-yellow-400"
                    />
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all duration-500 placeholder:text-gray-600 focus:border-yellow-500/60 focus:bg-yellow-500/[0.03] focus:shadow-[0_0_30px_rgba(234,179,8,0.08)]"
                  />

                </div>

              </div>

              {/* Services */}
              <div>

                <div className="mb-5 flex items-center justify-between">

                  <label className="text-sm font-semibold text-gray-300">
                    Select Your Service
                  </label>

                  <span className="text-xs text-gray-600">
                    Choose one
                  </span>

                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                  {services.map((item, index) => {
                    const selected = service === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setService(item)}
                        className={`group/service animate-[fadeUp_0.6s_ease-out] rounded-2xl border p-5 text-left transition-all duration-500 ${
                          selected
                            ? "border-yellow-500/60 bg-yellow-500/10 shadow-[0_0_25px_rgba(234,179,8,0.08)]"
                            : "border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-yellow-500/[0.04]"
                        }`}
                        style={{
                          animationDelay: `${index * 70}ms`,
                        }}
                      >

                        <div className="flex items-center justify-between gap-3">

                          <span
                            className={`text-sm font-semibold ${
                              selected
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            {item}
                          </span>

                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                              selected
                                ? "border-yellow-500 bg-yellow-500 text-black"
                                : "border-white/10 text-transparent"
                            }`}
                          >
                            <Check size={14} />
                          </span>

                        </div>

                      </button>
                    );
                  })}

                </div>

              </div>

              {/* Budget */}
              <div>

                <div className="mb-5 flex items-center justify-between">

                  <label className="text-sm font-semibold text-gray-300">
                    Estimated Budget
                  </label>

                  <span className="text-xs text-gray-600">
                    Choose one
                  </span>

                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                  {budgets.map((item) => {
                    const selected = budget === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setBudget(item)}
                        className={`rounded-2xl border px-4 py-5 text-sm font-semibold transition-all duration-500 ${
                          selected
                            ? "border-yellow-500/60 bg-yellow-500 text-black shadow-[0_0_25px_rgba(234,179,8,0.15)]"
                            : "border-white/10 bg-white/[0.02] text-gray-400 hover:-translate-y-1 hover:border-yellow-500/30 hover:text-yellow-400"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}

                </div>

              </div>

              {/* Details */}
              <div>

                <label
                  htmlFor="details"
                  className="mb-3 block text-sm font-semibold text-gray-300"
                >
                  Tell Us About Your Project
                </label>

                <textarea
                  id="details"
                  name="details"
                  required
                  rows={6}
                  placeholder="Describe your idea, product, campaign or visual you want to create..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all duration-500 placeholder:text-gray-600 focus:border-yellow-500/60 focus:bg-yellow-500/[0.03] focus:shadow-[0_0_30px_rgba(234,179,8,0.08)]"
                />

              </div>

              {/* Upload */}
              <div>

                <label className="mb-3 block text-sm font-semibold text-gray-300">
                  Reference Image
                  <span className="ml-2 text-xs font-normal text-gray-600">
                    Optional
                  </span>
                </label>

                <label className="group/upload flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-10 text-center transition-all duration-500 hover:border-yellow-500/40 hover:bg-yellow-500/[0.03]">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 transition-transform duration-500 group-hover/upload:scale-110 group-hover/upload:rotate-3">
                    <Upload
                      size={24}
                      className="text-yellow-400"
                    />
                  </div>

                  <p className="mt-4 font-semibold text-white">
                    {fileName || "Upload a reference image"}
                  </p>

                  <p className="mt-2 text-xs text-gray-600">
                    PNG, JPG or WEBP
                  </p>

                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      setFileName(file ? file.name : "");
                    }}
                  />

                </label>

                {fileName && (
                  <button
                    type="button"
                    onClick={() => setFileName("")}
                    className="mt-3 flex items-center gap-2 text-xs text-gray-500 hover:text-red-400"
                  >
                    <X size={14} />
                    Remove image
                  </button>
                )}

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !service || !budget}
                className="group/submit relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-yellow-500 px-6 py-5 font-bold text-black transition-all duration-500 hover:bg-yellow-400 hover:shadow-[0_0_50px_rgba(234,179,8,0.25)] disabled:cursor-not-allowed disabled:opacity-50"
              >

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover/submit:translate-x-full" />

                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                    Preparing WhatsApp...
                  </>
                ) : (
                  <>
                    <MessageCircle size={21} />

                    Send Project Enquiry

                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover/submit:translate-x-2"
                    />
                  </>
                )}

              </button>

              {!service || !budget ? (
                <p className="text-center text-xs text-gray-600">
                  Select a service and budget to continue.
                </p>
              ) : null}

            </form>

          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
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