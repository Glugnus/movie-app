import Image from "next/image";
import Link from "next/link";

export default function MovieSearchResults({ movieResults, locale }) {
  return (
    <div className="font-montserrat absolute top-11 z-20 bg-white p-2.5 shadow-md">
      {movieResults.map((movie) => (
        <div key={movie.id}>
          <Link
            href={`/${locale}/movies/${movie.id}`}
            className="hover:text-secondary flex items-center border-b border-solid border-gray-400 py-2.5 text-black"
          >
            <Image
              className="shadow-md"
              width={90}
              height={50}
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
            <p className="ml-2.5 text-xs font-medium">{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
