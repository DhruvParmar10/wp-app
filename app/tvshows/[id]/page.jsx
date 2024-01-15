import { getTvShowsDetails } from "@/utils/request";

export default async function moviesDetailPage({ params }) {
  const tvshowsDetails = await getTvShowsDetails(params.id);
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  return (
    <>
      <div className="my-4 mx-3 text-white">
        <div className="flex items-center">
          <div className=" col-auto">
            <img
              src={IMAGE_BASE_URL + tvshowsDetails.backdrop_path}
              alt="backdrop_image"
            />
          </div>
          <div className="mx-5">
            <h3>{tvshowsDetails.name}</h3>
          </div>
          <span className="text-gray-700">
            Season: {tvshowsDetails.number_of_seasons}
            Episodes: {tvshowsDetails.number_of_episodes}
          </span>
        </div>
      </div>
    </>
  );
}
