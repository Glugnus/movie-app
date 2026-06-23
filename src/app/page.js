import Genres from "@/components/genres/Genres";
import MediaCard from "@/components/media-card/MediaCard";
import Popular from "@/components/popular/Popular";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mt-10 flex min-h-screen flex-col px-12 pt-2.5 pb-0">
      <Popular />
      <Genres />
    </div>
  );
}
