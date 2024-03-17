import AboutSection from "@/sections/AboutSection/AboutSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import ServiceSection from "@/sections/ServicesSection/ServicesSection";


export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
    </main>
  );
}
