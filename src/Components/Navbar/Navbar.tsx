import { useEffect, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { fetchSearch } from "../../Services/movieApi";
import { SearchMoviesResponse } from "../../Model/Search.Model.tsx/Search.Model";

const Navbar = () => {
  const [query, setQuery] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(true);
  const [searchList, setSearchList] = useState<SearchMoviesResponse[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getSearchingData = async () => {
      if (query !== "") {
        const data = await fetchSearch(query);
        setSearchList(data.slice(0, 5));
      } else {
        setSearchList([]);
      }
    };
    getSearchingData();
  }, [query]);

  return (
    <div className="flex justify-between items-center flex-wrap p-4">
      <div className="flex items-center gap-4">
        <div className="hidden md:flex gap-4">
          <MdOutlineNavigateBefore
            size={35}
            className="text-gray-400 hover:text-white cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <MdOutlineNavigateNext
            size={35}
            className="text-gray-400 hover:text-white cursor-pointer"
            onClick={() => navigate(1)}
          />
        </div>
        <div className="flex items-center gap-4 bg-black/10 border border-white/40 rounded-full px-2 py-2 relative">
          <FaSearch size={20} className="text-gray-400" />
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            value={query}
            className="bg-transparent placeholder:text-sm placeholder:font-light placeholder:text-slate-500 outline-none text-white focus:border-white"
            placeholder="Search Something..."
            onFocus={() => setToggle(true)}
            // onBlur={() => setToggle(false)}
          />

          {/* Search List */}
          {toggle && searchList.length > 0 && (
            <div className="absolute top-full left-0 right-0 backdrop-brightness-50 bg-black/60 border border-black mt-2 p-2 rounded-lg shadow-md z-30 text-white font-semibold">
              {searchList.map((item) => (
                <Link to={`/detailes/${item.id}`} key={item.id}>
                  <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-500 p-2 rounded">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                      alt={item.title}
                      className="w-12 h-10 object-cover rounded z-50"
                    />
                    <span className="truncate">{item.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6 text-white">
        <AiOutlineMessage size={25} />
        <IoMdNotificationsOutline size={25} />
        <BsFillPersonFill size={25} />
      </div>
    </div>
  );
};

export default Navbar;
