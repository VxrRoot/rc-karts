import React from "react";
import Image from "next/image";
import GokartSvg from "../../assets/gokart.svg";

const PageLoader = () => {
  return (
    <div
      className={`bg-gradient-to-r bg-black/50 z-50 fixed top-0 left-0 flex justify-center items-center w-full h-full overflow-hidden`}
    >
      <Image
        className="w-48 h-auto animate-pulse"
        alt="loader"
        src={GokartSvg}
      />
    </div>
  );
};

export default PageLoader;
