import HeroSection from "@/sections/HeroSection/HeroSection";
import PriceListSection from "@/sections/PricelistSection/PriceListSection";
import Spinner from "@/ui/Loader/Spinner";
import { Suspense } from "react";

export const revalidate = 3600;

export default function Page() {
  return (
    <main className="">
      <HeroSection text="Cennik" showImg={false} />
      <Suspense fallback={<Spinner />}>
        <PriceListSection />
      </Suspense>
    </main>
  );
}
