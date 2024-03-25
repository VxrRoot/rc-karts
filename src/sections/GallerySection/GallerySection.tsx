"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

interface IGallerySection {
  images: {
    originalFilename: string;
    url: string;
    altText: string | null;
  }[];
}

const GallerySection: FC<IGallerySection> = ({ images }) => {
  const [showModal, setShowModal] = useState<null | number>(null);

  const handelChangePhoto = (direction: "next" | "prev") => {
    if (direction === "next") {
      if (showModal! < images.length - 1) setShowModal(showModal! + 1);
    } else {
      if (showModal! > 0) setShowModal(showModal! - 1);
    }
  };

  return (
    <section className="md:columns-2 px-4 lg:columns-4 max-w-7xl mx-auto">
      <div
        className={`${
          showModal !== null ? "flex opacty-1" : "hidden opacity-0"
        } fixed top-0 left-0 bottom-0 right-0 z-50 bg-black/75 transition-opacity duration-300`}
      >
        <span
          className="text-white absolute right-6 z-20 top-6 cursor-pointer"
          onClick={() => setShowModal(null)}
        >
          <X className="h-4 w-4" />
        </span>
        <div className="w-full px-8 lg:px-14 h-full absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {typeof showModal === "number" ? (
            <Image
              src={images[showModal!].url}
              alt="sss"
              width={800}
              height={800}
              className="max-h-full w-auto py-2 cursor-pointer object-cover transition-opacity opacity-0 duration-1000"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
          ) : (
            "err"
          )}
        </div>
        <span
          onClick={() => handelChangePhoto("next")}
          className="text-white absolute right-2 top-1/2 cursor-pointer"
        >
          <ArrowRight />
        </span>
        <span
          onClick={() => handelChangePhoto("prev")}
          className="text-white absolute left-2 top-1/2 cursor-pointer"
        >
          <ArrowLeft />
        </span>
      </div>
      {images.map((img: any, idx: number) => {
        //   return <ImageGallery key={idx} img={img} />;
        return (
          <Image
            key={idx}
            onClick={() => setShowModal(idx)}
            className="w-full h-auto py-2 cursor-pointer transition-opacity opacity-0 duration-1000"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            width={500}
            height={500}
            alt={img.alt ? img.alt : "zdjecie atrakcji"}
            src={img.url}
          />
        );
      })}
    </section>
  );
};

export default GallerySection;
