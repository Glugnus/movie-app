"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useParams } from "next/navigation";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";

export default function MovieSearch() {
  const [movieResults, setMovieResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [hasFocus, setHasFocus] = useState(false);
  const { locale } = useParams();

  const [debouncedSearchText] = useDebounce(searchText, 500);

  useEffect(() => {
    const updateMovieSearch = async () => {
      if (!debouncedSearchText.trim()) {
        setMovieResults([]);
        return;
      }

      const response = await fetch(
        `/api/movies/search?query=${debouncedSearchText}&locale=${locale}`,
      );
      const { results } = await response.json();
      setMovieResults(results.filter((movie) => movie.backdrop_path));
    };
    updateMovieSearch();
  }, [debouncedSearchText, locale]);

  return (
    <div className="relative">
      <input
        className="mx-2.5 min-w-[300] rounded-lg bg-white pl-2.5 text-black placeholder-gray-600"
        type="text"
        placeholder="Rechercher un titre ..."
        onChange={(e) => setSearchText(e.target.value)}
        onBlur={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      {movieResults.length > 0 && hasFocus && (
        <MovieSearchResults movieResults={movieResults} locale={locale} />
      )}
    </div>
  );
}
