import SearchSidebar from "@/components/search-sidebar/SearchSidebar";
import { getMovieByPath } from "@/utils/movieClient";

export default async function MovieSearchLayout({ children }) {
  const { genres } = await getMovieByPath("/genre/movie/list");
  return (
    <div className="mx-8 flex">
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
}
