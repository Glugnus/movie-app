import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../media-card/MediaCard";
import { getDictionary } from "@/utils/dictionaries";

export default async function Popular({ locale }) {
  const { results } = await getMovieByPath("/movie/popular", [], locale);
  const i18n = await getDictionary(locale);
  const popularMovies = results.slice(0, 6);

  return (
    <div>
      <h2 className="text-secondary font-montserrat mt-10 text-3xl font-bold">
        {i18n.popular.title}
      </h2>
      <div className="flex gap-8">
        {popularMovies.map((movie) => (
          <MediaCard key={movie.id} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
}
