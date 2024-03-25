import { EmailIcon, FacebookIcon, InstaIcon, LocalIcon } from "@/assets/icons";
import { Input } from "@/ui/Input/Input";
import { TextArea } from "@/ui/TextArea/TextArea";
import { Baloo_Chettan_2 } from "next/font/google";
import React from "react";
import Link from "next/link";
import styles from "./ContactSection.module.scss";
import { PhoneIcon } from "lucide-react";
import { getMainData } from "@/lib/query";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const ContactSection = async () => {
  const data = await getMainData();

  let weekOpen;
  let saturdayOpen;
  let sundayOpen;

  data[0].openHours.map((item: any) => {
    if (item.weekDays === "Sobota") saturdayOpen = item.open;

    if (item.weekDays === "Niedziela") sundayOpen = item.open;

    if (item.weekDays === "Pn-Pt") weekOpen = item.open;
  });

  return (
    <section
      className={`flex px-2 md:px-8 flex-col items-center relative bg-cover bg-center z-30 bg-[url('../assets/contact-background.svg')] w-full min-h-[1000px] lg:min-h-[880px] ${baloo.className} ${styles.contact}`}
    >
      <h3 className="text-secondary text-4xl mt-32 drop-shadow">
        Skontaktuj się z nami
      </h3>
      <div
        className={`flex lg:justify-around z-10 py-20 w-full   justify-center flex-row flex-wrap bg-transparent items-center max-w-7xl`}
      >
        <div className="lg:w-[40rem]">
          <div className="rounded-3xl bg-[#f2f2f2]  shadow-xl p-8 md:p-10">
            <form
              action=""
              className="flex flex-col gap-2 justify-center h-full"
            >
              <h3 className="text-[#FF3E27] text-3xl mb-4">
                Masz pytanie? Napisz do nas
              </h3>
              <Input
                name="email"
                label="Twój email"
                placeholder="Twój adres email"
              />
              <Input
                name="phone "
                label="Twój numer telefonu"
                placeholder="Twój numer telefonu"
              />
              <TextArea
                label="Twoja wiadomość"
                placeholder="Twoja wiadomość"
                name="message"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-[#FF3061] w-4 h-4 rounded-lg"
                />{" "}
                Akceptuje polityke prywatności
              </label>
              <button className="bg-gradient-to-r from-[#FF3E27] to-[#FF3061] py-2 px-10 rounded-2xl text-white w-full md:w-32 ">
                Wyślij
              </button>
            </form>
          </div>
        </div>
        <div className="overflow-hidden justify-center items-center flex-col text-white text-2xl grid">
          <div className="flex flex-col gap-2 p-20">
            <div className="flex  items-center">
              <Link
                className="flex flex-row justify-center items-center gap-6 drop-shadow-lg"
                href="facebook"
              >
                {" "}
                <EmailIcon /> {data[0].email}
              </Link>
            </div>
            <div className="flex  items-center">
              <Link
                className="flex flex-row justify-center items-center gap-6 drop-shadow-lg"
                href="facebook"
              >
                {" "}
                <PhoneIcon /> {data[0].phone}
              </Link>
            </div>
            <div className="flex  items-center">
              <Link
                className="flex flex-row justify-center items-center gap-6 drop-shadow-lg"
                href="facebook"
              >
                {" "}
                <LocalIcon /> {data[0].address}
              </Link>
            </div>
            <div className="flex mt-10 flex-col">
              <div className="grid grid-cols-2">
                <span>PN - PT</span>
                <span>{weekOpen}</span>
              </div>
              <div className="grid grid-cols-2">
                <span>Sobota</span>
                <span>{saturdayOpen}</span>
              </div>
              <div className="grid grid-cols-2">
                <span>Niedziela</span>
                <span>{sundayOpen}</span>
              </div>
              <div className="mt-10">
                <p className="max-w-80 text-base">
                  W przypadku złych warunków atmosferycznych atrakcje mogą być
                  nie czynne. Prosimy śledzić naszego facebooka oraz dzownić w
                  razie wątpliwości
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
