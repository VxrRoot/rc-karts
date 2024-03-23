"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import testImg from "@/assets/hero.png";
import Image from "next/image";
import "./AttractionSection.scss";
// Default theme
import "@splidejs/react-splide/css";

const attractions = [
  {
    id: 1,
    title: "test1",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
    img: testImg,
  },
  {
    id: 2,
    title: "test2",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
    img: testImg,
  },
  {
    id: 3,
    title: "test3",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
    img: testImg,
  },
  {
    id: 4,
    title: "test4",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
    img: testImg,
  },
  {
    id: 5,
    title: "test6",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
    img: testImg,
  },
];

const AttractionSection = () => {
  return (
    <section className={`mb-20`}>
      <h2 className="p-0 m-0 text-[#3F8D40] font-semibold text-3xl pl-14 md:pl-32 xl:pl-44">
        Atrakcje
      </h2>
      <Splide
        options={{
          mediaQuery: "min",
          type: "slide",
          perPage: 1,
          perMove: 1,
          arrows: false,
          focus: 0,
          omitEnd: true,
          pagination: true,
          isNavigation: true,
          drag: "free",
          breakpoints: {
            1500: { perPage: 4.5, perMove: 4 },
            1200: { perPage: 3.5, perMove: 3, padding: { left: 150 } },
            860: { perPage: 2.5, perMove: 2, padding: { left: 100 } },
            480: { perPage: 1.5, perMove: 1, padding: { left: 30 } },
          },
        }}
        aria-label="Attraction slider"
        className="pt-0"
      >
        {attractions.map((item, idx) => (
          <SplideSlide key={item.id} className="py-10 text-white">
            <div className={`bg-primaryc shadow-xl rounded-3xl p-10 mx-4`}>
              <Image alt={item.title} src={item.img} className="rounded-lg" />
              <h4 className="pt-8 pb-6 font-semibold text-2xl">{item.title}</h4>
              <p className="font-medium">{item.desc}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default AttractionSection;
