import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rudrakshi AI Design | AI Design & Creative Services",
  description:
    "Rudrakshi AI Design creates premium AI-powered fashion visuals, product photography, creative designs and digital content for modern brands.",
  keywords: [
    "Rudrakshi AI Design",
    "AI Design",
    "AI Fashion Model",
    "AI Product Photography",
    "AI Creative Design",
    "AI Image Generation",
    "AI Design Indore",
  ],
  metadataBase: new URL("https://rudrakshi-ai-design.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rudrakshi AI Design | AI Design & Creative Services",
    description:
      "Premium AI-powered fashion visuals, product photography and creative design services.",
    url: "https://rudrakshi-ai-design.vercel.app/",
    siteName: "Rudrakshi AI Design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rudrakshi AI Design",
  "url": "https://rudrakshi-ai-design.vercel.app",
  "logo": "https://rudrakshi-ai-design.vercel.app/logo.png"
}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}