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
      <div className="container px-4 mx-auto py-10 md:pb-20">
        <p className=" text-md text-gray-400 font-medium text-center">
          © 2024 rckart.pl Wszystkie prawa zastrzeżone.
        </p>
        <p className="text-center pt-2 text-gray-400 flex flex-col md:flex-row md:gap-2 justify-center">
          <span>Projekt i realizacja:</span>
          <span>
            <a
              href="https://www.linkedin.com/in/%C5%82ukasz-jasi%C5%84ski-171a78249/"
              target="_blank"
              className="hover:text-primaryc transition-all"
            >
              Łukasz Jasiński
            </a>
            {" & "}{" "}
            <a
              href="https://www.web-nova.pl/"
              target="_blank"
              className="hover:text-primaryc transition-all"
            >
              WebNova
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
