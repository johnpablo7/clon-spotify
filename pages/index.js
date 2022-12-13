import { ListAlbums } from "../components/ListAlbums";

export default function Home() {
  return (
    <div className="pt-[90px] md:pr-8 md:pl-[420px] p-8">
      <ListAlbums title="Enfoque" />
      <ListAlbums title="Spotify Playlists" />
      <ListAlbums title="Estado de ánimo" />
      <ListAlbums title="Nuevos lanzamientos populares" />
    </div>
  );
}
