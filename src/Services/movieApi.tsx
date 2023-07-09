import axios from "axios";

//api key
const API_KEY = import.meta.env.VITE_API_KEY;

//TodayTrendingMovies
export const fetchTodayTrendingMovies = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

//WeeklyTrendingMovies
export const fetchWeeklyTrendingMovies = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

//PopularMovie api
export const fetchPopularMovies = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

//carousel //NowPlayingMovie api
export const fetchNowplayingMovies = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

// all Users

export const fetchAllUsers = async () => {
  try {
    const { data } = await axios.get(`https://dummyjson.com/users`);

    return data.users;
  } catch (error) {
    console.log(error);
  }
};

//get datailes
export const fetchDeatailes = async (id: number) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    // console.log("data", data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

//get Video
export const fetchVideo = async (movie_id: number) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Searching
export const fetchSearch = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
    );
    console.log(data.results);

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

//Cast
export const fetchCast = async (movieId: number) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return data.cast;
  } catch (error) {
    console.log(error);
  }
};
