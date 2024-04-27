"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC } from "react";
// Default theme
import "@splidejs/react-splide/css";
import { Baloo_Chettan_2 } from "next/font/google";
import Link from "next/link";
import { GoogleIcon, QuoteIcon, StarIcon } from "../../../assets/icons";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IReviewSlider {
  elements: { author: string; opinion: string; url: string; rating: number }[];
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
        <SplideSlide key={idx} className="relative self-stretch text-white">
          <div
            className={`gradient-background overflow-hidden shadow-lg rounded-3xl min-h-[20rem] mx-2 h-full relative p-12 `}
          >
            <div className="flex justify-between">
              <Link href={item.url} target="_blank">
                <QuoteIcon />
              </Link>

              <Link href={item.url} target="_blank">
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
            <p className="text-lg italic">{`"${item.opinion}"`}</p>
            <p className="mt-8">-{item.author}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ReviewSlider;
