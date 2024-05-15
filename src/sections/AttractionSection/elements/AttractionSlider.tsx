"use client";
import testImg from "@/assets/empty.png";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import "../AttractionSection.scss";
// Default theme
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import "@splidejs/react-splide/css";
import { Baloo_Chettan_2 } from "next/font/google";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IAttractionSlider {
  elements: {
    name: string;
    description: any;
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
        <Dialog key={idx}>
          <SplideSlide
            className={`py-10 h-auto self-stretch text-white ${
              item.rentable ? "rentable" : ""
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
                <div className="gradient-overlay absolute w-full h-full left-0 top-0 " />
                <h3
                  className={`pt-8 pb-12 font-semibold text-3xl absolute bottom-0 w-full overflow-hidden text-center ${baloo.className}`}
                >
                  {item.name}
                </h3>
                <div className="absolute bottom-2 flex items-center justify-center w-full">
                  <DialogTrigger>
                    <span className="block px-4 py-1 rounded-full mx-auto bg-secondaryc overflow-hidden text-center">
                      Szczegóły
                    </span>
                  </DialogTrigger>
                </div>
              </div>
            </div>
          </SplideSlide>
          <DialogContent className="gradient-background border-none rounded-xl text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Szczegóły {item.name}
              </DialogTitle>
            </DialogHeader>
            <div>
              <PortableText value={item.description} />
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <button className="block px-4 py-1 rounded-full mx-auto bg-secondaryc overflow-hidden text-center">
                  Zamknij
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </Splide>
  );
};

export default AttractionSlider;
