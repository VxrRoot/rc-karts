import { FC } from "react";
import { Baloo_Chettan_2 } from "next/font/google";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const LocationSection: FC = () => {
  return (
    <section id="location" className="pt-16">
      <h3
        className={`${baloo.className} text-center p-0 m-0 text-[#3F8D40] font-semibold text-4xl lg:text-5xl `}
      >
        Gdzie nas znaleźć?
      </h3>
      <div className="p-4 lg:p-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.097873421536!2d21.639628899999998!3d49.7089591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c540dc4fe73cd%3A0xd2f5e675640d780d!2sRC%20KART%20Dmucha%C5%84ce!5e0!3m2!1spl!2spl!4v1713106105043!5m2!1spl!2spl"
          className="w-full h-[600px] soft-shadow mt-10 rounded-xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default LocationSection;
