import AboutSection from "@/sections/AboutSection/AboutSection";
import AttractionSection from "@/sections/AttractionSection/AttractionSection";
import ContactSection from "@/sections/ContactSection/ContactSection";
import GallerySection from "@/sections/GallerySection/GallerySection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import ServiceSection from "@/sections/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ServiceSection />
      <AttractionSection />
      <ContactSection />
    </main>
  );
}
