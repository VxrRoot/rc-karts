import HeroSection from "@/sections/HeroSection/HeroSection";
import React from "react";

const page = () => {
  return (
    <main>
      <HeroSection text="Regulamin" showImg={false} />
      <section className="mt-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mt-5">1. Wstęp</h2>
        <p className="mt-2">
          Wstęp do parku dmuchanego jest możliwy tylko dla dzieci w wieku od 3
          do 12 lat. Opiekunowie muszą być obecni w parku przez cały czas pobytu
          dziecka.
        </p>

        <h2 className="text-2xl font-semibold mt-5">2. Bezpieczeństwo</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Przed wejściem na każdą atrakcję należy usunąć buty, ostre
            przedmioty oraz okulary.
          </li>
          <li>
            Skakanie na atrakcjach jest dozwolone tylko w miejscach do tego
            przeznaczonych.
          </li>
          <li>Zabrania się popychania i biegania między atrakcjami.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-5">3. Higiena</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Przed wejściem do parku należy skorzystać z płynu do dezynfekcji
            rąk.
          </li>
          <li>
            Jedzenie i picie jest dozwolone tylko w wyznaczonych strefach.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-5">4. Zasady użytkowania</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Na każdej atrakcji jednocześnie może przebywać ograniczona liczba
            osób.
          </li>
          <li>Nie przeskakujemy kolejek i szanujemy innych uczestników.</li>
        </ul>
      </section>
    </main>
  );
};

export default page;
