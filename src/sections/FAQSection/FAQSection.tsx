import { getFAQ } from "@/lib/query";
import { Baloo_Chettan_2 } from "next/font/google";
import FAQAccordion from "./elements/FAQAccordion";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const FAQSection = async () => {
  const response = await getFAQ();

  return (
    <section className="mx-auto max-w-7xl py-20 mb-10">
      <h3
        className={`${baloo.className} text-center p-0 m-0 text-[#3F8D40] font-semibold text-4xl lg:text-5xl `}
      >
        Pytania i odpowiedzi
      </h3>
      <FAQAccordion data={response} />
    </section>
  );
};

export default FAQSection;
