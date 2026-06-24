import MovieDetails from "@/components/movie-details/MovieDetails";
import { getMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function MovieIdPage({ params }) {
  const resolvedParams = await params;
  const movie = await getMovieByPath(`/movie/${resolvedParams.id}`);

  if (!movie.original_title) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
}
