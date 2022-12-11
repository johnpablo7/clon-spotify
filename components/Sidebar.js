import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { RiAddBoxFill, RiHeartFill, RiSearchLine } from "react-icons/ri";
import { VscLibrary } from "react-icons/vsc";

export const Sidebar = (props) => {
  const { showSidebar, setShowSidebar } = props;

  return (
    <div
      className={`bg-black fixed top-0 h-full p-6 flex flex-col justify-between md:w-96 ${
        showSidebar ? "left-0" : "-left-full"
      } md:left-0`}
    >
      <div>
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
      <div>
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
    </div>
  );
};
