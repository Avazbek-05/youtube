import React from "react";
import Sidebar from "../sidebar/saidebar";
import Main from "../main_container/main";
import TopBar from "../top_bar/topBar";
import MainContainer from "../main_container/main";

const RouteComponent = () => {
  return (
    <div className="  ">
      <Sidebar />
      <div className="w-[calc(100%-50px)] ml-auto  ">
        <TopBar/>
        <MainContainer/>
      </div>
    </div>
  );
};

export default RouteComponent;
