import Image from "next/image";
import React from "react";

export const Sidebar = () => {
  return (
    <div className="bg-spotify-black fixed top-0 left-0 w-96 h-full p-6">
      <div>
        <div>
          <Image
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
            width={131}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};
