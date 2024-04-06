import { getHomePageImages } from "@/lib/query";
import { Baloo_Chettan_2 } from "next/font/google";
import Image from "next/image";
import "./GalleryHomePageSection.scss";
import {useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {GalleryRow} from './GalleryRow';

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

async function GallerySection() {
  const data = await getHomePageImages();

  console.log(data)
  return (
    <section className={`py-32 overflow-hidden wrapper`}>
      <GalleryRow className='' data={data}></GalleryRow>
      <GalleryRow className='-translate-x-[80rem]' data={data}></GalleryRow>
      
      
      <div className="w-full flex justify-center">
        <button className="bg-primaryc mt-10 py-4 px-10 rounded-2xl text-white  ">
          Zobacz wszystkie zdjęcia
        </button>
      </div>
    </section>
  );
}

export default GallerySection;