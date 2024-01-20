import { getMovies } from "@/utils/request";
import SearchResults from "@/components/SearchResults";

export default async function SearchPage({ searchParams }) {
  const searchText = searchParams.query;
  const movies = await getMovies(searchText);
  return <SearchResults key={movies.id} search={searchText} movie={movies} />;
}
