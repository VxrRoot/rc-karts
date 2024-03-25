import { getGalleryImages } from "@/lib/query";
import GallerySection from "@/sections/GallerySection/GallerySection";
import HeroSection from "@/sections/HeroSection/HeroSection";

export const revalidate = 0;

const page = async () => {
  const imagesData = await getGalleryImages();

  return (
    <main>
      <HeroSection text="Galeria" />
      <GallerySection images={imagesData[0].images} />
    </main>
  );
};

export default page;
