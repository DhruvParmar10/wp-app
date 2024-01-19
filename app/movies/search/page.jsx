import { getMovies } from "@/utils/request";
import SearchResults from "@/components/SearchResults";

export default async function SearchPage({ searchParams }) {
  const searchText = searchParams.query;
  const movies = await getMovies(searchText);
  return (
    <div className="flex">
      <section className="container mx-auto my-8">
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <SearchResults key={movies.id} search={searchText} movie={movies} />
        </div>
      </section>
    </div>
  );
}
