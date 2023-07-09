import React, { useEffect, useState } from "react";
import { FaCompass, FaCalendarAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { fetchAllUsers } from "../../Services/movieApi";
import { getAllUsers } from "../../Model/getAllUsers.model";

const SideNavbar = () => {
  const [Users, setAllUsers] = useState<getAllUsers[]>([]);
  useEffect(() => {
    const getallUsers = async () => {
      const data = await fetchAllUsers();
      setAllUsers(data);
    };
    getallUsers();
  }, []);
  // console.log(Users);

  return (
    <div className="w-64 hidden md:flex overflow-y-auto  border-r border-r-white/20">
      <nav>
        {/* news feed */}
        <h1 className="text-white  text-2xl font-extrabold p-6">
          Movie <span className="text-red-500">App</span>
        </h1>
        <div className="flex flex-col pb-6 ">
          <h1 className="p-6 text-gray-500 text-sm font-medium">News Feed</h1>
          <div className="text-gray-500 text-sm font-bold flex flex-col gap-3">
            <button className="border-l-2 border-l-red-500 flex py-3 px-6 gap-3 text-white">
              <FaCompass size={20} className="text-red-500" />
              <h3>Browse</h3>
            </button>
            <button className="hover:border-l-2 hover:border-l-red-500 flex py-3 px-6 gap-3 hover:text-white focus:text-white">
              <AiOutlineHeart size={20} className="" />
              <h3>Watchlist</h3>
            </button>
            <button className="hover:border-l-2 hover:border-l-red-500 flex py-3 px-6 gap-3 hover:text-white focus:text-white">
              <FaCalendarAlt size={20} className="" />
              <h3>Coming Soon</h3>
            </button>
          </div>
        </div>
        <hr className="flex  mx-7 w-2/3 text-gray-600/60" />

        {/* following */}
        <div className="p-6">
          <h1 className="text-gray-500 text-sm font-medium py-6">Following</h1>
          {Users.map((user) => (
            <div key={user.id} className="flex flex-col   py-2 text-white text-sm font-semibold">
              <div className="w-full flex justify-between items-center">
                <img src={user.image} alt="" className="w-5 h-5 object-cover" />
                <h4 className="">{user.firstName}</h4>
                <BsDot size={25} className="text-green-900" />
              </div>
            </div>
          ))}
        </div>
      </nav>
      {/* drop and down */}
      {/* <div className="absolute right-2 top-5 hover:bg-slate-200 p-2 rounded-lg">
      <AiOutlineClose size={20} className="text-gray-500"/>
      </div> */}
    </div>
  );
};

export default SideNavbar;
