"use client";
import React, { useEffect, useState } from "react";
import GokartSvg from "../../assets/gokart.svg";
import Image from "next/image";

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 700);
  }, []);

  return (
    <div
      className={`bg-gradient-to-r transition-transform duration-300 z-50 from-[#FF3E27] to-[#FF3061] fixed top-0 left-0 flex justify-center items-center w-full h-full overflow-hidden ${
        !show ? "-translate-y-[100%]" : ""
      }`}
    >
      <Image
        className="w-80 h-auto animate-pulse"
        alt="loader"
        src={GokartSvg}
      />
    </div>
  );
};

export default Loader;
