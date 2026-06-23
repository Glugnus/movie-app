"use client";
import { useRouter, usePathname } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    searchParams.append("sort_by", form.get("sort"));
    searchParams.append("release_date.gte", form.get("fromDate"));
    searchParams.append("release_date.lte", form.get("toDate"));

    router.push(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <form className="shadow-md" onSubmit={handleSubmit}>
      <h2 className="m-0 border-b border-black/10 px-4 py-2.5 text-xl text-black">
        Filter
      </h2>
      <div className="border-b border-black/10 px-4 pt-2.5">
        <h3 className="font-montserrat mt-4 text-lg font-light">
          Date de sortie
        </h3>
        <div className="mt-4 flex items-center justify-center">
          <p className="mr-2.5 text-gray-900">Du</p>
          <input
            className="min-w-52 rounded-md border border-black/10 p-2.5"
            type="date"
            name="fromDate"
          />
        </div>
        <div className="mt-4 flex items-center justify-center">
          <p className="mr-2.5 text-gray-900">au</p>
          <input
            className="min-w-52 rounded-md border border-black/10 p-2.5"
            type="date"
            name="toDate"
            defaultValue={new Date().toISOString().substring(0, 10)}
          />
        </div>
      </div>
      <div className="border-b border-black/10 px-4 pt-2.5">
        <h3 className="font-montserrat mt-4 text-lg font-light">Trier par</h3>
        <select
          className="mb-2.5 w-full border border-black/10 px-1.5 py-2.5"
          name="sort"
        >
          <option value="popularity.desc">Popularité</option>
          <option value="vote_average.desc">Note</option>
          <option value="vote_count.desc">Nombre de note</option>
        </select>
      </div>
      <input
        className="hover:bg-primary w-full cursor-pointer bg-black/5 p-2.5 transition-colors duration-200 hover:text-white"
        type="submit"
        value="Rechercher"
      />
    </form>
  );
}
