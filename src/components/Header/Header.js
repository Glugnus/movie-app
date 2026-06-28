import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MovieSearch from "../MovieSearch/MovieSearch";
import LanguageSelector from "../language-selector/LanguageSelector";

export default function Header({ locale }) {
  return (
    <header className="font-roboto bg-primary flex justify-between px-5 py-5 text-white">
      <div>
        <p>
          <Link href={`/${locale}`}>MyMovieApp</Link>
        </p>
      </div>
      <div className="flex flex-[0.5] justify-end gap-5">
        <nav>
          <ul className="mr-5 flex gap-5">
            <li>
              <Link href={`/${locale}/series`}>Séries</Link>
            </li>
            <li>
              <Link href={`/${locale}/movies`}>Films</Link>
            </li>
            <li>
              <Link href={`/${locale}/signup`}>Inscription</Link>
            </li>
          </ul>
        </nav>
        <MovieSearch />
        <div className="flex items-center">
          <Link href={`/${locale}/user/profile`}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
}
