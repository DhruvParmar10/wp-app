"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

export default function SearchResults({ search, movie }) {
  const [filteredMovies, setFilteredMovies] = useState(movie);

  useEffect(() => {
    setFilteredMovies(movie);
  }, [movie]);

  const filterMovies = (filter) => {
    let sortedMovies = [];
    switch (filter) {
      case "release_date":
        sortedMovies = [...movie].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;
      case "popularity":
        sortedMovies = [...movie].sort((a, b) => b.popularity - a.popularity);
        break;
      case "vote_average":
        sortedMovies = [...movie].sort(
          (a, b) => a.vote_average - a.vote_average
        );
        break;
      default:
        break;
    }
    setFilteredMovies(sortedMovies);
  };

  return (
    <>
      <div>
        <div className="flex">
          <h1 className="text-3xl">
            Search Results for <b>{search}</b>
          </h1>
        </div>
        <div className="p-4">
          <label className="block mb-2 font-medium text-white">
            Select an option
          </label>
          <select
            onChange={(e) => filterMovies(e.target.value)}
            id="movies"
            className="bg-black border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
          >
            <option disabled value="">
              Choose a filter
            </option>
            <option value="release_date">Release Year</option>
            <option value="popularity">Popularity</option>
            <option value="vote_average">Ratings</option>
          </select>
        </div>
      </div>
      {filteredMovies.map((movie) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </>
  );
}
