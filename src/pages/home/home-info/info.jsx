import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../request/request";

const HomeInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    request.get(`/home/${id}`).then((res) => setData(res.data));
  },[]);
  return <div className="text-white">HomeInfo</div>;
};

export default HomeInfo;
 