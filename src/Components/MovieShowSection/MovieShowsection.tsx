
import Carousel from "../Carousel/Carousel";
import PopularMovies from "../PopularMovies/PopularMovies";
import Footer from "../Footer/Footer";
import TrendingMovies from "../Trendingmovie/TrendingMovies";
import Navbar from "../Navbar/Navbar";
const MovieShowsection = () => {
  return (
    <div className="w-full  p-3 flex flex-col gap-10 overflow-y-scroll ">
      {/* input section */}
      <Navbar/>
      {/* carousel */}
      <Carousel/>

      {/* todayTrendingMovies */}
      <TrendingMovies/>

      {/* PopularMovies */}
      <PopularMovies/>


      {/* footer */}
    <Footer/>
    </div>
  );
};

export default MovieShowsection;
