

import { Baloo_Chettan_2 } from "next/font/google";
import React, { FC } from "react";
import styles from "./Blob.module.scss";
import ServiceImg from "./ServiceImg";
import { Blob } from "@/ui/Blob/Blob";
import { StaticImageData } from "next/image";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IServiceRow {
    heading: string,
    text: string,
    src: StaticImageData,
    alt: string,
    isReversed?: boolean
}

export const ServiceRow: FC<IServiceRow> = ({ heading, text, src, alt, isReversed = false }) => {
    return (
        <div className={`${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex lg:justify-around z-10 lg:px-32 pt-48 pb-20  justify-center flex-col bg-transparent items-center`}>
            <Blob heading="Odwiedź nas" text="
Zapraszamy do świata niezapomnianych przygód i radosnej zabawy w naszym parku atrakcji dmuchanych! Jesteśmy miejscem, gdzie każde dziecko znajdzie coś dla siebie – od gigantycznych zjeżdżalni, przez labirynty, aż po interaktywne zamki i baseny z piłeczkami. Nasz park to idealne miejsce na rodzinną eskapadę, gdzie bezpieczeństwo i zabawa idą w parze." />
            <ServiceImg alt={alt} src={src} />
        </div>
    );
};
