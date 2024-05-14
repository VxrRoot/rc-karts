"use client";
import { links } from "@/constants";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import Link from "next/link";
import { useEffect, useState } from "react";
import cookieSvg from "@/assets/cookieIcon.svg";
import Image from "next/image";

export default function CookieBanner() {
  const storedCookieConsent = getLocalStorage("cookie_consent", null);

  const [cookieConsent, setCookieConsent] = useState(storedCookieConsent);

  useEffect(() => {
    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  const handleCookieConsent = () => {
    setCookieConsent(true);
  };

  return (
    <div
      className={`my-4 md:mx-auto max-w-screen-sm mx-4 z-50
                        fixed bottom-0 left-0 right-0 
                        ${
                          cookieConsent === true ? "hidden" : "flex"
                        } px-1 md:px-2 py-2 justify-between items-center flex-col md:flex-row gap-2 md:gap-4  
                        backdrop-blur-lg bg-black/50 rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href={links.privacyPolicy}>
          <p className="text-md text-white flex gap-1 items-center ">
            <Image
              src={cookieSvg}
              className="mr-2"
              alt="cookie icon"
              width={30}
              height={30}
            />
            <span className="whitespace-nowrap">Ta strona korzysta z </span>
            <span className=" underline">ciasteczek</span>
          </p>
        </Link>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleCookieConsent}
          className="shadow-on-hover text-md tracking-wider whitespace-nowrap font-semibold leading-6 text-white bg-secondaryc py-2 px-4 rounded-full transition-all cursor-pointer"
        >
          Rozumiem
        </button>
      </div>
    </div>
  );
}
