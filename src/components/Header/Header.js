import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MovieSearch from "../MovieSearch/MovieSearch";

export default function Header() {
  return (
    <header className="font-roboto bg-primary flex justify-between px-5 py-5 text-white">
      <div>
        <p>
          <Link href="/">MyMovieApp</Link>
        </p>
      </div>
      <div className="flex flex-[0.5] justify-end gap-5">
        <nav>
          <ul className="mr-5 flex gap-5">
            <li>
              <Link href="/series">Séries</Link>
            </li>
            <li>
              <Link href="/movies">Films</Link>
            </li>
          </ul>
        </nav>
        <MovieSearch/>        
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </header>
  );
}
