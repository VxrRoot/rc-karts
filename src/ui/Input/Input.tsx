

import { Baloo_Chettan_2 } from "next/font/google";
import React, { FC } from "react";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IInput {
    placeholder?: string,
    name: string;
    label: string
}

export const Input: FC<IInput> = ({ placeholder, name, label }) => {
    return (
        <div className="flex flex-col">
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                className="input bg-transparent outline-none border-none pl-6 pr-10 py-2 mb-2 w-full font-sans rounded-2xl overflow-hidden bg-white shadow-xl md:w-1/2"
            />
        </div>
    );
};