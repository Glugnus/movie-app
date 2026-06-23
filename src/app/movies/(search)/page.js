import SearchResults from "./SearchResults";

export default async function MoviesPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  return <SearchResults searchParams={resolvedSearchParams} />;
}
