import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://cookies.example"),
  title: "Горішки — фірмовий десерт",
  description:
    "Світлий editorial-лендинг для фірмових горішків із пісочного тіста та згущеного молока.",
  openGraph: {
    title: "Горішки — фірмовий десерт",
    description: "Маленький десерт для тихих і святкових моментів.",
    type: "website",
    locale: "uk_UA",
    images: [
      {
        url: "/images/hero-nuts.png",
        alt: "Золотисті горішки з ніжною карамельною начинкою",
      },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f6efe3",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
