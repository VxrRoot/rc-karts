import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import serviceImg from "@/assets/services1.jpg";


interface IServiceImage {
    src: StaticImageData,
    alt: string,

}

const ServiceImage: FC<IServiceImage>  = ({ src, alt }) => {
  return (
    <Image
      alt="alt"
      src={src}
      priority
      className="w-[40rem] h-auto rounded-3xl"
    />
  );
};

export default ServiceImage;