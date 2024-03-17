import Loader from "@/ui/Loader/Loader";
import { Baloo_Chettan_2 } from "next/font/google";
import React from "react";
import { Blob } from "@/ui/Blob/Blob";
import ServiceImg from "./ServiceImg";
import serviceImg1 from "@/assets/services1.png";
import serviceImg2 from "@/assets/services2.png";
import serviceImg3 from "@/assets/cake.svg";
import { ServiceRow } from "./ServiceRow";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const ServicesSection = () => {
    return (
        <section className="flex flex-col items-center  overflow-hidden relative pt-40 -mt-64">
            <ServiceRow
                src={serviceImg1}
                alt="Wejscie do parku dmuchańców"
                heading="Odwiedz nas"
                text="
Zapraszamy do świata niezapomnianych przygód i radosnej zabawy w naszym parku atrakcji dmuchanych! Jesteśmy miejscem, gdzie każde dziecko znajdzie coś dla siebie – od gigantycznych zjeżdżalni, przez labirynty, aż po interaktywne zamki i baseny z piłeczkami. Nasz park to idealne miejsce na rodzinną eskapadę, gdzie bezpieczeństwo i zabawa idą w parze." />
            <ServiceRow
                src={serviceImg2}
                alt="Wejscie do parku dmuchańców"
                heading="Wynajem atrakcji"
                isReversed={true}
                text="
                Planujesz wydarzenie, które ma zapisać się złotymi zgłoskami w pamięci uczestników? Chcesz, aby Twoja impreza firmowa, festyn, urodziny dziecka, piknik rodzinny lub jakiekolwiek inne zgromadzenie stało się niezapomnianym przeżyciem? Mamy dla Ciebie idealne rozwiązanie – wynajem atrakcji dmuchanych, który gwarantuje radosną zabawę dla dzieci i dorosłych!" />
            <ServiceRow
                src={serviceImg3}
                alt="Wejscie do parku dmuchańców"
                heading="Organizacja urodzin"
                text="
                Organizacja urodzin dla dziecka może być prawdziwą przygodą i niezapomnianym przeżyciem – zarówno dla solenizanta, jak i jego gości. Jeśli chcesz, aby ta wyjątkowa okazja na długo pozostała w pamięci wszystkich uczestników, nasza oferta organizacji urodzin z wykorzystaniem atrakcji dmuchanych jest właśnie dla Ciebie!" />

                <svg className="absolute -top-[50rem] -left-[60rem] origin-center scale-50 lg:scale-100" xmlns="http://www.w3.org/2000/svg" width="1455" height="1584" viewBox="0 0 1455 1584" fill="none">
                    <path d="M1098.06 400.764C1440.45 421.647 1271.89 812.426 1273.29 824.787C1196.25 985.76 1169.91 1087.61 871.667 1337.82C573.429 1588.03 600.516 1473.12 595.692 1160.61C590.869 848.094 397.769 983.504 441.148 545.675C484.527 107.846 755.661 379.881 1098.06 400.764Z" fill="#E4F5D8" />
                    <path d="M1067.76 319.905C1410.15 340.789 1241.59 731.568 1242.99 743.929C1165.95 904.901 1139.61 1006.75 841.367 1256.96C543.128 1507.18 570.215 1392.26 565.392 1079.75C560.568 767.236 367.468 902.646 410.847 464.817C454.226 26.9876 725.36 299.022 1067.76 319.905Z" fill="#D5FDD4" />
                </svg>

                <svg className="absolute top-[20rem] -right-[60rem] lg:-right-[60rem] scale-50 lg:scale-100" xmlns="http://www.w3.org/2000/svg" width="1550" height="1364" viewBox="0 0 1550 1364" fill="none">
                    <path d="M205.653 867.169C-73.5279 667.847 276.653 425.987 282.02 414.764C432.717 319.17 509.071 246.8 894.617 192.886C1280.16 138.971 1196.24 222.02 1034.57 489.503C872.888 756.986 1108.41 744.622 839.397 1092.77C570.383 1440.92 484.833 1066.49 205.653 867.169Z" fill="#E4F5D8" />
                    <path d="M283.627 850.926C4.44675 651.604 354.627 409.744 359.994 398.521C510.691 302.927 587.046 230.557 972.591 176.643C1358.14 122.728 1274.22 205.777 1112.54 473.26C950.863 740.743 1186.39 728.379 917.371 1076.53C648.358 1424.68 562.807 1050.25 283.627 850.926Z" fill="#D5FDD4" />
                </svg>

                <svg className="absolute top-[50rem] -left-[60rem] origin-center scale-50 lg:scale-100" xmlns="http://www.w3.org/2000/svg" width="1455" height="1584" viewBox="0 0 1455 1584" fill="none">
                    <path d="M1098.06 400.764C1440.45 421.647 1271.89 812.426 1273.29 824.787C1196.25 985.76 1169.91 1087.61 871.667 1337.82C573.429 1588.03 600.516 1473.12 595.692 1160.61C590.869 848.094 397.769 983.504 441.148 545.675C484.527 107.846 755.661 379.881 1098.06 400.764Z" fill="#E4F5D8" />
                    <path d="M1067.76 319.905C1410.15 340.789 1241.59 731.568 1242.99 743.929C1165.95 904.901 1139.61 1006.75 841.367 1256.96C543.128 1507.18 570.215 1392.26 565.392 1079.75C560.568 767.236 367.468 902.646 410.847 464.817C454.226 26.9876 725.36 299.022 1067.76 319.905Z" fill="#D5FDD4" />
                </svg>

                <svg className="absolute top-[100rem] -right-[60rem] rotate-45 scale-50 lg:scale-100" xmlns="http://www.w3.org/2000/svg" width="1550" height="1364" viewBox="0 0 1550 1364" fill="none">
                    <path d="M205.653 867.169C-73.5279 667.847 276.653 425.987 282.02 414.764C432.717 319.17 509.071 246.8 894.617 192.886C1280.16 138.971 1196.24 222.02 1034.57 489.503C872.888 756.986 1108.41 744.622 839.397 1092.77C570.383 1440.92 484.833 1066.49 205.653 867.169Z" fill="#E4F5D8" />
                    <path d="M283.627 850.926C4.44675 651.604 354.627 409.744 359.994 398.521C510.691 302.927 587.046 230.557 972.591 176.643C1358.14 122.728 1274.22 205.777 1112.54 473.26C950.863 740.743 1186.39 728.379 917.371 1076.53C648.358 1424.68 562.807 1050.25 283.627 850.926Z" fill="#D5FDD4" />
                </svg>

                

        </section >
    );
};

export default ServicesSection;
