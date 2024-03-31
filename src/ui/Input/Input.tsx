import { Baloo_Chettan_2 } from "next/font/google";
import React, { ChangeEvent, FC } from "react";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface IInput {
  placeholder?: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInput> = ({
  placeholder,
  name,
  label,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={`${baloo.style} input bg-transparent outline-none border-none pl-6 pr-10 py-2 mb-2 w-full font-sans rounded-full overflow-hidden bg-white shadow-xl md:w-1/2`}
      />
    </div>
  );
};
