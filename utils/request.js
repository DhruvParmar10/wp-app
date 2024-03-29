const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getTrendingMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getTrendingTvShows = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/tv/day?language=en-US&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getPopularMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?language=en-US&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getPopularShows = async () => {
  const res = await fetch(
    `${BASE_URL}/tv/popular?language=en-US&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data.results;
};

export const getMoviesDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export const getTvShowsDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export const getSimilarMovies = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const getSimilarTvShows = async (id) => {
  const res = await fetch(`${BASE_URL}/tv/${id}/similar?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const getPeople = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/person/day?language=en_US&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};
