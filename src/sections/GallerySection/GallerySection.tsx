import { links } from "@/constants";
import { getHomePageImages } from "@/lib/query";
import { Baloo_Chettan_2 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./GallerySection.scss";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

async function GallerySection() {
  const data = await getHomePageImages();

  return (
    <section className={`py-32 overflow-hidden`}>
      <div className="w-full py-5 inline-flex overflow-hidden flex-nowrap photos -rotate-3 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {data[0].images.map((item: any, idx: number) => (
            <li key={idx} className={`shadow-xl w-96 h-56`}>
              <Image
                alt={"Photo"}
                src={item.url}
                width={384}
                height={224}
                className="object-cover w-full h-full"
              />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {data[0].images.map((item: any, idx: number) => (
            <li key={idx} className={`shadow-xl w-96 h-56`}>
              <Image
                alt={"Photo"}
                src={item.url}
                width={384}
                height={224}
                className="object-cover w-full h-full"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex z-50 relative justify-center">
        <Link
          href={links.gallery}
          className="bg-primaryc mt-10 py-4 px-10 rounded-2xl text-white cursor-pointer"
        >
          Zobacz wszystkie zdjęcia
        </Link>
      </div>
    </section>
  );
}

export default GallerySection;
