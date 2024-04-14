"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Baloo_Chettan_2 } from "next/font/google";
import { FC } from "react";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IFAQAccordion {
  data: { answear: string; question: string }[];
}

const FAQAccordion: FC<IFAQAccordion> = ({ data }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className={`${baloo.className} mt-10 text-xl max-w-4xl mx-auto`}
    >
      {data.map((item) => {
        return (
          <AccordionItem
            className=" border-[#3F8D40] border-b-2"
            value={item.question}
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="text-lg ">
              {item.answear}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FAQAccordion;
