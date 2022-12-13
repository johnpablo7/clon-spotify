import Link from "next/link";
import React from "react";
import { Card } from "./Card";

export const ListAlbums = (props) => {
  const { title, albums } = props;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:underline"
        >
          {title}
        </Link>
        <Link
          href="/"
          className="uppercase text-sm font-bold text-spotify-graytext tracking-[1px] hover:underline"
        >
          mostrar todo
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
