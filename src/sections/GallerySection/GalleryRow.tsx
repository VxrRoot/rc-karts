"use client"
import { getHomePageImages } from "@/lib/query";
import { Baloo_Chettan_2 } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";
import { FC } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GalleryHomePageSection.scss";
import gsap from 'gsap';

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IGalleryRow {
    data: [],
    className:String
}

export const GalleryRow: FC<IGalleryRow> = ({ data,className  }) => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(
      () => {
        gsap.utils.toArray(".gallery-row").forEach((section : any, index) => {
          const w = section.querySelector('.wrapper');
          const offset = -.5
          const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth) * offset] : [w.scrollWidth * offset, 0];
          gsap.fromTo(w, {  x  }, {
            x: xEnd,
            scrollTrigger: { 
              trigger: section, 
              scrub: 0.5 
            }
          });
        });
      },
       [])


  return (
      <div className={`gallery-row w-full py-5 inline-flex overflow-hidden flex-nowrap photos -rotate-3 [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)]  md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]`}>
      <ul className={`${className} wrapper flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none`}>
          {data[0].images.map((item: any, idx: number) => (
            <li key={idx} className={`shadow-xl w-96 h-56`}>
              <Image
                alt={"Photo"}
                src={item.url}
                width={384}
                height={224}
                className="object-cover w-full h-full"
              />
            </li>
          ))}
        </ul>      
      </div>
  );
}
