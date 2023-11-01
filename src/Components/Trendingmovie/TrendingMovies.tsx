import  { useState } from "react";
import TodayTrendingmovie from "./TodayTrendingmovie";
import WeeklyTrendingmovie from "./WeeklyTrendingMovies";

const TrendingMovies = () => {
    const [Istoggle, setToggle] = useState(false);

    const handleToggle = (toggleState:boolean)=>{
      setToggle(toggleState)
    }
    const activeTextColor = "bg-clip-text bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]  text-transparent ";

  return (
    <div className="">
      <div className="flex items-center gap-10">
        <h1 className="text-xl tracking-wide font-semibold text-white">Trending Movies</h1>
        <div className="flex bg-transparent border hover:cursor-pointer border-white/20 text-white overflow-hidden relative">
          <div
            onClick={handleToggle.bind(null, false)}
            className={`px-4 py-2 ${Istoggle || activeTextColor}`}
          >
            Today
          </div>
          <div
            onClick={handleToggle.bind(null, true)}
            className={`px-4 py-2 ${Istoggle && activeTextColor}`}
          >
            Week
          </div>
          <div
            className="bg-green-900  h-full absolute  z-[-1] transition-all duration-150 ease-in"
            style={
              Istoggle
                ? { left: "80px", width: "160px" }
                : { left: "0", width: "80px" }
            }
          ></div>
        </div>
      </div>
      {
        Istoggle?<WeeklyTrendingmovie/>:<TodayTrendingmovie/>
      }
    </div>
  );
};

export default TrendingMovies;
