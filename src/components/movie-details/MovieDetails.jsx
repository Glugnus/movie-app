import Image from "next/image";
import MovieCredits from "../movie-credits/MovieCredits";
import { Suspense } from "react";

export default function MovieDetails({ movie }) {
  return (
    <div className="relative min-h-[60vh] w-full">
      <div className="absolute top-0 left-0 z-10 h-full w-full after:absolute after:top-0 after:left-0 after:z-20 after:h-full after:w-full after:bg-[#041226]/60">
        <Image
          className="object-cover"
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
        />
      </div>
      <div className="relative z-30 flex justify-center gap-12 py-12">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${movie.poster_path}`}
          alt={movie.title}
          width={250}
          height={400}
        />
        <div className="font-montserrat flex flex-[0.6] flex-col text-white">
          <h1 className="m-0 text-3xl font-bold">
            {movie.title}{" "}
            <span className="text-2xl text-gray-400">
              ({new Date(movie.release_date).toLocaleDateString("fr-FR")})
            </span>
          </h1>
          <p className="mt-2 text-[13px]">
            Production :
            <span className="text-gray-400">
              {" "}
              {movie.production_companies
                .map((company) => company.name)
                .join(", ")}
            </span>
          </p>
          <h2 className="my-2.5 text-xl font-medium">Synopsis</h2>
          <p className="font-ligh line-clamp-5 overflow-hidden text-[14px] leading-4">
            {movie.overview}
          </p>
          <div className="mt-auto">
            <Suspense fallback={<p>Chargement...</p>}>
              <MovieCredits movieId={movie.id} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
