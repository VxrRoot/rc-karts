import React from "react";
import Image from "next/image";
import goCartImg from "../../assets/gokart.svg";
import { Baloo_Chettan_2 } from "next/font/google";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const AboutSection = () => {
  return (
    <section
      className={`flex px-8 flex-col items-center -mt-28 lg:-mt-28 2xl:-mt-40 3x relative bg-cover bg-center z-30 bg-[url('../assets/about-background.svg')] w-full min-h-[1000px] lg:min-h-[900px]`}
    >
      <Image
        alt="go-cart image"
        src={goCartImg}
        className="-mt-6 lg:-mt-18 w-48 h-auto"
      />
      <div className="text-white mt-28 flex flex-col items-center">
        <h2 className={`${baloo.className} text-center text-4xl font-bold`}>
          SAMOCHODZIKI RC KARTS
        </h2>
        <p className="max-w-[600px] mt-10 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
