"use client";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    console.log(storedCookieConsent);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`my-4 md:mx-auto max-w-screen-sm mx-4 z-50
                        fixed bottom-0 left-0 right-0 
                        ${
                          cookieConsent !== null ? "hidden" : "flex"
                        } px-1 md:px-2 py-2 justify-between items-center flex-row gap-4  
                        backdrop-blur-lg bg-black/50 rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href="/privacy-policy">
          <p className="text-xs">
            Ta strona korzysta z{" "}
            <span className="font-bold text-amber-700">ciasteczek</span>
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setCookieConsent(false)}
          className="px-5 py-2 text-gray-300 rounded-md border-gray-900 text-xs"
        >
          Odrzuć
        </button>
        <button
          onClick={() => setCookieConsent(true)}
          className="bg-gray-900 px-5 py-2 text-white rounded-lg text-xs"
        >
          Akceptuj
        </button>
      </div>
    </div>
  );
}
