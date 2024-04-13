import { getAttraction } from "@/lib/query";
import AttractionSlider from "./elements/AttractionSlider";
import Link from "next/link";
import { links } from "@/constants";

async function AttractionSection() {
  const data = await getAttraction();

  return (
    <section className={`mb-20`} id="attractions">
      <h2 className="p-0 m-0 text-[#3F8D40] font-semibold text-3xl pl-14 md:pl-32 xl:pl-44 ">
        Atrakcje
      </h2>
      <AttractionSlider elements={data} />
      <div className="w-full flex justify-center">
        <Link
          href={links.pricelist}
          className={` bg-gradient-to-r from-[#FF3E27] to-[#FF3061] mt-10 py-4 px-10 rounded-full shadow-lg text-white transition-all shadow-on-hover`}
        >
          Zobacz cennik
        </Link>
      </div>
    </section>
  );
}

export default AttractionSection;
