import { getAttraction } from "@/lib/query";
import AttractionSlider from "./elements/AttractionSlider";

export const revalidate = 30;

const AttractionSection = async () => {
  const data = await getAttraction();

  console.log(data);

  return (
    <section className={`mb-20`}>
      <h2 className="p-0 m-0 text-[#3F8D40] font-semibold text-3xl pl-14 md:pl-32 xl:pl-44">
        Atrakcje
      </h2>
      <AttractionSlider elements={data} />
    </section>
  );
};

export default AttractionSection;
