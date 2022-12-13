import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MdHomeFilled, MdOutlineClose } from "react-icons/md";
import { RiAddBoxFill, RiHeartFill, RiSearchLine } from "react-icons/ri";
import { VscLibrary } from "react-icons/vsc";

export const Sidebar = (props) => {
  const { showSidebar, setShowSidebar } = props;

  return (
    <div
      className={`bg-black fixed top-0 h-full md:p-6 flex flex-col justify-between md:w-96 w-full right-0 md:left-0 md:right-auto ${
        showSidebar ? "" : "transform translate-x-full md:translate-x-0"
      } md:left-0 transition-all duration-300 z-50`}
    >
      <div className="md:hidden absolute right-1 top-1 text-white">
        <button
          className="text-4xl p-2 box-content"
          onClick={() => setShowSidebar(false)}
        >
          <MdOutlineClose />
        </button>
      </div>
      <div className="hidden md:flex md:flex-col">
        <div className="mb-8">
          <Image
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
            width={131}
            height={40}
          />
        </div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors font-bold"
              >
                <MdHomeFilled className="text-2xl" /> Inicio
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors font-bold"
              >
                <RiSearchLine className="text-2xl" /> Buscar
              </Link>
            </li>
            <li className="mb-7">
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors font-bold"
              >
                <VscLibrary className="text-2xl" /> Tu Biblioteca
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors font-bold"
              >
                <RiAddBoxFill className="text-2xl" /> Crear playlist
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors font-bold"
              >
                <RiHeartFill className="text-2xl" /> Tus me gusta
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden">
        <nav>
          <ul className="flex flex-col gap-y-2">
            <li>
              <Link href="#" className="text-xs hover:underline">
                Cookies
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="text-xs hover:underline">
                Privacidad
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="md:hidden text-white font-bold p-10 mt-8">
        <nav>
          <ul className="flex flex-col gap-y-5">
            <li>
              <Link href="#" className="text-2xl">
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link href="#" className="text-2xl">
                Registrarse
              </Link>
            </li>
            <li className="mt-3 mb-3">
              <Link href="#" className="text-base">
                __
              </Link>
            </li>
            <li>
              <Link href="#" className="text-lg">
                Premium
              </Link>
            </li>
            <li>
              <Link href="#" className="text-lg">
                Ayuda
              </Link>
            </li>
            <li>
              <Link href="#" className="text-lg">
                Descargar
              </Link>
            </li>
            <li>
              <Link href="#" className="text-lg">
                Privacidad
              </Link>
            </li>
            <li>
              <Link href="#" className="text-lg">
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
