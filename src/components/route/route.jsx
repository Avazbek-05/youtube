import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../sidebar/sidebar";
import TopBar from "../top_bar/topBar";
import Home from "@/pages/home/home";
import Explores from "@/pages/explores/explores";
import Shorts from "@/pages/shorts/shorts";
import Subscriptions from "@/pages/subscriptions/subscriptions";
import Library from "@/pages/library/library";
import History from "@/pages/history/history";
import YourVideos from "@/pages/your-videos/yourVideos";
import WatchLater from "@/pages/watch-later/watchLater";
import Liked from "@/pages/liked-videos/liked";
import NotFound from "@/pages/not-found/not";
import HomeInfo from "../../pages/home/home-info/info";
const RouteComponent = () => {
  return (
    <div className="pl-10">
      <Sidebar />
      <div className="w-[calc(100%-220px)]  ml-auto  ">
        <TopBar />
        <Routes>
          <Route>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<HomeInfo/>}/>
          <Route path="/explores" element={<Explores />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/library" element={<Library />} />
          <Route path="/history" element={<History />} />
          <Route path="/yourVideos" element={<YourVideos />} />
          <Route path="/watchLater" element={<WatchLater />} />
          <Route path="/likedVideos" element={<Liked />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default RouteComponent;
