"use client";
import Image from "next/image";
import { FC } from "react";

interface IImageGallery {
  img: any;
}

const ImageGallery: FC<IImageGallery> = ({ img }) => {
  return (
    <Image
      className="w-full h-auto py-2 cursor-pointer transition-opacity opacity-0 duration-1000"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      width={500}
      height={500}
      alt={img.alt ? img.alt : "zdjecie atrakcji"}
      src={img.url}
    />
  );
};

export default ImageGallery;
