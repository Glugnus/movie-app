import Image from "next/image";

export default function MovieDetails({ movie }) {
  console.log(movie);

  return (
    <div className="relative min-h-[60vh] w-full">
      <div className="absolute top-0 left-0 z-10 h-full w-full after:absolute after:top-0 after:left-0 after:z-20 after:h-full after:w-full after:bg-[#041226]/80">
        <Image
          className="object-cover"
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
        />
      </div>
    </div>
  );
}
