import { getMovieByPath } from "@/utils/movieClient";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const locale = searchParams.get("locale");

  const searchResults = await getMovieByPath("/search/movie", [
    { key: "query", value: query },
  ], locale);

  return new Response(JSON.stringify(searchResults), { status: 200 });
}
