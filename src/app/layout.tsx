import Footer from "@/ui/Footer";
import Header from "@/ui/Header/Header";
import Loader from "@/ui/Loader/Loader";
import type { Metadata } from "next";
import { Baloo_Chettan_2, Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";
import { Toaster } from "@/components/ui/toaster";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicons/favicon.ico",
  },
  title: "RC - Karts",
  description: "Generated by create next app",
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
    <html lang="en" className="bg-white ">
      <AOSInit />
      <body className={`${baloo.className} overflow-x-hidden`}>
        <Header />
        {children}
        <Toaster />
        <Loader />
        <Footer />
      </body>
    </html>
  );
}
