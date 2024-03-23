import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import serviceImg from "@/assets/services1.jpg";
import styles from "./Service.module.scss";


interface IServiceImage {
    src: StaticImageData,
    alt: string,
    reversedShadow?: boolean
}

const ServiceImage: FC<IServiceImage>  = ({ src, alt,reversedShadow =false}) => {
  return (
    <Image
      alt={alt}
      src={src}
      priority
      className={`${reversedShadow ? styles.reversed : styles.image} w-screen md:w-[30rem] h-auto rounded-3xl`}
    />
  );
};

export default ServiceImage;