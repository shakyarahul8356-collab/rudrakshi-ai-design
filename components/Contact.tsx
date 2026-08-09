"use client";

import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 82730 18692",
    href: "tel:+918273018692",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/918273018692",
  },
  {
    icon: Mail,
    title: "Email",
    value: "SHAKYARAHUL8356@GMAIL.COM",
    href: "mailto:SHAKYARAHUL8356@GMAIL.COM",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-yellow-500/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[5px] text-yellow-500">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Let&apos;s Create
            <span className="text-yellow-500">
              {" "}Something Amazing
            </span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            Have a project in mind? Contact us and let&apos;s turn
            your ideas into premium AI-powered visuals.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">

          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={
                  item.href.startsWith("https://")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.href.startsWith("https://")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-yellow-500/[0.04]"
              >
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10">
                    <Icon
                      size={22}
                      className="text-yellow-400"
                    />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-400"
                  />

                </div>

                <p className="mt-6 text-sm text-gray-500">
                  {item.title}
                </p>

                <p className="mt-2 break-all font-semibold text-white">
                  {item.value}
                </p>

              </a>
            );
          })}

        </div>

        {/* Location */}
        <div className="mx-auto mt-6 max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-7">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-500/10">
                <MapPin
                  size={22}
                  className="text-yellow-400"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 font-semibold text-white">
                  Indore, Madhya Pradesh, India
                </p>
              </div>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Indore+Madhya+Pradesh+India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-500/40 px-6 py-3 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Open Google Maps
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">

          <a
            href="#order"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400 hover:shadow-[0_0_35px_rgba(234,179,8,0.25)]"
          >
            Start Your Project
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>
    </section>
  );
}