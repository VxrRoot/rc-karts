import { defaultPage, defaultPerPage } from "@/constants";
import { ISimplyNewsPost } from "@/lib/interfaces";
import { getNews } from "@/lib/query";
import HeroSection from "@/sections/HeroSection/HeroSection";
import NewsSection from "@/sections/NewsSection/NewsSection";
import Spinner from "@/ui/Loader/Spinner";
import PaginationControls from "@/ui/PaginationControls/PaginationControls";
import { NextPage } from "next";
import { Suspense } from "react";
import { PageProps } from "../../../.next/types/app/page";

export const revalidate = 3600;

const Page: NextPage<PageProps> = async ({ searchParams }) => {
  const page = searchParams["page"] ?? defaultPage;
  const perPage = searchParams["per_page"] ?? defaultPerPage;

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const data: ISimplyNewsPost[] = await getNews(end, start);

  return (
    <main>
      <HeroSection text="Aktualności" showImg={false} />
      <section className="max-w-7xl mx-auto px-4 mt-20 ">
        <h2 className="text-4xl">Co nowego?</h2>
        <Suspense fallback={<Spinner />}>
          <NewsSection data={data} />
        </Suspense>
      </section>
      <div className="pt-20">
        <PaginationControls
          hasPrevPage={start > 0}
          hasNextPage={data[0]?.count > page * perPage}
        />
      </div>
    </main>
  );
};

export default Page;
