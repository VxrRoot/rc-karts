import { links } from "@/constants";
import { ISimplyNewsPost } from "@/lib/interfaces";
import { getNews } from "@/lib/query";
import Link from "next/link";
import React from "react";
import BigNews from "./elements/BigNews";
import SmallNews from "./elements/SmallNews";

const NewsSectionHomePage = async () => {
  const response: ISimplyNewsPost[] = await getNews(4);

  const firstPost = response[0];

  const restPosts = response.slice(1);

  return (
    <section className="w-full max-w-7xl mx-auto my-20 lg:my-32 px-4">
      <h2 className="p-0 m-0 text-[#3F8D40] font-semibold text-3xl mb-6 ">
        Aktualności
      </h2>
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full h-full mr-8">
          <BigNews
            currentSlug={firstPost.currentSlug}
            publishedAt={firstPost.publishedAt}
            image={firstPost.titleImage}
            smallDescription={firstPost.smallDescription}
            title={firstPost.title}
          />
        </div>
        <div className=" lg:basis-3/5 flex justify-start flex-col">
          {restPosts.map((item, idx) => (
            <SmallNews
              key={`${item.title}-${idx}`}
              currentSlug={item.currentSlug}
              publishedAt={item.publishedAt}
              smallDescription={item.smallDescription}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Link
          href={links.news}
          className={` bg-gradient-to-r from-[#FF3E27] to-[#FF3061] mt-10 py-4 px-10 rounded-full shadow-lg text-white transition-all shadow-on-hover`}
        >
          Czytaj więcej
        </Link>
      </div>
    </section>
  );
};

export default NewsSectionHomePage;
