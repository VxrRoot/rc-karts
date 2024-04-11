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
    <section className={`py-32 overflow-hidden wrapper`}>
      <GalleryRow className="" data={data}></GalleryRow>
      <GalleryRow className="-translate-x-[80rem]" data={data}></GalleryRow>

      <div className="w-full flex justify-center">
        <Link
          href={links.gallery}
          className={`bg-primaryc mt-10 py-4 px-10 rounded-2xl text-white hover:text-gray-200 transition-all `}
        >
          Zobacz wszystkie zdjęcia
        </Link>
      </div>
    </section>
  );
}

export default GallerySection;
