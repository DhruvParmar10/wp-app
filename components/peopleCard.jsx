import Image from "next/image";
import Link from "next/link";

export default function PeopleCard({ shows }) {
  const IMAGE_BASE_URL = "https://media.themoviedb.org/t/p/w235_and_h235_face";
  return (
    <>
      <Link href={"/people"}>
        <div className="bg-red-tone-2 p-4 rounded-md text-grayish shadow-md">
          <img
            src={IMAGE_BASE_URL + shows.profile_path}
            alt="Profile_Pic"
            className="w-full h-84 object-cover mb-4 rounded"
          />
          <h2 className="text-xl text-white font-extrabold mb-2">
            {shows.name}
          </h2>
          <p className="mt-2 overflow-y-auto" style={{ height: "20px" }}>
            {shows.known_for[0].title}
          </p>
          <p className="mt-2 overflow-y-auto" style={{ height: "20px" }}>
            {shows.known_for[1].title}
          </p>
          <p className="mt-2 overflow-y-auto" style={{ height: "20px" }}>
            {shows.known_for[2].title}
          </p>
          <div className="mt-4">
            <span className="text-gray-700">
              Popularity: {shows.popularity}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
