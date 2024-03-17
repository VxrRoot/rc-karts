import Loader from "@/ui/Loader/Loader";
import { Baloo_Chettan_2 } from "next/font/google";
import React from "react";
import { Blob } from "@/ui/Blob/Blob";
import ServiceImg from "./ServiceImg";
import serviceImg1 from "@/assets/services1.jpg";
import serviceImg2 from "@/assets/services2.jpg";
import serviceImg3 from "@/assets/cake.svg";
import { ServiceRow } from "./ServiceRow";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const ServicesSection = () => {
    return (
        <section className="flex flex-col">
            <ServiceRow
                src={serviceImg1}
                alt="Wejscie do parku dmuchańców"
                heading="Odwiedz nas"
                text="
Zapraszamy do świata niezapomnianych przygód i radosnej zabawy w naszym parku atrakcji dmuchanych! Jesteśmy miejscem, gdzie każde dziecko znajdzie coś dla siebie – od gigantycznych zjeżdżalni, przez labirynty, aż po interaktywne zamki i baseny z piłeczkami. Nasz park to idealne miejsce na rodzinną eskapadę, gdzie bezpieczeństwo i zabawa idą w parze." />
            <ServiceRow
                src={serviceImg2}
                alt="Wejscie do parku dmuchańców"
                heading="Odwiedz nas"
                isReversed={true}
                text="
Zapraszamy do świata niezapomnianych przygód i radosnej zabawy w naszym parku atrakcji dmuchanych! Jesteśmy miejscem, gdzie każde dziecko znajdzie coś dla siebie – od gigantycznych zjeżdżalni, przez labirynty, aż po interaktywne zamki i baseny z piłeczkami. Nasz park to idealne miejsce na rodzinną eskapadę, gdzie bezpieczeństwo i zabawa idą w parze." />
            <ServiceRow
                src={serviceImg3}
                alt="Wejscie do parku dmuchańców"
                heading="Odwiedz nas"
                text="
Zapraszamy do świata niezapomnianych przygód i radosnej zabawy w naszym parku atrakcji dmuchanych! Jesteśmy miejscem, gdzie każde dziecko znajdzie coś dla siebie – od gigantycznych zjeżdżalni, przez labirynty, aż po interaktywne zamki i baseny z piłeczkami. Nasz park to idealne miejsce na rodzinną eskapadę, gdzie bezpieczeństwo i zabawa idą w parze." />
        </section >
    );
};

export default ServicesSection;
