import Loader from "@/ui/Loader/Loader";
import { Baloo_Chettan_2 } from "next/font/google";
import React from "react";
import HeroImg from "./elements/HeroImg";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const HeroSection = () => {
  return (
    <section className="relative h-[34rem] z-20 lg:h-auto">
      <HeroImg />
      <div className=" flex-col absolute inset-0 flex items-center justify-center px-8">
        <h1
          className={`text-4xl text-center lg:text-7xl font-extrabold lg:tracking-widest text-white ${baloo.className} uppercase tracking-wide`}
        >
          Gokarty i dmuchańce
        </h1>
        <div className="flex text-white flex-col lg:flex-row items-center justify-center text-xl mt-8">
          <button className="bg-gradient-to-r from-[#FF3E27] to-[#FF3061] py-2 px-10 rounded-2xl">
            Atrakcje
          </button>
          <button className="mt-4 lg:mt-0 lg:ml-12">Cennik</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
