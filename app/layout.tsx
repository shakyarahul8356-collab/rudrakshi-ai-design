import type { Metadata } from "next";
import Script from "next/script";
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
    images: [
      {
        url: "https://rudrakshi-ai-design.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Rudrakshi AI Design logo",
      },
    ],
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
        <link rel="icon" href="/logo.png" />
        <Script
          id="organization-schema"
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
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KP9MYHHS6X"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KP9MYHHS6X');
          `}
        </Script>
      </body>
    </html>
  );
}