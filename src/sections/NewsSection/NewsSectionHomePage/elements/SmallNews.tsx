import { CalendarIcon } from "@/assets/icons";
import { links } from "@/constants";
import { Baloo_Chettan_2 } from "next/font/google";
import Link from "next/link";
import React from "react";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const SmallNews = () => {
  return (
    <div
      className={`shadow-xl bg-white flex mb-2 last:mb-0 rounded-3xl p-4 ${baloo.className}`}
    >
      <div className="flex flex-col">
        <div className="flex items-center h-8">
          <CalendarIcon />
          <span className="pl-2 text-gray-600">20/02/2024</span>
        </div>
        <p className="py-4 text-[#3F8D40] text-2xl">Tytuł aktualności</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </p>
      </div>
      <div className=" flex items-end pl-3">
        <Link
          href={links.pricelist}
          className={` bg-gradient-to-r from-[#FF3E27] to-[#FF3061] text-nowrap mt-10 py-2 px-8 rounded-full shadow-lg text-white shadow-on-hover`}
        >
          Czytaj
        </Link>
      </div>
    </div>
  );
};

export default SmallNews;
