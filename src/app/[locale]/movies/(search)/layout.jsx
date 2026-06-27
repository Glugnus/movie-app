import SearchSidebar from "@/components/search-sidebar/SearchSidebar";
import { getMovieByPath } from "@/utils/movieClient";

export default async function MovieSearchLayout({ children, params }) {
  const { locale } = await params;
  const { genres } = await getMovieByPath("/genre/movie/list", [], locale);
  return (
    <div className="mx-8 flex">
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
}
