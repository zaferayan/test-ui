import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "React.js — Kullanıcı Arayüzleri için JavaScript Kütüphanesi",
  description: "React’in temel özelliklerini, avantajlarını ve popüler araçlarını anlatan Türkçe rehber.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
