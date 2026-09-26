import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Горішки — домашнє печиво зі згущеним молоком",
  description: "Домашні горішки зі згущеним молоком. Подарункове пакування та коробки для особливих приводів.",
  openGraph: { title: "Горішки", description: "Домашні горішки зі згущеним молоком.", locale: "uk_UA", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uk"><body>{children}</body></html>;
}
