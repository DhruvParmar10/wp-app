import Image from "next/image";
import Link from "next/link";

export default function TvCard({ shows }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  return (
    <>
      <Link href={"/tvshows/" + shows.id}>
        <div className="bg-red-tone-2 p-4 rounded-md text-grayish shadow-md">
          {shows.poster_path && (
            <Image
              width={120}
              height={60}
              src={IMAGE_BASE_URL + shows.poster_path}
              alt="Profile_Pic"
              className="w-full h-84 object-cover mb-4 rounded"
            />
          )}
          <h2 className="text-xl text-white font-extrabold mb-2">
            {shows.name}
          </h2>
          <p className="mt-2 overflow-y-auto">
            Air-date: {shows.first_air_date}
          </p>
          <p className="mt-2 overflow-y-auto" style={{ height: "150px" }}>
            {shows.overview}
          </p>
          <div className="mt-4">
            <span className="text-gray-700">
              Rating: {shows.vote_average}/10
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
