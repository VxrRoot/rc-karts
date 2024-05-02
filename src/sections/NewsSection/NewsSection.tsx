import { ISimplyNewsPost } from "@/lib/interfaces";
import { FC } from "react";
import SmallNews from "./NewsSectionHomePage/elements/SmallNews";

interface pageProps {
  data: ISimplyNewsPost[];
}

const NewsSection: FC<pageProps> = ({ data }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
      {data.map((item, idx) => (
        <SmallNews
          key={`${item.title}-${idx}`}
          currentSlug={item.currentSlug}
          publishedAt={item.publishedAt}
          smallDescription={item.smallDescription}
          title={item.title}
        />
      ))}
    </section>
  );
};

export default NewsSection;
