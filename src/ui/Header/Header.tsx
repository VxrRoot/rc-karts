"use client";
import { links } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Burger } from "../Burger/Burger";
import { InstaIcon, FacebookIcon } from "@/assets/icons";
import styles from "./Header.module.scss";
import logo from "@/assets/logo-small.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (mobileMenuOpen) setMobileMenuOpen(false);

    if (pathname !== links.homePage) {
      router.push(`${links.homePage}#contact`);
    } else {
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleOpenMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    !mobileMenuOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={"h-20 absolute w-full z-40"}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:py-0 h-full"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={links.homePage} className="-m-1.5 text-white p-1.5">
            <Image src={logo} alt="logo"></Image>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Burger open={mobileMenuOpen} onClick={handleOpenMenu} />
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-12 lg:flex-1 lg:justify-end">
          <Link
            href={links.homePage}
            className={`text-md tracking-wider whitespace-nowrap font-semibold leading-6 text-white hover:text-gray-200 transition-all `}
          >
            Strona główna
          </Link>

          <Link
            href={links.terms}
            className={`text-md tracking-wider leading-6 text-white font-semibold hover:text-gray-200 transition-all `}
          >
            Regulamin
          </Link>
          <Link
            href={links.attractions}
            className={`text-md tracking-wider leading-6 text-white font-semibold hover:text-gray-200 transition-all `}
          >
            Atrakcje
          </Link>
          <Link
            href={links.pricelist}
            className={`text-md tracking-wider leading-6 text-white font-semibold hover:text-gray-200 transition-all `}
          >
            Cennik
          </Link>
          <span
            onClick={scrollToContact}
            className=" text-md tracking-wider whitespace-nowrap font-semibold leading-6 text-white bg-secondaryc py-2 px-4 rounded-full transition-all cursor-pointer"
          >
            Skontaktuj się
          </span>
          <div className={`${styles.icon_wr} flex gap-4`}>
            <FacebookIcon />
            <InstaIcon />
          </div>
        </div>
      </nav>

      <div
        className={`h-full lg:hidden fixed w-full bg-gradient-to-tr from-[#FF3E27] to-[#FF3061] border-0 mx-0 ${
          mobileMenuOpen
            ? "left-0 overflow-hidden z-40 translate-x-0 top-0"
            : " translate-x-[-100%]"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href={links.homePage} className="-m-1.5 p-1.5">
            RC - KARTS
          </Link>
        </div>
        <div className="mt-6 h-full flex pt-16 justify-center">
          <div className="-my-6 divide-gray-200">
            <div className="space-y-2 py-6 flex flex-col items-center">
              <Link
                href={links.homePage}
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:text-gray-200"
              >
                Strona główna
              </Link>
              <Link
                href={links.terms}
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:text-gray-200"
              >
                Regulamin
              </Link>
              <Link
                href={links.attractions}
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:text-gray-200"
              >
                Atrakcje
              </Link>
              <Link
                href={links.pricelist}
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:text-gray-200"
              >
                Cennik
              </Link>
            </div>
            <div className="py-6 flex items-center justify-center">
              <span
                onClick={scrollToContact}
                className="text-2xl whitespace-nowrap font-semibold leading-6 text-white  py-2 px-4 rounded-2xl transition-all cursor-pointer"
              >
                Skontaktuj się
              </span>
            </div>
            <div
              className={`${styles.icon_wr} items-center  justify-center flex gap-4`}
            >
              <FacebookIcon />
              <InstaIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
