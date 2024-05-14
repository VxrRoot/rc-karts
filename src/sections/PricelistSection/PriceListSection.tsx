import { getPricelist } from "@/lib/query";
import { Baloo_Chettan_2 } from "next/font/google";
import React from "react";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const PriceListSection = async () => {
  const response = await getPricelist();

  const data = response[0];

  return (
    <section className="mt-16 max-w-7xl xl:mx-auto text-2xl rounded-xl mx-4">
      <div
        className={` flex flex-col lg:flex-row justify-between ${baloo.className} border-b-2 py-4 px-2 border-black`}
      >
        <p className={``}>
          Wynajem zjeżdżalni impreza prywatna do 8 godzin bez obsługi <br />
          <sub>*Cena orientacyjna, może sie różnić w zależności od indywidualnych ustaleń</sub>
        </p>
        <p className="whitespace-nowrap lg:ml-4 ml-auto">
          {data.wynajemPriv} zł
        </p>
      </div>
      <div
        className={` flex flex-col lg:flex-row justify-between ${baloo.className} border-b-2 py-4 px-2 border-black`}
      >
        <p
          className={``}
        >{`Gokarty 1 żeton ( czas jazdy ${data.Gokarty.czas} min )`}</p>
        <p className="whitespace-nowrap lg:ml-4 ml-auto">
          {data.Gokarty.cena} zł
        </p>
      </div>
      <div
        className={` flex flex-col lg:flex-row justify-between ${baloo.className} border-b-2 py-4 px-2 border-black`}
      >
        <p className={``}>{`Kula wodna ( ${data.KulaWodna.czas} min )`}</p>
        <p className="whitespace-nowrap lg:ml-4 ml-auto">
          {data.KulaWodna.cena} zł
        </p>
      </div>
      <div
        className={`flex flex-col lg:flex-row justify-between ${baloo.className} border-b-2 py-4 px-2 border-black`}
      >
        <p
          className={``}
        >{`Walec wodny (max 2 osoby w 1 walcu) ( ${data.walecWodny.czas} min )`}</p>
        <p className="whitespace-nowrap lg:ml-4 ml-auto">
          {`${data.KulaWodna.cena} zł (od jednej osoby)`}
        </p>
      </div>
      <div
        className={` flex flex-col lg:flex-row justify-between ${baloo.className} border-b-2 py-4 px-2 border-black`}
      >
        <p className={``}>Wejście na dmuchańce pt-nd-święta</p>
        <p className="whitespace-nowrap flex flex-col lg:ml-4 ml-auto">
          <span className="p-0 m-0">{`1 godzina: ${data.ZjezdzalniePtNd.oneHour} zł`}</span>
          <span>{`2 godziny: ${data.ZjezdzalniePtNd.twoHours} zł`}</span>
          <span>{`Bez limitu: ${data.ZjezdzalniePtNd.noLimit} zł`}</span>
        </p>
      </div>
      <div
        className={` flex flex-col lg:flex-row justify-between ${baloo.className} py-4 px-2 border-black`}
      >
        <p className={``}>Wejście na dmuchańce pon-czw</p>
        <p className="whitespace-nowrap flex flex-col lg:ml-4 ml-auto">
          <span className="p-0 m-0">{`1 godzina: ${data.ZjezdzalniePonCzw.oneHour} zł`}</span>
          <span>{`2 godziny: ${data.ZjezdzalniePonCzw.twoHours} zł`}</span>
          <span>{`Bez limitu: ${data.ZjezdzalniePonCzw.noLimit} zł`}</span>
        </p>
      </div>
    </section>
  );
};

export default PriceListSection;
