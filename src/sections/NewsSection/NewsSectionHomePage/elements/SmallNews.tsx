import { CalendarIcon } from "@/assets/icons";
import { links } from "@/constants";
import Link from "next/link";
import React, { FC } from "react";

interface ISmallNews {
  currentSlug: string;
  title: string;
  publishedAt: string;
  smallDescription: string;
}

const SmallNews: FC<ISmallNews> = ({
  currentSlug,
  publishedAt,
  smallDescription,
  title,
}) => {
  const [dateString, timeString] = publishedAt.split("T");

  return (
    <div
      className={`shadow-xl bg-white flex grow basis-full last:mb-0 rounded-3xl p-4 min-h-56 max-h-56 lg:h-auto lg:min-h-28`}
    >
      <div className="flex flex-col justify-between">
        <div className="flex items-center h-8">
          <CalendarIcon />
          <span className="pl-2 text-gray-600">{dateString}</span>
        </div>
        <p className="text-[#3F8D40] text-2xl">{title}</p>
        <p>{`${smallDescription.substring(0, 70)}...`}</p>
      </div>
      <div className="flex ml-auto justify-end items-end pl-3">
        <Link
          href={`${links.news}/${currentSlug}`}
          className={` bg-gradient-to-r from-[#FF3E27] to-[#FF3061] text-nowrap mt-10 py-2 px-8 rounded-full shadow-lg text-white shadow-on-hover`}
        >
          Czytaj
        </Link>
      </div>
    </div>
  );
};

export default SmallNews;
