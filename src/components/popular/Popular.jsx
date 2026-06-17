import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../media-card/MediaCard";

export default async function Popular() {
  const { results } = await getMovieByPath("/movie/popular");
  const popularMovies = results.slice(0, 6);

  return (
    <div>
      <h2>Les plus populaires</h2>
      <div className="flex gap-8">
        {popularMovies.map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))}
      </div>
    </div>
  );
}
