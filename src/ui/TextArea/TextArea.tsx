

import { Baloo_Chettan_2 } from "next/font/google";
import React, { FC } from "react";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface ITextArea {
    placeholder?: string,
    name: string;
    label: string
}

export const TextArea: FC<ITextArea> = ({ placeholder, name, label }) => {
    return (
        
        <div className=" ">
            <textarea
                name={name}
                placeholder={placeholder}
                rows={6}
                className=" input bg-transparent outline-none border-none pl-6 pr-10 py-2 w-full font-sans rounded-3xl overflow-hidden bg-white shadow-xl w-100"
            />
        </div>
    );
};