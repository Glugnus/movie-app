import SearchResults from "../../SearchResults";

export default async function GenreId({ params, searchParams }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  return (
    <SearchResults
      searchParams={resolvedSearchParams}
      genreId={resolvedParams.id}
      locale={resolvedParams.locale}
    />
  );
}
