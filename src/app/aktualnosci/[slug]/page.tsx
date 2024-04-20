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
        className={`relative h-[60vh] z-20 bg-cover bg-bottom soft-shadow -mt-[30px] lg:mt-0 bg-[url('../assets/contact-background.svg')]`}
      >
        <Image
          alt="Blog image"
          src={
            data[0].titleImage ? urlFor(data[0].titleImage).url() : empytBlogImg
          }
          priority
          className={`h-[60vh] w-full z-30 object-cover object-center brightness-[.4]`}
          width={2000}
          height={2000}
        />
      </section>
      <article
        className={`h-full pt-40 pb-20 mx-auto max-w-7xl relative lg:min-h-[500px] min-h-[300px] ${inter.className} `}
      >
        <Link className="flex cursor-pointer ml-4 w-20  " href={links.news}>
          <ArrowLeft className="w-4 h-auto mr-2" /> Wróć
        </Link>
        <h1 className="text-4xl px-4 pt-10 font-semibold">{data[0].title}</h1>
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
