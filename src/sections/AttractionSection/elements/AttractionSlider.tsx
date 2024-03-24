"use client";
import { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image, { StaticImageData } from "next/image";
import testImg from "@/assets/empty.png";
import "../AttractionSection.scss";
// Default theme
import "@splidejs/react-splide/css";
import { urlFor } from "@/lib/sanity";

interface IAttractionSlider {
  elements: { name: string; description: string; image: StaticImageData }[];
}

const AttractionSlider: FC<IAttractionSlider> = ({ elements }) => {
  console.log(elements);

  return (
    <Splide
      options={{
        mediaQuery: "min",
        type: "slide",
        perPage: 1,
        perMove: 1,
        arrows: false,
        omitEnd: true,
        pagination: true,
        isNavigation: true,
        breakpoints: {
          1500: { perPage: 4.5, perMove: 4 },
          1200: { perPage: 3.5, perMove: 3, padding: { left: 150 } },
          860: { perPage: 2.5, perMove: 2, padding: { left: 100 } },
          480: { perPage: 1.5, perMove: 1, padding: { left: 30 } },
        },
      }}
      aria-label="Attraction slider"
      className="pt-0"
    >
      {elements.map((item, idx) => (
        <SplideSlide key={idx} className="py-10 h-full text-white">
          <div className={`bg-primaryc shadow-xl rounded-3xl p-10 mx-4`}>
            <Image
              alt={item.name}
              width={400}
              height={300}
              src={item.image ? urlFor(item.image).url() : testImg}
              className="rounded-lg h-44 w-full object-cover"
            />
            <h4 className="pt-8 pb-6 font-semibold text-2xl">{item.name}</h4>
            <p className="font-medium">{item.description}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default AttractionSlider;
