import AboutSection from "@/sections/AboutSection/AboutSection";
import AttractionSection from "@/sections/AttractionSection/AttractionSection";
import ContactSection from "@/sections/ContactSection/ContactSection";
import GallerySection from "@/sections/GallerySection/GalleryHomePageSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import ServiceSection from "@/sections/ServicesSection/ServicesSection";

export const revalidate = 0;

export default async function Home() {
  return (
    <main className="">
      <HeroSection showButtons={true} text="GOKARTY I DMUCHAŃCE" />
      <AboutSection />
      <GallerySection />
      <ServiceSection />
      <AttractionSection />
      <ContactSection />
    </main>
  );
}
