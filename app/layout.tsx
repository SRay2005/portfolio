import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import LiveBackground from "@/components/effects/LiveBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sannidhya Ray | Portfolio",
  description:
    "Portfolio of Sannidhya Ray — ECE + Physics @ BITS Pilani"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Live cosmic background */}
        <LiveBackground />

        {/* Global navigation */}
        <Navbar />

        {/* Page content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
