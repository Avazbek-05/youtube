import React from "react";
import searchImg from "@/assets/svg/search.svg";
import microphone from "@/assets/svg/microphone.svg";
import videoIcon from "@/assets/svg/video-call-icon.svg";
import appsIcon from "@/assets/svg/apps-grid-icon.svg";
import notificationImg from "@/assets/svg/notification-bell-icon.svg";
import profileImg from "@/assets/svg/user-profile-icon.svg";
import Category from "../categoryTabs/category";
const TopBar = () => {
  return (
    <>
    <div className="py-5 border-b border-[#383838]">
      <div className="flex justify-between flex-wrap items-center gap-4 pl-[60px] pr-8">
        <div className="flex items-center  gap-2 flex-wrap ">
          <div className="flex items-center">
            <input
              className="text-[#aaa] rounded-l-[2px] text-base outline-none border border-[#323232] w-[500px] p-[8px_6px]"
              type="text"
              placeholder="Search"
            />
            <img
              className="bg-[#323232] rounded-r-[2px] p-[12px_19px]"
              src={searchImg}
              alt="searchImg"
            />
          </div>
          <img className="p-[9px_11px]" src={microphone} alt="microphone" />
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <img src={videoIcon} alt="videoIcon" />
          <img src={appsIcon} alt="appsIcon" />
          <img src={notificationImg} alt="notificationImg" />
          <img src={profileImg} alt="profileImg" />
        </div>
      </div>
    </div>
    <Category/>
    </>
  );
};

export default TopBar;
