import React from "react";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
import "./OrmanActivities.css";
import OrmanActivitiesCom from "../../Compnents/Activities/OrmanActivitiesCom";
import { useParams } from "react-router-dom";
import UseFetch from "../../UseFetch";
const OrmanActivities = () => {
  const { id } = useParams();
  const data = UseFetch(`Category/${id}`);
  return (
    <div>
      <HeaderPhoto imageUrl="../../../assets/activeback.png" />
      <OrmanActivitiesCom title={data?.name} data={data} idParam={id} />
    </div>
  );
};
export default OrmanActivities;
