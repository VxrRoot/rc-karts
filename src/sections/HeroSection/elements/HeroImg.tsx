import React from "react";
import Image from "next/image";
import heroImg from "../../../assets/hero.png";

const HeroImg = () => {
  return (
    <Image
      alt="hero img"
      src={heroImg}
      priority
      className="h-[34rem] z-30 lg:h-auto object-cover object-center brightness-[.4]"
    />
  );
};

export default HeroImg;
