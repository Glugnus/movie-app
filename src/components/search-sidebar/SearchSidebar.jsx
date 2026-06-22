"use client";

import { useSelectedLayoutSegment, useParams, notFound } from "next/navigation";
import Form from "./form/Form";

export default function SearchSidebar({ genres }) {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();
  const getSidebarTitle = () => {
    if (!segment) {
      return "Films";
    }
    const genre = genres.find((genre) => genre.id === Number(id));
    if (!genre) {
      return notFound();
    }
    return genre.name;
  };

  const title = getSidebarTitle();
  return (
    <div className="mt-5">
      <h1 className="text-secondary mb-6 text-2xl font-bold">
        Tous les &quot;{title}&quot;
      </h1>
      <Form />
    </div>
  );
}
