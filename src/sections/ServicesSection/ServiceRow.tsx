import { Baloo_Chettan_2 } from "next/font/google";
import React, { FC } from "react";
import styles from "./Blob.module.scss";
import ServiceImg from "./ServiceImg";
import { Blob } from "@/ui/Blob/Blob";
import { StaticImageData } from "next/image";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IServiceRow {
  heading: string;
  text: string;
  src: StaticImageData;
  alt: string;
  isReversed?: boolean;
  addtionalClassName: string;
  scaleImage?: boolean;
}

export const ServiceRow: FC<IServiceRow> = ({
  heading,
  text,
  src,
  alt,
  isReversed = false,
  addtionalClassName,
  scaleImage = false,
}) => {
  return (
    <div
      data-aos="fade-up"
      className={`lg:flex-row flex lg:justify-around z-10 max-w-7xl w-full py-20 service justify-center flex-col bg-transparent items-center`}
    >
      <div className={`${addtionalClassName} trigger`}>
      <Blob heading={heading} text={text} />
      </div>
      <div className={`${scaleImage ? "scale-75" : ""}`}>
        <ServiceImg alt={alt} src={src} reversedShadow={isReversed} />
      </div>
    </div>
  );
};
