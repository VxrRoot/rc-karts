import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { links } from "@/constants";

const Footer = () => {
  return (
    <footer className="">
      <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-4xl flex flex-col items-center">
          <a className="block md:mx-auto mb-5 max-w-max" href="#">
            <Image
              alt="hero img"
              src={logo}
              priority
              className="w-[20rem] z-30 lg:h-auto object-cover object-center"
            />
          </a>
          <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6 items-center">
            <div className="w-full md:w-auto text-center p-3 md:px-6">
              <Link
                href="#about"
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                O nas
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6  text-center">
              <Link
                href="#services"
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                Usługi
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6  text-center">
              <Link
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
                href={links.attractions}
              >
                Atrakcje
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6  text-center">
              <Link
                href={links.gallery}
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                Galeria
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6  text-center">
              <Link
                href={links.pricelist}
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                Cennik
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-md text-gray-400 font-medium text-center">
          © 2023 rc-karts.pl Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
