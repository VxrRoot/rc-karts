import Link from "next/link";
import { links } from '../constants/index';

export default function CustomNotFound() {
  return (
    <main className="h-screen flex justify-center items-center flex-col bg-[#2ed369]">
      <h1 className="text-[10rem] text-white">404</h1>
      <h2 className="text-3xl text-white">Nie znaleziono strony :(</h2>
      <Link
        href={links.homePage}
        className={` bg-gradient-to-r from-[#FF3E27] to-[#FF3061] mt-10 py-4 px-10 rounded-full shadow-lg text-white transition-all shadow-on-hover`}
      >
        Wróć do strony głównej
      </Link>
    </main>
  );
}
