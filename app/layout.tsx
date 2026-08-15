import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rudrakshi AI Design | Premium AI Creative Studio",
  description:
    "Rudrakshi AI Design creates premium AI fashion models, product photography, catalog visuals and creative designs.",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rudrakshi AI Design",
              url: "https://rudrakshi-ai-design.vercel.app",
              logo: "https://rudrakshi-ai-design.vercel.app/logo.png",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}