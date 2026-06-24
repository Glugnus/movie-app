import Image from "next/image";
import Link from "next/link";

export default function MediaCard({ media }) {
  return (
    <div className="font-montserrat mt-5 w-[200px] min-w-52 rounded-xl shadow-md">
      <Link href={`/movies/${media.id}`}>
        <div className="relative h-80 w-full">
          <Image
            className="rounded-xl"
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`}
            alt={media.title}
            fill
          />
        </div>
        <div className="relative px-1.5 py-2.5">
          <p className="border-primary absolute top-[-16px] z-10 m-0 flex h-8 w-8 items-center justify-center rounded-full border border-solid bg-white">
            {media.vote_average.toFixed(1)}
          </p>
          <h3 className="mx-1 mt-4 text-base font-bold">{media.title}</h3>
          <p className="text-xs font-light">
            Le {new Date(media.release_date).toLocaleDateString("fr-FR")}
          </p>
        </div>
      </Link>
    </div>
  );
}
