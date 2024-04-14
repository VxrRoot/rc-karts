import React from "react";
import Image from "next/image";
import testImg from "../../../../assets/hero.webp";
import Link from "next/link";
import { links } from "@/constants";

const BigNews = () => {
  return (
    <div className="flex flex-col bg-white shadow-xl overflow-hidden rounded-[48px] h-full max-h-[600px] ">
      <Image
        src={testImg}
        alt="News image"
        className=" cover w-full h-3/5 object-cover"
      />
      <div className="px-8 py-4 rounded-[48px] -mt-14 bg-white h-full flex justify-around flex-col">
        <p className="text-[#3F8D40] text-2xl">Tytuł aktualności</p>
        <span>20/02/2024</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
        <div className="flex items-end">
          <Link
            href={links.pricelist}
            className={` bg-gradient-to-r from-[#FF3E27] to-[#FF3061] text-nowrap py-2 px-10 rounded-full shadow-lg text-white shadow-on-hover`}
          >
            Czytaj
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigNews;
