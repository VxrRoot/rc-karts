import { Toaster } from "@/components/ui/toaster";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header/Header";
import type { Metadata } from "next";
import { Baloo_Chettan_2 } from "next/font/google";
import { AOSInit } from "./aos";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import CookieBanner from "@/ui/CookieBanner/CookieBanner";

const baloo = Baloo_Chettan_2({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicons/favicon.ico",
  },
  title: "RC Kart KIDS Podkarpacie",
  description:
    "Park zabaw dla dzieci gokarty i dmuchańce. Zabawa na miejscu w parku, wynajem oraz organizacja urodzin.Najlepsza zabawa w okolicach Krosna na podkarpaciu",
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
    <html lang="pl" className="bg-white ">
      <AOSInit />
      <body className={`${baloo.className} overflow-x-hidden`}>
        <Header />
        {children}
        <Toaster />
        <Footer />
        <CookieBanner />
        <GoogleTagManager gtmId={"GTM-P4C8HR4X"} />
      </body>
    </html>
  );
}
