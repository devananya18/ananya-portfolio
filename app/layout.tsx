import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import ParticlesBackground from "@/components/ParticlesBackground";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ananya Gupta — Full Stack Developer",
  description:
    "Portfolio of Ananya Gupta, MCA student and full stack developer building real-world web applications with Laravel, React and Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="font-body text-plum-900 bg-aurora aurora-bg animate-gradientShift antialiased selection:bg-rose-400">
        <SmoothScrollProvider>
          <ScrollProgress />
          <ParticlesBackground />
          <CursorGlow />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
