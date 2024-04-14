import AboutSection from "@/sections/AboutSection/AboutSection";
import AttractionSection from "@/sections/AttractionSection/AttractionSection";
import ContactSection from "@/sections/ContactSection/ContactSection";
import FAQSection from "@/sections/FAQSection/FAQSection";
import GallerySection from "@/sections/GallerySection/GalleryHomePageSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import LocationSection from "@/sections/LocationSection/LocationSection";
import NewsSectionHomePage from "@/sections/NewsSection/NewsSectionHomePage/NewsSectionHomePage";
import ServiceSection from "@/sections/ServicesSection/ServicesSection";
import ReviewSection from '../sections/ReviewSection/ReviewSection';

export const revalidate = 0;

export default function Home() {
  return (
    <main className="">
      <HeroSection showButtons={true} text="PARK ZABAW DLA DZIECI" />
      <AboutSection />
      <NewsSectionHomePage />
      {/* @ts-expect-error Server Component */}
      <GallerySection />
      <ServiceSection />
      {/* @ts-expect-error Server Component */}
      <AttractionSection />
      {/* @ts-expect-error Server Component */}
      <FAQSection />
      {/* @ts-expect-error Server Component */}
      <ReviewSection/>
      {/* @ts-expect-error Server Component */}
      <ContactSection />
      <LocationSection />
    </main>
  );
}
