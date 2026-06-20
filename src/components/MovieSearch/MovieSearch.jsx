"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";

export default function MovieSearch() {
  const [movieResults, setMovieResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  const [debouncedSearchText] = useDebounce(searchText, 500);

  useEffect(() => {
    const updateMovieSearch = async () => {
      if (!debouncedSearchText.trim()) {
        setMovieResults([]);
        return;
      }

      const response = await fetch(
        `/api/movies/search?query=${debouncedSearchText}`,
      );
      const { results } = await response.json();
      setMovieResults(results.filter((movie) => movie.backdrop_path));
    };
    updateMovieSearch();
  }, [debouncedSearchText]);

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
        <MovieSearchResults movieResults={movieResults} />
      )}
    </div>
  );
}
