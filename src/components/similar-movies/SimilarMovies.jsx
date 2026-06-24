import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../media-card/MediaCard";

export default async function SimilarMovies({ movieId }) {
  const { results } = await getMovieByPath(`/movie/${movieId}/similar`);
  return (
    <div className="flex justify-center">
      <div className="mt-8 mb-12 flex gap-5">
        {results.slice(0, 6).map((movie) => (
          <MediaCard media={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
