import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgMenu } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

export const Header = (props) => {
  const { setShowSidebar } = props;

  return (
    <header className="fixed right-0 top-0 w-full md:w-[calc(100%-384px)] md:bg-spotify-grayheader/90 bg-spotify-orangeheader flex items-center justify-between p-2 z-40">
      {/* DESK */}
      <div className="hidden md:flex rounded-full md:ml-5 items-center gap-2 text-2xl">
        <VscChevronLeft className="hover:cursor-pointer p-2 box-content bg-spotify-grayheader/60 rounded-full" />
        <VscChevronRight className="hover:cursor-pointer p-2 box-content bg-spotify-grayheader/60 rounded-full" />
      </div>

      <div className="hidden md:flex items-center gap-7">
        <Link href="/" className="font-bold hover:text-white transition-colors">
          Regístrate
        </Link>
        <Link
          href="/"
          className="py-2 md:py-3 px-4 md:px-8 rounded-full bg-white font-bold text-black hover:scale-105 transition-transform mr-6"
        >
          Iniciar sesión
        </Link>
      </div>

      {/* MOBILE */}
      <div className="flex items-center w-full justify-between md:hidden">
        <div className="mx-3">
          <Image
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
            width={104}
            height={32}
          />
        </div>

        <Link href="#" className="font-bold text-xl text-white">
          <RiSearchLine />
        </Link>
        <Link
          href="/"
          className="py-2 px-5 rounded-full bg-white font-bold text-black text-sm"
        >
          ABRIR APLICACIÓN
        </Link>
        <CgMenu
          onClick={() => setShowSidebar(true)}
          className="text-3xl hover:cursor-pointer p-1 box-content md:hidden"
        />
      </div>
    </header>
  );
};
