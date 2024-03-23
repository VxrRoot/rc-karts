import { EmailIcon, FacebookIcon, InstaIcon, LocalIcon } from "@/assets/icons";
import { Input } from "@/ui/Input/Input";
import { TextArea } from "@/ui/TextArea/TextArea";
import { Baloo_Chettan_2 } from "next/font/google";
import React from "react";
import Link from "next/link";
import styles from "./ContactSection.module.scss";
import { PhoneIcon } from "lucide-react";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const ContactSection = () => {
    return (
        <section
            className={`flex px-2 md:px-8 flex-col items-center relative bg-cover bg-center z-30 bg-[url('../assets/contact-background.svg')] w-full min-h-[1000px] lg:min-h-[880px] ${baloo.className} ${styles.contact}`}>
            <h3 className="text-secondary text-4xl mt-32 drop-shadow">Skontaktuj się z nami</h3>
            <div className={`flex lg:justify-around z-10 py-20 w-full   justify-center flex-row flex-wrap bg-transparent items-center max-w-7xl`}>
                <div className="lg:w-[40rem]">
                    <div className="rounded-3xl bg-[#f2f2f2]  shadow-xl p-8 md:p-10">
                        <form action="" className="flex flex-col gap-2 justify-center h-full">
                            <h4 className="text-[#FF3E27] text-3xl mb-4">Masz pytanie? Napisz do nas</h4>
                            <Input name="email" label="Twój email" placeholder="Twój adres email" />
                            <Input name="phone " label="Twój numer telefonu" placeholder="Twój numer telefonu" />
                            <TextArea label="Twoja wiadomość" placeholder="Twoja wiadomość" name="message" />
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-[#FF3061] w-4 h-4 rounded-lg"/> Akceptuje polityke prywatności
                            </label>
                            <button className="bg-gradient-to-r from-[#FF3E27] to-[#FF3061] py-2 px-10 rounded-2xl text-white w-full md:w-32 ">
                                Wyślij
                            </button>
                        </form>
                    </div>

                </div>
                <div className="w-[40rem] justify-center items-center flex-col text-white text-2xl grid">
                    <div className="flex flex-col gap-2 p-20">
                        <div className="flex  items-center">
                            <Link className="flex flex-row justify-center items-center gap-6 drop-shadow-lg" href="facebook"> <FacebookIcon /> Facebook</Link>
                        </div>
                        <div className="flex  items-center">
                            <Link className="flex flex-row justify-center items-center gap-6 drop-shadow-lg" href="facebook"> <InstaIcon /> Instagram</Link>
                        </div>
                        <div className="flex  items-center">
                            <Link className="flex flex-row justify-center items-center gap-6 drop-shadow-lg" href="facebook"> <EmailIcon /> rginalski@onet.pl </Link>
                        </div>
                        <div className="flex  items-center">
                            <Link className="flex flex-row justify-center items-center gap-6 drop-shadow-lg" href="facebook"> <PhoneIcon /> +48 123 123 123</Link>
                        </div>
                        <div className="flex  items-center">
                            <Link className="flex flex-row justify-center items-center gap-6 drop-shadow-lg" href="facebook"> <LocalIcon /> Jedlicze 12</Link>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactSection;
