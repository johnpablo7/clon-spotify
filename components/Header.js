import Link from "next/link";
import React from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 md:ml-96 w-full md:w-[calc(100%-384px)] bg-spotify-grayheader flex items-center justify-between p-2">
      <div className="md:ml-5 flex items-center md:gap-2 gap-1">
        <div className="rounded-full">
          <VscChevronLeft className="text-3xl hover:cursor-pointer p-1 box-content" />
        </div>
        <div className="rounded-full">
          <VscChevronRight className="text-3xl hover:cursor-pointer p-1 box-content" />
        </div>
      </div>
      <div className="flex items-center gap-7">
        <Link href="/" className="font-bold hover:text-white transition-colors">
          Regístrate
        </Link>
        <Link
          href="/"
          className="py-2 md:py-3 px-4 md:px-6 rounded-full bg-white font-bold text-black hover:scale-105 transition-transform"
        >
          Iniciar sesión
        </Link>
      </div>
    </header>
  );
};
