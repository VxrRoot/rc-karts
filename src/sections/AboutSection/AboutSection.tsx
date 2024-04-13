import React from "react";
import Image from "next/image";
import goCartImg from "../../assets/gokart.svg";
import { Baloo_Chettan_2 } from "next/font/google";
import Race from "./elements/Race";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const AboutSection = () => {
  return (
    <section
      className={`flex px-8 soft-shadow flex-col items-center -mt-[10rem] lg:-mt-32 2xl:-mt-40 relative bg-cover bg-center z-30 bg-[url('../assets/about-background.svg')] w-full pb-[25rem]`}
    >
      <Image
        alt="go-cart image"
        src={goCartImg}
        className="-mt-6 lg:-mt-18 w-48 h-auto"
      />
      <div className="text-white mt-28 flex flex-col items-center ">
        <div className="flex lg:flex-row flex-col items-center justify-center">
          <div className={`${baloo.className} max-w-[600px] mt-10 text-xl `}>
            <h2 className={`${baloo.className} mb-5 text-4xl font-bold`}>
              Gokarty RC KARTS
            </h2>
            <p>
              Nasza główna atrakcja czyli przyjazne dla Dzieci Modele RC Karts:
              Wybierz spośród naszych kolorowych i bezpiecznych gokartów RC,
              zaprojektowanych specjalnie z myślą o młodszych użytkownikach.
              Nasze modele są łatwe w obsłudze, co czyni je idealnymi dla
              dzieci, które dopiero zaczynają swoją przygodę z RC. Z naszymi
              gokartami Twoje dziecko odkryje radość z jazdy i rywalizacji,
              rozwijając przy tym swoje umiejętności manualne i koordynację.
            </p>
          </div>
          <div className="md:min-w-[30rem] w-full">
            <Race></Race>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
