"use client";

import { useCurrentLanguage } from "@/hooks/useCurrentLanguage";
import { availableLocales } from "@/utils/i18n";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = useCurrentLanguage();

  useEffect(() => {
    setIsOpen(false);
  }, [currentLanguage]);

  return (
    <div className="relative uppercase">
      <p
        className="cursor-pointer"
        onClick={() => setIsOpen((currOpen) => !currOpen)}
      >
        {currentLanguage}
        <span>
          <FontAwesomeIcon
            className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
            icon={faChevronDown}
          />
        </span>
      </p>
      <ul
        className={`bg-primary absolute top-9 right-0 left-[-5px] z-20 flex origin-top scale-y-0 justify-center overflow-hidden pb-2.5 transition-all duration-300 ease-in-out ${isOpen ? "scale-y-100" : ""}`}
      >
        {availableLocales
          .filter((locale) => locale !== currentLanguage)
          .map((locale) => (
            <li key={locale}>
              <Link href={`/${locale}`}>{locale}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
