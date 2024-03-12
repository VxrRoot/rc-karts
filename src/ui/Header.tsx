"use client";
import { links } from "@/constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={"   bg-primaryGreen"}>
      <Dialog>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href={links.homePage} className="-m-1.5 text-white p-1.5">
              RC KARTS
            </Link>
          </div>
          <div className="flex lg:hidden">
            <DialogTrigger asChild className="z-400">
              <button
                type="button"
                aria-label="otworz menu"
                className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white`}
                onClick={() => setMobileMenuOpen(true)}
              >
                |||
              </button>
            </DialogTrigger>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href={links.homePage}
              className={`text-sm font-semibold leading-6 text-white hover:text-yellow-600 transition-all `}
            >
              Strona główna
            </Link>

            <Link
              href={links.terms}
              className={`text-sm font-semibold leading-6 text-white hover:text-yellow-600 transition-all `}
            >
              Regulamin
            </Link>
            <Link
              href={links.attractions}
              className={`text-sm font-semibold leading-6 text-white hover:text-yellow-600 transition-all `}
            >
              Atrakcje
            </Link>
            <Link
              href={links.pricelist}
              className={`text-sm font-semibold leading-6 text-white hover:text-yellow-600 transition-all `}
            >
              Cennik
            </Link>
          </div> */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-12 lg:flex-1 lg:justify-end">
            <Link
              href={links.homePage}
              className={`text-sm font-semibold leading-6 text-white hover:text-primaryRed transition-all `}
            >
              Strona główna
            </Link>

            <Link
              href={links.terms}
              className={`text-sm font-semibold leading-6 text-white hover:text-primaryRed transition-all `}
            >
              Regulamin
            </Link>
            <Link
              href={links.attractions}
              className={`text-sm font-semibold leading-6 text-white hover:text-primaryRed transition-all `}
            >
              Atrakcje
            </Link>
            <Link
              href={links.pricelist}
              className={`text-sm font-semibold leading-6 text-white hover:text-primaryRed transition-all `}
            >
              Cennik
            </Link>
            <span
              onClick={scrollToContact}
              className="text-sm font-semibold leading-6 text-white bg-primaryRed py-2 px-4 rounded-2xl transition-all cursor-pointer"
            >
              Skontaktuj się
            </span>
          </div>
        </nav>

        <DialogContent className="h-full bg-primaryRed border-0 mx-0 left-[100%] translate-x-[-100%]">
          <div className="flex items-center justify-between">
            <Link href={links.homePage} className="-m-1.5 p-1.5">
              RC - KARTS
            </Link>
            <DialogClose asChild>
              <button
                aria-label="otworz menu"
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                X
              </button>
            </DialogClose>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-600/10">
              <div className="space-y-2 py-6">
                <Link
                  href={links.homePage}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-600"
                >
                  Strona główna
                </Link>
                <Link
                  href={links.terms}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-600"
                >
                  Regulamin
                </Link>
                <Link
                  href={links.attractions}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-600"
                >
                  Atrakcje
                </Link>
                <Link
                  href={links.pricelist}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-600"
                >
                  Cennik
                </Link>
              </div>
              <div className="py-6">
                <span
                  onClick={scrollToContact}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-yellow-600"
                >
                  Skontaktuj się
                </span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
