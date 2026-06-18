import Image from "next/image";
import Link from "next/link";

export default function MediaCard({ media }) {
  return (
    <div className="font-montserrat min-w-52 rounded-xl shadow-md mt-5">
      <Link href={`/movies/${media.id}`}>
        <div className="relative h-80 w-full">
          <Image
            className="rounded-xl"
            src={`${process.env.TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
            alt={media.title}
            fill
          />
        </div>
        <div className="px-1.5 py-2.5 relative">
          <p className="flex justify-center  items-center absolute w-8 h-8 z-10 m-0 rounded-full border border-solid border-primary bg-white top-[-16px]">{(media.vote_average).toFixed(1)}</p>
          <h3 className="mx-1 text-base font-bold mt-4">{media.title}</h3>
          <p className="text-xs font-light">
            Le {new Date(media.release_date).toLocaleDateString("fr-FR")}
          </p>
        </div>
      </Link>
    </div>
  );
}
