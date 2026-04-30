import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibhor Koshal | AI/ML Engineer & Aspiring PM",
  description: "Personal portfolio of Vibhor Koshal, featuring projects in AI/ML, engineering, and product management.",
  keywords: ["Vibhor Koshal", "AI/ML Engineer", "Product Manager", "Portfolio", "B.Tech Student"],
  authors: [{ name: "Vibhor Koshal" }],
  openGraph: {
    title: "Vibhor Koshal | AI/ML Engineer & Aspiring PM",
    description: "Personal portfolio of Vibhor Koshal, featuring projects in AI/ML, engineering, and product management.",
    type: "website",
  },
};

import { PillBase } from "@/components/ui/3d-adaptive-navigation-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col items-center">
        <div className="fixed top-8 z-50 pointer-events-auto">
          <PillBase />
        </div>
        <main className="w-full flex-1">{children}</main>
      </body>
    </html>
  );
}
