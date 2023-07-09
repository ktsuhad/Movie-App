import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../Services/movieApi";
import { PopularMoviesResponse } from "../../Model/PopulMovies.model";
import ProgressCard from "../ProgressCard/ProgressCard";
import { Link } from "react-router-dom";
const PopularMovies = () => {
  const [PopularMovies, setPopularMovies] = useState<PopularMoviesResponse[]>(
    []
  );
  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetchPopularMovies();
      setPopularMovies(data.results);
    };
    getPopularMovies()
  },[]);

  // console.log("popular",PopularMovies);
  

  // getting a images
  const getImageUrl = (poster_path:string)=>{
    return `https://image.tmdb.org/t/p/original/${poster_path}`
  }
  return (
    <div className="flex flex-col gap-6 w-full">
    <div className="flex items-center gap-6 text-white font-bold">
      <h1 className="text-xl tracking-wide font-semibold">
        Popular Movies
      </h1>
    </div>
    <div className=" p-2 flex overflow-x-scroll gap-5 py-6 ">
      {/* Today Trending Movies  mapping*/}
      {PopularMovies?.map((movie) => (
        <Link to={`/detailes/${movie.id}`}
          key={movie.id}
          className="shadow-2xl flex flex-col gap-5"
        >
          <div className="h-80 w-64 relative">
            <img
              src={getImageUrl(movie.poster_path)}
              alt={movie.poster_path}
              className="h-full w-full object-cover rounded-2xl overflow-hidden"
            />
            <div className="absolute -bottom-5 left-5 w-12 h-12  bg-black rounded-full">
              <ProgressCard percentage={movie.vote_average *10}/>
            </div>
          </div>
          <div className=" w-64 text-white">
          <h1 className="text-ellipsis overflow-hidden whitespace-nowrap  font-semibold py-1">
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

export default PopularMovies;
