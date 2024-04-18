"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { defaultPage, defaultPerPage, links } from "@/constants";
import { useSearchParams, useRouter } from "next/navigation";
import React, { FC } from "react";

interface IPaginationControls {
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const PaginationControls: FC<IPaginationControls> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? defaultPage;
  const perPage = searchParams.get("per_page") ?? defaultPerPage;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`${
              hasPrevPage ? "cursor-pointer" : "pointer-events-none opacity-50"
            }`}
            aria-disabled="true"
            onClick={() =>
              router.push(
                `${links.news}/?page=${Number(page) - 1}&per_page=${perPage}`
              )
            }
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={`${
              hasNextPage ? "cursor-pointer" : "pointer-events-none opacity-50"
            }`}
            onClick={() =>
              router.push(
                `${links.news}/?page=${Number(page) + 1}&per_page=${perPage}`
              )
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControls;
