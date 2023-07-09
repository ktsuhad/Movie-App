import SideNavbar from "../Components/SideNav/SideNavbar";
import MovieShowsection from "../Components/MovieShowSection/MovieShowsection";

const HomePage = () => {
  return (
    <div className="bg-black/90 flex h-screen w-full  ">
      <SideNavbar />
      <MovieShowsection />
    </div>
  );
};

export default HomePage;
