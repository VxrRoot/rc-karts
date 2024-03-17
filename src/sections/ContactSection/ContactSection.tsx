import { Input } from "@/ui/Input/Input";
import { TextArea } from "@/ui/TextArea/TextArea";
import { Baloo_Chettan_2 } from "next/font/google";
import React from "react";


const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

const ContactSection = () => {
    return (
        <section
            className={`flex px-8 flex-col items-center relative bg-cover bg-center z-30 bg-[url('../assets/contact-background.svg')] w-full min-h-[1000px] lg:min-h-[880px]`}>
            <div className={`flex lg:justify-around z-10 py-20 w-full   justify-center flex-row flex-wrap bg-transparent items-center max-w-7xl`}>
                <div className=" px-3 lg:w-[40rem]">
                    <h3 className="text-secondary text-3xl mb-5 mt-10">Skontaktuj się z nami</h3>
                    <div className="rounded-3xl bg-[#f2f2f2]  shadow-xl h-[30rem] p-8">
                        <form action="" className="flex flex-col gap-2 justify-center h-full">
                            <Input name="email" label="Twój email" placeholder="example@email.com" />
                            <Input name="phone "label="Twój numer telefonu" placeholder="123-456-789" />
                            <TextArea label="Twoja wiadomość" placeholder="Twoja wiadomość" name="message" />
                            <button className="bg-gradient-to-r from-[#FF3E27] to-[#FF3061] py-2 px-10 rounded-2xl text-white w-32">
                                Wyślij
                            </button>
                        </form>
                    </div>

                </div>
                <div className="w-[40rem] text-white text-xl">
                    <h3 className=""> Godziny otwarcia</h3>
                    <ul>
                        <li>PN-PT 9:00</li>
                        <li>Sobota 9:00</li>
                        <li>Niedziela 9:00</li>
                    </ul>

                </div>
            </div>

        </section>
    );
};

export default ContactSection;
