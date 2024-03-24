"use client";

import { Baloo_Chettan_2 } from "next/font/google";
import React, { useEffect } from "react";
import Image from "next/image";
import "./GallerySection.scss";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const images = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5
];

const GallerySection = () => {

    useEffect(() => {
        const root = document.documentElement;
        const marqueeContent = document.querySelector("ul.marquee-content");
        if (marqueeContent)
            root.style.setProperty("--marquee-elements", marqueeContent.children.length.toString());
    })

    return (
        <section className={`py-32 overflow-hidden`}>
            <div className="w-full py-10 inline-flex overflow-hidden flex-nowrap photos -rotate-3 
            [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)]
            md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {images.map((item, idx) => (
                        <li key={idx} className={`shadow-xl w-96 h-56`}>
                            <Image alt={'Photo'} src={item} className="object-cover w-full h-full" />
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {images.map((item, idx) => (
                        <li key={idx} className={`shadow-xl w-96 h-56`}>
                            <Image alt={'Photo'} src={item} className="object-cover w-full h-full" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full flex justify-center">
                <button className="bg-primaryc mt-10 py-4 px-10 rounded-2xl text-white  ">Zobacz wszystkie zdjęcia</button>
            </div>

        </section>
    );
};

export default GallerySection;
