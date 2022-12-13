import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiPlayFill } from "react-icons/ri";

export const Card = () => {
  return (
    <Link
      href="/"
      className="bg-spotify-shadowcard p-4 rounded-lg hover:bg-spotify-hovercard transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://i.scdn.co/image/ab67616d0000b2733cb695bfc1246bdf66161fce"
          width={200}
          height={350}
          alt="anuel"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="absolute p-3 text-2xl bg-spotify-greenplay rounded-full text-black right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-bold text-white mb-1">Todays Top Hits</h5>
        <p className="text-sm w-[18ch]">SZA is on top of the Hottest 50!</p>
      </div>
    </Link>
  );
};
