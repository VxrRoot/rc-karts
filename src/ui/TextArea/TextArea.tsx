import { Baloo_Chettan_2 } from "next/font/google";
import React, { ChangeEvent, FC } from "react";

const baloo = Baloo_Chettan_2({ subsets: ["latin"], weight: ["600", "800"] });

interface ITextArea {
  placeholder?: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error: boolean;
}

export const TextArea: FC<ITextArea> = ({
  placeholder,
  name,
  label,
  onChange,
  value,
  error,
}) => {
  return (
    <div className="">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={6}
        className={`input bg-transparent outline-none border-2  pl-6 pr-10 py-2 w-full font-sans rounded-3xl overflow-hidden bg-white shadow-xl w-100 ${
          error ? "border-secondaryc" : ""
        }`}
      />
    </div>
  );
};
