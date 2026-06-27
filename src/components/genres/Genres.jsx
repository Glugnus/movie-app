import { getDictionary } from "@/utils/dictionaries";
import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";

export default async function Genres({ locale }) {
  const { genres } = await getMovieByPath("/genre/movie/list", [], locale);
  const i18n = await getDictionary(locale);

  return (
    <div>
      <h2 className="text-secondary font-montserrat mt-10 text-3xl font-bold">
        {i18n.genres.title}
      </h2>
      <div className="mt-5 flex flex-wrap gap-5">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="bg-primary shrink-0 grow-0 basis-[calc(20%-20px)] px-2.5 text-center font-bold text-white"
          >
            <Link href={`/${locale}/movies/genres/${genre.id}`}>
              <p className="m-0">{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
