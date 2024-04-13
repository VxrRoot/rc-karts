import { links } from "@/constants";
import { getHomePageImages } from "@/lib/query";
import { Baloo_Chettan_2 } from "next/font/google";
import Link from "next/link";
import "./GalleryHomePageSection.scss";
import { GalleryRow } from "./GalleryRow";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

async function GallerySection() {
  const data = await getHomePageImages();

  return (
    <section className={`md:pt-8 pb-32 overflow-hidden wrapper`}>
      <GalleryRow className="" data={data}></GalleryRow>
      <GalleryRow className="-translate-x-[80rem]" data={data}></GalleryRow>

      <div className="w-full flex justify-center">
        <Link
          href={links.gallery}
          className={` bg-gradient-to-r from-[#FF3E27] to-[#FF3061] mt-10 py-4 px-10 rounded-full shadow-lg text-white transition-all shadow-on-hover`}
        >
          Zobacz wszystkie zdjęcia
        </Link>
      </div>
    </section>
  );
}

export default GallerySection;
