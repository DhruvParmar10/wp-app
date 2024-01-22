import { getSimilarTvShows, getTvShowsDetails } from "@/utils/request";
import TvCard from "@/components/tvCard";
import Image from "next/image";

export default async function moviesDetailPage({ params }) {
  const tvshowsDetails = await getTvShowsDetails(params.id);
  const similarTvShows = await getSimilarTvShows(params.id);
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  return (
    <>
      <div className="my-4 mx-3 text-white">
        <div className="flex items-center">
          <div className=" col-3">
            <img
              src={IMAGE_BASE_URL + tvshowsDetails.backdrop_path}
              alt="backdrop_image"
            />
          </div>
          <div className="mx-5">
            <h1 className="text-4xl font-bold m-4">{tvshowsDetails.name}</h1>
            <div className="flex">
              <p className=" py-1 px-2 bg-red-tone-2 me-2 rounded">
                {tvshowsDetails.first_air_date}
              </p>
              <p className=" py-1 px-2 bg-red-tone-2 me-2 rounded">
                {tvshowsDetails.original_language}
              </p>
              <p className=" py-1 px-2 bg-red-tone-2 me-2 rounded">
                {tvshowsDetails.status}
              </p>
            </div>
            <div className="m-2">
              <p>
                {tvshowsDetails.genres.map((genre) => {
                  return (
                    <span
                      key={genre.id}
                      className="mx-1 p-1 me-1 bg-red-tone-1 rounded"
                    >
                      {genre.name}
                    </span>
                  );
                })}
              </p>
            </div>
            <div>
              <p>Season: {tvshowsDetails.number_of_seasons}</p>
              <p>Episodes: {tvshowsDetails.number_of_episodes}</p>
              <br />
              <h2 className="font-bold text-2xl">Overview</h2>
              <p>{tvshowsDetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
      {/* SImilar TvShows */}
      <div>
        <h1 className="text-white text-2xl font-bold">Similar Tv Shows</h1>
        <section className="container mx-auto my-8">
          <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {similarTvShows.map((movie) => {
              return <TvCard key={movie.id} shows={movie} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
}
