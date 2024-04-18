import HeroSection from "@/sections/HeroSection/HeroSection";
import NewsSection from "@/sections/NewsSection/NewsSection";
import Spinner from "@/ui/Loader/Spinner";
import PaginationControls from "@/ui/PaginationControls/PaginationControls";
import { NextPage } from "next";
import { Suspense } from "react";
import { PageProps } from "../../../.next/types/app/page";

export const defaultPage = "1";
export const defaultPerPage = "2";

const Page: NextPage<PageProps> = ({ searchParams }) => {
  const page = searchParams["page"] ?? defaultPage;
  const perPage = searchParams["per_page"] ?? defaultPerPage;

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  return (
    <main>
      <HeroSection text="Aktualności" showImg={false} />
      <section className="max-w-7xl mx-auto px-4 mt-20 ">
        <h2 className="text-4xl">Sprawdź co u nas</h2>
        <Suspense fallback={<Spinner />}>
          <NewsSection end={end} start={start} />
        </Suspense>
      </section>
      <div className="pt-20">
        <PaginationControls hasPrevPage={start > 0} hasNextPage={true} />
      </div>
    </main>
  );
};

export default Page;
