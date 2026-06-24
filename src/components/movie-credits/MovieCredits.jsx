import { getMovieByPath } from "@/utils/movieClient";
import Image from "next/image";

export default async function MovieCredits({ movieId }) {
  const { cast } = await getMovieByPath(`/movie/${movieId}/credits`);
  return (
    <div className="flex gap-6">
      {cast.slice(0, 4).map((person) => (
        <div className="flex flex-col items-center" key={person.id}>
          <Image
            className="h-[90px] w-[90px] shrink-0 rounded-full object-cover object-[50%_40%] shadow-lg"
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w185${person.profile_path}`}
            alt={person.name}
            width={90}
            height={90}
          />
          <p className="mb-0 text-[12px] font-bold">{person.name}</p>
        </div>
      ))}
    </div>
  );
}
