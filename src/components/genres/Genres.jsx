import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";

export default async function Genres() {
  const { genres } = await getMovieByPath("/genre/movie/list");
  return (
    <div>
      <h2 className="text-secondary font-montserrat mt-10 text-3xl font-bold">
        Parcourir par genres
      </h2>
      <div className="mt-5 flex flex-wrap gap-5">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="bg-primary shrink-0 grow-0 basis-[calc(20%-20px)] px-2.5 text-center font-bold text-white"
          >
            <Link href={`/movies/genres/${genre.id}`}>
              <p className="m-0">{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
