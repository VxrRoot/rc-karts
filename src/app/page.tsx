import AboutSection from "@/sections/AboutSection/AboutSection";
import AttractionSection from "@/sections/AttractionSection/AttractionSection";
import ContactSection from "@/sections/ContactSection/ContactSection";
import FAQSection from "@/sections/FAQSection/FAQSection";
import GallerySection from "@/sections/GallerySection/GalleryHomePageSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import LocationSection from "@/sections/LocationSection/LocationSection";
import NewsSectionHomePage from "@/sections/NewsSection/NewsSectionHomePage/NewsSectionHomePage";
import ServiceSection from "@/sections/ServicesSection/ServicesSection";
import { Suspense } from "react";
import ReviewSection from "../sections/ReviewSection/ReviewSection";

export const revalidate = 0;

export default function Home() {
  return (
    <main className="">
      <HeroSection showButtons={true} text="PARK ZABAW DLA DZIECI" />
      <AboutSection />
      <Suspense fallback={<div>...</div>}>
        <NewsSectionHomePage />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
        <GallerySection />
      </Suspense>
      <ServiceSection />
      <Suspense fallback={<div>...</div>}>
        <AttractionSection />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
        <ReviewSection />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
        <ContactSection />
      </Suspense>
      <LocationSection />
    </main>
  );
}
