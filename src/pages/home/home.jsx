import React, { useEffect, useState } from "react";
import { request } from "../request/request";
import { Link } from "react-router-dom";
// import { productData } from '../../utils';
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    request.get("/youtubeCard").then((res) => setData(res.data));
  },[]);
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-9  mr-7 mt-5">
      {data.map((value) => (
        <div key={value.id} className="flex flex-col gap-1.5 cursor-pointer">
          <video
          className="w-[262px] h-[136px] cursor-pointer"
            controls
            autoPlay
            muted
            poster={value.videoImg}
            src={value.videoUrl}
          ></video>
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-[14px] font-semibold">
              {value.title.slice(0, 34) + "..."}
            </h1>
            <p className="text-white">{value.text.slice(0, 60) + "..."}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
