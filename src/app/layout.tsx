import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-jessikamiranda.vercel.app"),

  title: {
    default: "Jessika Miranda | Frontend Software Engineer",
    template: "%s | Jessika Miranda",
  },

  description:
    "Frontend Software Engineer based in São Paulo, Brazil, building scalable web products with React, Next.js and TypeScript.",

  authors: [
    {
      name: "Jessika Miranda",
      url: "https://portfolio-jessikamiranda.vercel.app",
    },
  ],

  creator: "Jessika Miranda",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Jessika Miranda",
    title: "Jessika Miranda | Frontend Software Engineer",
    description:
      "Frontend Software Engineer building scalable web products with React, Next.js and TypeScript.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jessika Miranda | Frontend Software Engineer",
    description:
      "Frontend Software Engineer building scalable web products with React, Next.js and TypeScript.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
