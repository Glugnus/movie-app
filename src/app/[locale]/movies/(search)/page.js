import SearchResults from "./SearchResults";

export default async function MoviesPage({ searchParams, params }) {
  const resolvedSearchParams = await searchParams;
  const { locale } = await params;
  return <SearchResults searchParams={resolvedSearchParams} locale={locale} />;
}
