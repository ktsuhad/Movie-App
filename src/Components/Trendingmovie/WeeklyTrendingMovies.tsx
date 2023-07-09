import { fetchWeeklyTrendingMovies } from "../../Services/movieApi";
import { useEffect, useState } from "react";
import { TrendingMoviesResponse } from "../../Model/Todaytrendingmovies.model";
import ProgressCard from "../ProgressCard/ProgressCard";
import { Link } from "react-router-dom";

const WeeklyTrendingmovie = () => {
  const [WeeklyTrendingMovies, setWeeklyTrendingMovies] = useState<
    TrendingMoviesResponse[]
  >([]);

  useEffect(() => {
    const getWeeklyTrendingMovies = async () => {
      const data = await fetchWeeklyTrendingMovies();
      setWeeklyTrendingMovies(data.results);
    };
    getWeeklyTrendingMovies();
  }, []);
  console.log("weekly", WeeklyTrendingMovies);

  const getImageUrl = (poster_path: string) => {
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  };

  return (
    <div className=" p-2 flex  flex-col  gap-5 py-6 ">
        <h1 className="text-base tracking-wide font-semibold text-gray-400">Weekly Trending Movies</h1>
      <div className="flex gap-5 overflow-x-auto">
      {/* weekly Trending Movies  mapping*/}
      {WeeklyTrendingMovies?.map((movie) => (
        <Link to={`/detailes/${movie.id}`} key={movie.id} className="shadow-2xl flex flex-col gap-5">
          <div className="h-80 w-64 relative">
            <img
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
              className="h-full w-full object-cover rounded-2xl overflow-hidden"
            />
            <div className="absolute -bottom-5 left-5 w-12 h-12  bg-black rounded-full">
              <ProgressCard percentage={movie.vote_average * 10} />
            </div>
          </div>
          <div className="w-64 text-white">
          <h1 className="text-ellipsis overflow-hidden whitespace-nowrap  font-semibold py-2">
              {movie.title}
            </h1>
            <p className="py-5"><span className="text-sm font-semibold text-slate-500"> Release : </span>{movie.release_date}</p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default WeeklyTrendingmovie;
