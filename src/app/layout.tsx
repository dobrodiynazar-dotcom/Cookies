import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-body",
});

const displayFont = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const scriptFont = Great_Vibes({
  subsets: ["cyrillic", "latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Горішки — домашнє печиво зі згущеним молоком",
  description: "Домашні горішки зі згущеним молоком. Подарункове пакування та коробки для особливих приводів.",
  openGraph: { title: "Горішки", description: "Домашні горішки зі згущеним молоком.", locale: "uk_UA", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className={`${bodyFont.variable} ${displayFont.variable} ${scriptFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
