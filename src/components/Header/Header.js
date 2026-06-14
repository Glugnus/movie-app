import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="font-roboto flex justify-between bg-primary text-white py-5 px-0">
      <div className="flex content-end flex-[0.5] gap-5">
        <p>MyMovieApp</p>
      </div>
      <div>
        <nav>
          <ul className="flex gap-5 mr-5">
            <li>Séries</li>
            <li>Films</li>
          </ul>
        </nav>
      </div>
      <input
        className="min-w-[300] mx-2.5 rounded-lg pl-2.5 bg-white placeholder-gray-600"
        type="text"
        placeholder="Rechercher un titre ..."
      />
      <div className="flex items-center">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
}
