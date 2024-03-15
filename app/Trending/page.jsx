import Card from "@/components/Card";
import TvCard from "@/components/tvCard";
import { getTrendingMovies, getTrendingTvShows } from "@/utils/request";

export default async function Trending() {
  const tmovies = await getTrendingMovies();
  const ttvshows = await getTrendingTvShows();
  return (
    <>
      <section className="container mx-auto my-8">
        <h2 className="text-4xl font-bold mb-4 text-white">Trending Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>
      </section>

      <section className="container mx-auto my-8">
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tmovies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>

      <section className="container mx-auto my-8">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Trending Tv Shows
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>
      </section>

      <section className="container mx-auto my-8">
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ttvshows.map((tv) => {
            return <TvCard key={tv.id} shows={tv} />;
          })}
        </div>
      </section>
    </>
  );
}
