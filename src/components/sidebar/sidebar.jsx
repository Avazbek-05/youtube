import React from "react";
import { Link } from "react-router-dom";
import menuBar from "@/assets/svg/menu-bar.svg";
import youTubeImg from "@/assets/svg/logo.svg";
import homeImg from "@/assets/svg/home.svg";
import exploresImg from "@/assets/svg/explores.svg";
import shortsImg from "@/assets/svg/shorts.svg";
import subscriptionsImg from "@/assets/svg/subscriptions.svg";
import libraryImg from "@/assets/svg/library.svg";
import historyImg from "@/assets/svg/history.svg";
import yourVideosImg from "@/assets/svg/videos.svg";
import watchImg from "@/assets/svg/watch.svg";
import likedImg from "@/assets/svg/likedVideo.svg";

const Sidebar = () => {
  return (
    <div className=" w-[220px] h-screen fixed top-0  left-0">
      <div className="flex items-center gap-[18px] mt-4 ml-5">
        <img
          className="text-[22px] cursor-pointer"
          src={menuBar}
          alt="menuBar"
        />
        <Link to={"/"} className="flex items-center gap-1 cursor-pointer">
          <img src={youTubeImg} alt="youTubeImg" />
          <h1 className="text-white font-bold text-xl">YouTube</h1>
        </Link>
      </div>
      <div className="mt-7 flex flex-col gap-0.5 border-b border-[#535252] pb-4">
        <Link
          to={"/"}
          className="text-white  bg-[#383838] transition-all rounded-xl duration-300 hover:bg-[#5a5959] cursor-pointer p-[8px_0_8px_20px] mr-5 flex items-center gap-5"
        >
          <img className="text-2xl" src={homeImg} alt="homeImg" />
          <h2 className="text-[16px] font-semibold">Home</h2>
        </Link>
        <Link
          to={"/explores"}
          className="text-white  hover:bg-[#383838] transition-all duration-300 rounded-xl cursor-pointer p-[8px_0_10px_20px] mr-5 flex items-center gap-5"
        >
          <img className="text-2xl" src={exploresImg} alt="exploresImg" />
          <h2 className="text-[16px] font-semibold">Explores</h2>
        </Link>
        <Link
          to={"/shorts"}
          className="text-white  hover:bg-[#383838] transition-all duration-300 rounded-xl cursor-pointer p-[8px_0_10px_20px] mr-5 flex items-center gap-5"
        >
          <img className="text-2xl" src={shortsImg} alt="shortsImg" />
          <h2 className="text-[16px] font-semibold">Shorts</h2>
        </Link>
        <Link
          to={"/subscriptions"}
          className="text-white  hover:bg-[#383838] transition-all duration-300 rounded-xl cursor-pointer p-[8px_0_10px_20px] mr-5 flex items-center gap-5"
        >
          <img
            className="text-2xl"
            src={subscriptionsImg}
            alt="subscriptionsImg"
          />
          <h2 className="text-[16px] font-semibold">Subscriptions</h2>
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-0.5">
        <Link
          to={"/library"}
          className="text-white  hover:bg-[#383838] transition-all duration-300 rounded-xl cursor-pointer p-[8px_0_10px_20px] mr-5 flex items-center gap-5"
        >
          <img className="text-2xl" src={libraryImg} alt="libraryImg" />
          <h2 className="text-[16px] font-semibold">Library</h2>
        </Link>
        <Link
          to={"/history"}
          className="text-white  hover:bg-[#383838] transition-all duration-300 rounded-xl cursor-pointer p-[8px_0_10px_20px] mr-5 flex items-center gap-5"
        >
          <img className="text-2xl" src={historyImg} alt="historyImg" />
          <h2 className="text-[16px] font-semibold">History</h2>
        </Link>
        <Link
          to={"yourVideos"}
          className="text-white  hover:bg-[#383838] transition-all duration-300 rounded-xl cursor-pointer p-[8px_0_10px_20px] mr-5 flex items-center gap-5"
        >
          <img className="text-2xl" src={yourVideosImg} alt="yourVideosImg" />
          <h2 className="text-[16px] font-semibold">Your videos</h2>
        </Link>
        <Link
          to={"/watchLater"}
          className="text-white  hover:bg-[#383838] transition-all duration-300 rounded-xl cursor-pointer p-[8px_0_10px_20px] mr-5 flex items-center gap-5"
        >
          <img className="text-2xl" src={watchImg} alt="watchImg" />
          <h2 className="text-[16px] font-semibold">Watch later</h2>
        </Link>
        <Link
          to={"/likedVideos"}
          className="text-white  hover:bg-[#383838] transition-all duration-300 rounded-xl cursor-pointer p-[8px_0_10px_20px] mr-5 flex items-center gap-5"
        >
          <img className="text-2xl" src={likedImg} alt="likedImg" />
          <h2 className="text-[16px] font-semibold">Liked videos</h2>
        </Link>
        <div
          to={"/shorts"}
          className="text-white  hover:bg-[#383838] transition-all duration-300 rounded-xl cursor-pointer p-[8px_0_10px_20px] mr-5 flex items-center gap-5"
        >
          <i className="fa-solid fa-chevron-down"></i>
          <h2 className="text-[16px] font-semibold">Shorts</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
