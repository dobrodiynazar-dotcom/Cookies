import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Горішки — домашнє печиво зі згущеним молоком",
  description: "Домашні горішки зі згущеним молоком. Подарункове пакування та коробки для особливих приводів.",
  openGraph: { title: "Горішки", description: "Домашні горішки зі згущеним молоком.", locale: "uk_UA", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className={lora.variable}>
      <body>{children}</body>
    </html>
  );
}
