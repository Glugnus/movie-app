import LogoutButton from "@/components/logout-button/LogoutButton";
import MediaCard from "@/components/media-card/MediaCard";
import { getHydratedMovies } from "@/utils/movieClient";
import prisma from "@/utils/prisma";
import { getServerSession } from "next-auth";

export default async function ProfilPage({ params }) {
  const { locale } = await params;

  const { user: userSession } = await getServerSession();

  const { movieLikes } = await prisma.user.findFirst({
    where: { email: userSession.email },
    include: {
      movieLikes: true,
    },
  });

  const movies = await getHydratedMovies(
    movieLikes.map((movie) => movie.movieId),
  );

  return (
    <div className="px-12 pt-2.5">
      <div className="mt-8 flex justify-between">
        <h1 className="text-secondary m-0">Liste des films liké</h1>
        <LogoutButton />
      </div>
      <div className="mt-7 flex flex-wrap gap-5">
        {movies.map((movie) => (
          <MediaCard media={movie} locale={locale} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
