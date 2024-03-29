import HeroSection from "@/sections/HeroSection/HeroSection";
import React from "react";

const page = () => {
  return (
    <main>
      <HeroSection text="Regulamin" showImg={false} />
      <section className="mt-16">
        <h1>Regulamin</h1>
      </section>
    </main>
  );
};

export default page;
