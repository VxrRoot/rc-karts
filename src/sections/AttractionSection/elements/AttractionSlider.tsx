"use client";
import { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image, { StaticImageData } from "next/image";
import testImg from "@/assets/empty.png";
import "../AttractionSection.scss";
// Default theme
import "@splidejs/react-splide/css";
import { urlFor } from "@/lib/sanity";
import { Baloo_Chettan_2 } from "next/font/google";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IAttractionSlider {
  elements: {
    name: string;
    description: string;
    image: StaticImageData;
    rentable: boolean;
  }[];
}

const AttractionSlider: FC<IAttractionSlider> = ({ elements }) => {
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
        <SplideSlide
          key={idx}
          className={`py-10 h-auto self-stretch text-white ${
            item.rentable ? "" : "rentable"
          }`}
        >
          <div
            className={`gradient-background overflow-hidden shadow-lg rounded-3xl h-[30rem] p-4 mx-8 relative`}
          >
            <div className="relative w-full h-full rounded-lg overflow-auto">
              <Image
                alt={item.name}
                width={400}
                height={400}
                src={item.image ? urlFor(item.image).url() : testImg}
                className="rounded-lg h-full w-full object-cover "
              />
              <div className="gradient-overlay absolute w-full h-full left-0 top-0 "></div>
              <h3
                className={`pt-8 pb-6 font-semibold text-3xl absolute bottom-0 w-full overflow-hidden text-center ${baloo.className}`}
              >
                {item.name}
              </h3>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default AttractionSlider;
