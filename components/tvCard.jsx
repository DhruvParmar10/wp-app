import Link from "next/link";

export default function TvCard({ shows }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  return (
    <>
      <Link href={"/movies/" + shows.id}>
        <div class="bg-red-tone-2 p-4 rounded-md text-grayish shadow-md">
          <img
            src={IMAGE_BASE_URL + shows.poster_path}
            alt="Movie Poster"
            class="w-full h-84 object-cover mb-4 rounded"
          />
          <h2 class="text-xl text-white font-extrabold mb-2">{shows.name}</h2>
          <p class="text-gray-600">Release Date: {shows.first_air_date}</p>
          <p class="mt-2 overflow-y-auto" style={{ height: "150px" }}>
            {shows.overview}
          </p>
          <div class="mt-4">
            <span class="text-gray-700">Rating: {shows.vote_average}/10</span>
          </div>
        </div>
      </Link>
    </>
  );
}
