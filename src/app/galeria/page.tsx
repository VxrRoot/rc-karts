import { getGalleryImages } from "@/lib/query";
import HeroSection from "@/sections/HeroSection/HeroSection";
import ImageGallery from "./ImageGallery";

export const revalidate = 0;

const page = async () => {
  const imageData = await getGalleryImages();

  return (
    <main>
      <HeroSection text="Galeria" />
      {/* <Dialog open={isOpen}> */}

      <section className="md:columns-2 px-4 lg:columns-4 max-w-7xl mx-auto">
        {imageData[0].images.map((img: any, idx: number) => {
          return <ImageGallery key={idx} img={img} />;
        })}
      </section>
      {/* </Dialog> */}
    </main>
  );
};

export default page;
