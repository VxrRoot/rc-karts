import { links } from "@/constants";
import { getSingleNews } from "@/lib/query";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import empytBlogImg from "../../../assets/single-blog-post.svg";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  const data: { currentSlug: string }[] =
    await client.fetch(`*[_type == "news"] | order(_createdAt desc) {
    "currentSlug": slug.current,
  }`);

  return data.map(({ currentSlug }) => currentSlug);
}

const SingleNews = async ({ params }: { params: { slug: string } }) => {
  const data = await getSingleNews(params.slug);

  return (
    <main>
      <section
        className={`relative h-[70rem] w-full z-20 bg-cover bg-bottom soft-shadow -mt-[10rem] mask`}
      >
        <Image
          alt="Blog image"
          src={
            data[0].titleImage ? urlFor(data[0].titleImage).url() : empytBlogImg
          }
          priority
          className={`w-full h-[70rem] z-30 object-cover object-center brightness-[.4]`}
          width={2000}
          height={2000}
        />
        <h1 className="text-4xl px-4  w-full font-bold text-center text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{data[0].title}</h1>
      </section>
      <article
        className={`h-full -mt-48 pb-20 mx-auto max-w-7xl z-50 relative lg:min-h-[500px] min-h-[300px] ${inter.className} `}
      >
        <Link className="flex cursor-pointer ml-4" href={links.news}>
          <ArrowLeft className="w-4 h-auto mr-2" /> Wszystkie aktualności
        </Link>

        <div
          className={`mt-16 prose prose-lg px-4 prose-blue w-full max-w-7xl flex flex-col ${inter.className}`}
        >
          <PortableText value={data[0].content} components={components} />
        </div>
      </article>
    </main>
  );
};

// Komponent dla obrazów
const ImageComponent = ({ value }: any) => {
  return <Image src={urlFor(value).url()} alt={value.alt || " "} />;
};

// Mapowanie komponentów
const components = {
  types: {
    image: ImageComponent,
  },
};

export default SingleNews;
