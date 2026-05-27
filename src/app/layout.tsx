import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISO 29110 — Guía de Perfiles para VSEs",
  description:
    "Guía interactiva de los perfiles ISO/IEC 29110 para Entidades Muy Pequeñas (VSEs)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
