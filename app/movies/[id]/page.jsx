import { getMoviesDetails } from "@/utils/request";

export default async function moviesDetailPage({ params }) {
  const movieDetails = await getMoviesDetails(params.id);
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  return (
    <>
      <div className="my-4 mx-3 text-white">
        <div className="flex items-center">
          <div className=" col-auto">
            <img
              src={IMAGE_BASE_URL + movieDetails.backdrop_path}
              alt="backdrop_image"
            />
          </div>
          <div className="mx-5">
            <h3>{movieDetails.title}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
