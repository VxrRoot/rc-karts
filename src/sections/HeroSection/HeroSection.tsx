import Loader from "@/ui/Loader/Loader";
import { Baloo_Chettan_2 } from "next/font/google";
import React, { FC } from "react";
import HeroImg from "./elements/HeroImg";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IHeroSection {
  text: string;
  showButtons?: boolean;
}

const HeroSection: FC<IHeroSection> = ({ showButtons = false, text }) => {
  return (
    <section
      className={`relative ${showButtons ? "h-[89dvh]" : "h-[60dvh]"}  z-20`}
    >
      <HeroImg bigImg={showButtons} />
      <div
        className={` ${
          showButtons ? "h-[89dvh]" : "h-[60dvh]"
        } flex-col absolute inset-0 flex items-center justify-center px-8`}
      >
        <h1
          className={`text-4xl text-center lg:text-7xl font-extrabold lg:tracking-widest text-white ${baloo.className} uppercase tracking-wide`}
        >
          {text}
        </h1>
        {showButtons ? (
          <div className="flex text-white flex-col lg:flex-row items-center justify-center text-xl mt-8">
            <button className="bg-gradient-to-r from-[#FF3E27] to-[#FF3061] py-2 px-10 rounded-2xl">
              Atrakcje
            </button>
            <button className="mt-4 lg:mt-0 lg:ml-12">Cennik</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default HeroSection;
