import AboutSection from "@/sections/AboutSection/AboutSection";
import AttractionSection from "@/sections/AttractionSection/AttractionSection";
import ContactSection from "@/sections/ContactSection/ContactSection";
import FAQSection from "@/sections/FAQSection/FAQSection";
import GallerySection from "@/sections/GallerySection/GalleryHomePageSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import LocationSection from "@/sections/LocationSection/LocationSection";
import NewsSectionHomePage from "@/sections/NewsSection/NewsSectionHomePage/NewsSectionHomePage";
import ServiceSection from "@/sections/ServicesSection/ServicesSection";
import Loader from "@/ui/Loader/Loader";
import Spinner from "@/ui/Loader/Spinner";
import { Suspense } from "react";
import ReviewSection from "../sections/ReviewSection/ReviewSection";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="">
      <HeroSection showButtons={true} text="PARK ZABAW DLA DZIECI" />
      <AboutSection />
      <Suspense fallback={<Spinner />}>
        <NewsSectionHomePage />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <GallerySection />
      </Suspense>
      <ServiceSection />
      <Suspense fallback={<Spinner />}>
        <AttractionSection />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ReviewSection />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ContactSection />
      </Suspense>
      <LocationSection />
      <Loader />
    </main>
  );
}
