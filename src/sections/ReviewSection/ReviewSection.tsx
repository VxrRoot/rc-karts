import { FC } from "react";
import { Baloo_Chettan_2 } from "next/font/google";
import ReviewSlider from "./elements/ReviewSlider";
import { links } from "@/constants";
import Link from "next/link";
import { getOpinions } from "@/lib/query";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

async function ReviewSection() {
  const response = await getOpinions();
  const data = await [
    {
      author: "Test",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias aliquam recusandae praesentium placeat, aut eaque nobis non eius, fuga quae quidem vitae error necessitatibus!",
      link: "test",
      rating: 5,
    },
    {
      author: "Test",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias aliquam recusandae praesentium placeat, aut eaque nobis non eius, fuga quae quidem vitae error necessitatibus!",
      link: "test",
      rating: 5,
    },
    {
      author: "Test",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias aliquam recusandae praesentium placeat, aut eaque nobis non eius, fuga quae quidem vitae error necessitatibus!",
      link: "test",
      rating: 5,
    },
    {
      author: "Test",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias aliquam recusandae praesentium placeat, aut eaque nobis non eius, fuga quae quidem vitae error necessitatibus!",
      link: "test",
      rating: 5,
    },
  ];

  return (
    <section className="pt-16 px-4   lg:flex-row max-w-7xl mx-auto flex flex-col items-center justify-center pb-32">
      <div className="max-w-[50rem]">
        <h2 className="p-0 m-0 text-[#3F8D40] text-center lg:text-left font-semibold text-3xl">
          Jak bawili się nasi klienci
        </h2>
        <p className="py-10 font-semibold text-center lg:text-left text-xl pb-16 md:pr-8">
          Przez lata działalności naszego parku odwiedziły nas tysiące osób.
          Przeczytaj autentyczne opinie innych użytkowników i przekonaj się, że
          z nami ani Ty, ani Twoje dziecko na pewno nie będziecie sie nudzić!
        </p>
        <div className="w-full flex justify-start">
          <Link
            href={links.gallery}
            className={`bg-gradient-to-r from-[#FF3E27] to-[#FF3061] py-4 px-10 rounded-full shadow-lg text-white transition-all shadow-on-hover hidden lg:block text-nowrap`}
          >
            Wszystkie opinie
          </Link>
        </div>
      </div>
      <div className="lg:w-[40rem] w-full">
        <ReviewSlider elements={response} />
      </div>
      <Link
        href={links.review}
        className={`bg-gradient-to-r from-[#FF3E27] to-[#FF3061] py-4 px-10 rounded-full shadow-lg text-white transition-all shadow-on-hover block mt-8 lg:hidden text-nowrap w-100 md:w-auto`}
      >
        Wszystkie opinie
      </Link>
    </section>
  );
}

export default ReviewSection;
