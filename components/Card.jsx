import Link from "next/link";

export default function Card({ movie }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  return (
    <>
      <Link href={"/movies/" + movie.id}>
        <div className="bg-red-tone-2 p-4 rounded-md text-grayish shadow-md">
          <img
            src={IMAGE_BASE_URL + movie.poster_path}
            alt="Movie Poster"
            className="w-full h-84 object-cover mb-4 rounded"
          />
          <h2 className="text-xl text-white font-extrabold mb-2">
            {movie.title}
          </h2>
          <p className="text-gray-600">Release Date: {movie.release_date}</p>
          <p className="mt-2 overflow-y-auto" style={{ height: "150px" }}>
            {movie.overview}
          </p>
          <div className="mt-4">
            <span className="text-gray-700">
              Rating: {movie.vote_average}/10
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
