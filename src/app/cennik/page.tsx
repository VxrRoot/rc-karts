import HeroSection from "@/sections/HeroSection/HeroSection";
import PriceListSection from "@/sections/PricelistSection/PriceListSection";

export const revalidate = 0;

export default function Page() {
  return (
    <main className="">
      <HeroSection text="Cennik" showImg={false} />
      <PriceListSection />
    </main>
  );
}
