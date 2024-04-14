"use client";
import { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image, { StaticImageData } from "next/image";
import testImg from "@/assets/empty.png";
// Default theme
import "@splidejs/react-splide/css";
import { urlFor } from "@/lib/sanity";
import { Baloo_Chettan_2 } from "next/font/google";
import { QuoteIcon, StarIcon, GoogleIcon } from "../../../assets/icons";
import Link from "next/link";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IReviewSlider {
  elements: { author: string; text: string; link: string; rating: number }[];
}

const ReviewSlider: FC<IReviewSlider> = ({ elements }) => {
  function displayStars(rating: number) {
    const fullStars = Math.floor(rating);

    let stars = "";

    for (let i = 0; i < fullStars; i++) {
      stars += "<StarIcon />";
    }
    return stars;
  }

  return (
    <Splide
      options={{
        mediaQuery: "min",
        type: "slide",
        perPage: 1,
        perMove: 1,
        arrows: true,
        omitEnd: true,
        pagination: true,
        isNavigation: true,
      }}
      aria-label="Attraction slider"
      className="pt-0"
    >
      {elements.map((item, idx) => (
        <SplideSlide key={idx} className="h-auto self-stretch text-white">
          <div
            className={`gradient-background overflow-hidden shadow-lg rounded-3xl min-h-[20rem] mx-8 relative p-12 `}
          >
            <div className="flex justify-between">
              <Link href={item.link}>
                <QuoteIcon />
              </Link>

              <Link href={item.link}>
                <GoogleIcon />
              </Link>
            </div>

            <div className="flex mx-auto justify-center w-100 my-4">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="text-lg italic">{`"${item.text}"`}</p>
            <p className="mt-8">-{item.author}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ReviewSlider;
