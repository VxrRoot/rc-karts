import { links } from "@/constants";
import Loader from "@/ui/Loader/Loader";
import { Baloo_Chettan_2 } from "next/font/google";
import Link from "next/link";
import React, { FC } from "react";
import HeroImg from "./elements/HeroImg";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IHeroSection {
  text: string;
  showButtons?: boolean;
  showImg?: boolean;
}

const HeroSection: FC<IHeroSection> = ({
  showButtons = false,
  text,
  showImg = true,
}) => {
  return (
    <section
      className={`relative ${
        showButtons ? "h-[89vh]" : "h-[60vh]"
      }  z-20 bg-cover bg-bottom soft-shadow -mt-[30px] lg:mt-0 bg-[url('../assets/contact-background.svg')]`}
    >
      {showImg ? <HeroImg bigImg={showButtons} /> : ""}
      <div
        className={` ${
          showButtons ? "h-[89vh]" : "h-[60vh]"
        } flex-col absolute inset-0 flex items-center justify-center px-8`}
      >
        <h1
          className={`text-4xl text-center lg:text-7xl font-extrabold lg:tracking-widest text-white ${baloo.className} uppercase tracking-wide`}
        >
          {text}
        </h1>
        {showButtons ? (
          <div className="flex text-white flex-col lg:flex-row items-center justify-center text-xl mt-8">
            <Link
              href={links.attractions}
              className="bg-gradient-to-r from-[#FF3E27] to-[#FF3061] py-2 px-10 rounded-full shadow-on-hover"
            >
              Atrakcje
            </Link>
            <Link href={links.pricelist} className="mt-4 lg:mt-0 lg:ml-12 color-on-hover">
              Cennik
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default HeroSection;
