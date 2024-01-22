import Card from "@/components/Card";
import { getMoviesDetails, getSimilarMovies } from "@/utils/request";
import Image from "next/image";
import { Suspense } from "react";

export default async function moviesDetailPage({ params }) {
  const movieDetails = await getMoviesDetails(params.id);
  const similarMovies = await getSimilarMovies(params.id);
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  return (
    <>
      <div className="my-4 mx-3 text-white">
        <div className="flex items-center">
          <div className=" col-3">
            <img
              src={IMAGE_BASE_URL + movieDetails.backdrop_path}
              alt="backdrop_image"
            />
          </div>
          <div className="mx-5">
            <h1 className="text-4xl font-bold m-4">{movieDetails.title}</h1>
            <div className="flex">
              <p className=" py-1 px-2 bg-red-tone-2 me-2 rounded">
                {movieDetails.release_date}
              </p>
              <p className=" py-1 px-2 bg-red-tone-2 me-2 rounded">
                {movieDetails.original_language}
              </p>
              <p className=" py-1 px-2 bg-red-tone-2 me-2 rounded">
                {movieDetails.status}
              </p>
            </div>
            <div className="m-2">
              <p>
                {movieDetails.genres.map((genre) => {
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
              <p>{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
      {/* SImilar Movies */}
      <div>
        <h1 className="text-white text-2xl font-bold">Similar Movies</h1>
        <section className="container mx-auto my-8">
          <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {similarMovies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
}
