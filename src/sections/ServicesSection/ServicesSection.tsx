"use client";
import Loader from "@/ui/Loader/Loader";
import { Baloo_Chettan_2 } from "next/font/google";
import React, { useEffect } from "react";
import serviceImg1 from "@/assets/inflatable.svg";
import serviceImg2 from "@/assets/inflatable2.svg";
import serviceImg3 from "@/assets/cake.svg";
import { ServiceRow } from "./ServiceRow";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });
const fill = "#bce7b6";
const fill2 = "#00ff261f";

const ServicesSection = () => {
  useEffect(() => {
    const blob = document.querySelector("#blob");
    const targets = document.querySelectorAll(".trigger");
    let currentState = 1;

    const positions = {
      wide: {
        service1: { left: "10%", top: "5%" },
        service2: { left: "10%", top: "35%" },
        service3: { left: "10%", top: "65%" },
      },
      medium: {
        service1: { left: "-10%", top: "5%" },
        service2: { left: "-10%", top: "35%" },
        service3: { left: "-10%", top: "65%" },
      },
      narrow: {
        service1: { left: "-35%", top: "5%" },
        service2: { left: "-35%", top: "32%" },
        service3: { left: "-35%", top: "65%" },
      },
    };
    const viewportWidth = window.innerWidth;

    const currentPositions =
      viewportWidth >= 1300
        ? positions.wide
        : viewportWidth >= 768
        ? positions.medium
        : positions.narrow;

    const { left, top } = currentPositions.service1;

    if (blob) {
      blob.animate(
        [
          { transform: "scaleY(1)", rotate: 0 },
          { transform: "scaleY(2) scaleX(.9)" },
          { transform: "scaleY(1)", left: left, top: top },
        ],
        {
          duration: 1500,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              entry.target.classList.contains("service1") &&
              currentState !== 1
            ) {
              currentState = 1;
              const { left, top } = currentPositions.service1;
              if (blob) {
                blob.animate(
                  [
                    { transform: "scaleY(1)" },
                    { transform: "scaleY(2) scaleX(.9)" },
                    { transform: "scaleY(1)", left: left, top: top },
                  ],
                  {
                    duration: 1500,
                    fill: "forwards",
                    easing: "ease-out",
                  }
                );
              }
            } else if (
              entry.target.classList.contains("service2") &&
              currentState !== 2
            ) {
              currentState = 2;
              const { left, top } = currentPositions.service2;
              if (blob) {
                blob.animate(
                  [
                    { transform: "scaleY(1)" },
                    { transform: "scaleY(2) scaleX(.9)" },
                    { transform: "scaleY(1)", left: left, top: top },
                  ],
                  {
                    duration: 1500,
                    fill: "forwards",
                    easing: "ease-out",
                  }
                );
              }
            } else if (
              entry.target.classList.contains("service3") &&
              currentState !== 3
            ) {
              currentState = 3;
              const { left, top } = currentPositions.service3;
              if (blob) {
                blob.animate(
                  [
                    { transform: "scaleY(1)" },
                    { transform: "scaleY(2) scaleX(.9)" },
                    { transform: "scaleY(1)", left: left, top: top },
                  ],
                  {
                    duration: 1500,
                    fill: "forwards",
                    easing: "ease-out",
                  }
                );
              }
            }

            entry.target.classList.add("animated");
          }
        });
      },
      {
        threshold: [viewportWidth >= 1000 ? 0.5 : 0.1],
      }
    );

    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="flex flex-col items-center  overflow-hidden relative pt-40 -mt-32">
      <svg
        id="blob"
        className="rotate-45 md:translate-x-0 translate-x-1/4 absolute w-[50rem] h-[50rem] z-10 "
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        <path fill="url(#Gradient1)">
          <animate
            repeatCount="indefinite"
            dur="16s"
            attributeName="d"
            values="
M696.194 45.0455C839.4 105.861 1012.59 394.455 996.992 546.346C981.397 698.236 751.009 925.232 602.621 956.389C454.233 987.547 184.14 862.447 106.663 733.291C29.1848 604.134 39.4994 296.158 137.755 181.451C236.01 66.7431 552.988 -15.7704 696.194 45.0455Z;

M681.785 78.4576C821.331 136.985 1004.51 405.67 989.893 545.684C975.281 685.697 736.841 889.923 594.11 918.537C451.379 947.151 207.091 838.038 133.508 717.368C59.9263 596.699 61.2373 301.005 152.617 194.52C243.996 88.0351 542.239 19.9303 681.785 78.4576Z;

M669.794 106.264C787.26 157.109 912.726 400.998 900.326 537.331C887.927 673.664 722 894.967 595.397 924.262C468.794 953.556 207.351 828.433 140.707 713.099C74.0626 597.765 107.351 333.398 195.532 232.259C283.713 131.12 552.328 55.4185 669.794 106.264Z;

M688.083 63.8525C805.431 114.152 917.73 387.944 903.699 537.646C889.668 687.348 735.296 930.313 603.897 962.066C472.498 993.82 182.685 849.201 115.305 728.165C47.9242 607.129 104.151 346.567 199.614 235.848C295.077 125.129 570.736 13.5528 688.083 63.8525Z;

M697.919 41.0443C820.464 92.2777 946.231 382.754 931.454 540.234C916.678 697.714 749.678 951.997 609.262 985.923C468.845 1019.85 157.8 869.309 88.9542 743.794C20.1082 618.279 94.6917 349.959 196.186 232.834C297.68 115.709 575.375 -10.1891 697.919 41.0443Z;

M678.326 86.4794C812.365 147.673 947.381 405.067 932.58 540.339C917.778 675.612 721.591 869.265 589.518 898.114C457.445 926.963 217.004 834.256 140.142 713.434C63.2805 592.612 38.6511 277.672 128.348 173.179C218.046 68.6867 544.288 25.286 678.326 86.4794Z;

M694.502 48.9694C824.456 110.282 920.571 390.935 904.251 537.697C887.931 684.459 721.504 901.694 596.584 929.541C471.664 957.389 233.408 831.401 154.731 704.781C76.0551 578.16 34.5653 279.121 124.527 169.819C214.489 60.5168 564.548 -12.3438 694.502 48.9694Z;

M658.489 132.479C794.915 188.363 998.834 410.035 989.131 545.613C979.428 681.19 751.316 912.311 600.272 945.943C449.228 979.575 154.483 870.01 82.8666 747.404C11.2503 624.799 74.6374 312.799 170.574 210.312C266.512 107.824 522.063 76.5957 658.489 132.479Z;

M668.534 109.186C803.783 162.978 1009.95 413.037 997.197 546.365C984.441 679.693 746.463 874.417 592 909.154C437.537 943.891 138.134 869.045 70.4179 754.788C2.70129 640.531 86.0143 331.213 185.7 223.613C285.386 116.013 533.285 55.3939 668.534 109.186Z;

M686.832 66.7543C817.189 118.733 994.699 407.292 978.197 544.593C961.695 681.894 738.319 856.003 587.819 890.562C437.32 925.122 140.494 861.591 75.201 751.951C9.90749 642.311 94.1202 346.921 196.059 232.722C297.997 118.523 556.476 14.7758 686.832 66.7543Z;

M697.746 41.4453C821.581 92.3493 960.546 397.962 942.629 541.276C924.711 684.591 731.474 868.2 590.241 901.332C449.009 934.464 160.338 850.982 95.2342 740.069C30.1305 629.156 99.2 352.29 199.619 235.852C300.037 119.415 573.911 -9.45862 697.746 41.4453Z;

M691.947 54.894C811.01 105.871 925.736 391.563 910.044 538.238C894.353 684.912 729.068 903.989 597.798 934.94C466.528 965.891 189.447 841.035 122.426 723.942C55.404 606.848 100.748 343.886 195.668 232.378C290.588 120.87 572.884 3.91749 691.947 54.894Z;

M696.194 45.0455C839.4 105.861 1012.59 394.455 996.992 546.346C981.397 698.236 751.009 925.232 602.621 956.389C454.233 987.547 184.14 862.447 106.663 733.291C29.1848 604.134 39.4994 296.158 137.755 181.451C236.01 66.7431 552.988 -15.7704 696.194 45.0455Z
"
          />
        </path>
        <defs>
          <linearGradient id="Gradient1">
            <stop offset="0%" stopColor="var(--primaryc)" />
            <stop offset="100%" stopColor="var(--primaryc-darker)" />
          </linearGradient>
        </defs>
      </svg>
      <ServiceRow
        src={serviceImg1}
        alt="Wejscie do parku zabaw dmuchańców "
        heading="Odwiedz nas"
        addtionalClassName="service1"
        text="
Zapraszamy do świata niezapomnianych przygód i radosnej zabawy w naszym parku atrakcji dmuchanych! Jesteśmy miejscem, gdzie każde dziecko znajdzie coś dla siebie – od gigantycznych zjeżdżalni, przez labirynty, aż po interaktywne zamki i baseny z piłeczkami. Nasz park to idealne miejsce na rodzinną eskapadę, gdzie bezpieczeństwo i zabawa idą w parze."
      />

      <ServiceRow
        src={serviceImg2}
        alt="Wynajem dmuchańców"
        heading="Wynajem atrakcji"
        addtionalClassName="service2"
        text="
                Planujesz wydarzenie, które ma zapisać się złotymi zgłoskami w pamięci uczestników? Chcesz, aby Twoja impreza firmowa, festyn, urodziny dziecka, piknik rodzinny lub jakiekolwiek inne zgromadzenie stało się niezapomnianym przeżyciem? Mamy dla Ciebie idealne rozwiązanie – wynajem atrakcji dmuchanych, który gwarantuje radosną zabawę dla dzieci i dorosłych!"
      />
      <ServiceRow
        src={serviceImg3}
        addtionalClassName="service3"
        alt="Organizajca urodzin Jedlicze"
        heading="Organizacja urodzin"
        scaleImage={true}
        text="
                Organizacja urodzin dla dziecka może być prawdziwą przygodą i niezapomnianym przeżyciem – zarówno dla solenizanta, jak i jego gości. Jeśli chcesz, aby ta wyjątkowa okazja na długo pozostała w pamięci wszystkich uczestników, nasza oferta organizacji urodzin z wykorzystaniem atrakcji dmuchanych jest właśnie dla Ciebie!"
      />

      <svg
        className="absolute top-[20rem] -right-[60rem] lg:-right-[60rem] scale-50 lg:scale-100"
        xmlns="http://www.w3.org/2000/svg"
        width="1550"
        height="1364"
        viewBox="0 0 1550 1364"
        fill="none"
      >
        <path
          d="M205.653 867.169C-73.5279 667.847 276.653 425.987 282.02 414.764C432.717 319.17 509.071 246.8 894.617 192.886C1280.16 138.971 1196.24 222.02 1034.57 489.503C872.888 756.986 1108.41 744.622 839.397 1092.77C570.383 1440.92 484.833 1066.49 205.653 867.169Z"
          fill={fill2}
        />
        <path
          d="M283.627 850.926C4.44675 651.604 354.627 409.744 359.994 398.521C510.691 302.927 587.046 230.557 972.591 176.643C1358.14 122.728 1274.22 205.777 1112.54 473.26C950.863 740.743 1186.39 728.379 917.371 1076.53C648.358 1424.68 562.807 1050.25 283.627 850.926Z"
          fill={fill}
        />
      </svg>

      <svg
        className="absolute top-[50rem] -left-[60rem] origin-center scale-50 lg:scale-100"
        xmlns="http://www.w3.org/2000/svg"
        width="1455"
        height="1584"
        viewBox="0 0 1455 1584"
        fill="none"
      >
        <path
          d="M1098.06 400.764C1440.45 421.647 1271.89 812.426 1273.29 824.787C1196.25 985.76 1169.91 1087.61 871.667 1337.82C573.429 1588.03 600.516 1473.12 595.692 1160.61C590.869 848.094 397.769 983.504 441.148 545.675C484.527 107.846 755.661 379.881 1098.06 400.764Z"
          fill={fill2}
        />
        <path
          d="M1067.76 319.905C1410.15 340.789 1241.59 731.568 1242.99 743.929C1165.95 904.901 1139.61 1006.75 841.367 1256.96C543.128 1507.18 570.215 1392.26 565.392 1079.75C560.568 767.236 367.468 902.646 410.847 464.817C454.226 26.9876 725.36 299.022 1067.76 319.905Z"
          fill={fill}
        />
      </svg>
    </section>
  );
};

export default ServicesSection;
