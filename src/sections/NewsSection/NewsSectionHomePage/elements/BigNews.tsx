import React, { FC } from "react";
import Image from "next/image";
import testImg from "../../../../assets/hero.webp";
import Link from "next/link";
import { links } from "@/constants";
import { urlFor } from "@/lib/sanity";
import empytBlogImg from "../../../../assets/single-blog-post.svg";

interface IBigNews {
  title: string;
  smallDescription: string;
  image: any;
  currentSlug: string;
  publishedAt: string;
}

const BigNews: FC<IBigNews> = ({
  currentSlug,
  image,
  smallDescription,
  publishedAt,
  title,
}) => {
  const [dateString, timeString] = publishedAt.split("T");

  return (
    <div className="flex flex-col bg-white shadow-xl overflow-hidden rounded-[48px] h-[600px] mb-8 lg:mb-0">
      <Image
        src={image ? urlFor(image).url() : empytBlogImg}
        alt="News image"
        className="cover w-full h-3/5 object-cover"
        width={2000}
        height={2000}
      />
      <div className="px-8 py-4 rounded-[48px] -mt-14 bg-white h-full grow flex justify-around flex-col">
        <p className="text-[#3F8D40] text-2xl">{title}</p>
        <span>{dateString}</span>
        <p>{`${smallDescription.substring(0, 300)}...`}</p>
        <div className="flex justify-end mt-2 lg:justify-start">
          <Link
            href={`${links.news}/${currentSlug}`}
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
