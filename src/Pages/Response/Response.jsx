import React from "react";
import { useParams } from "react-router-dom";

const Response = () => {
  const { url, url3, url4, url5 } = useParams();
  return <div style={{ height: "100vh", width: "100%" }}></div>;
};

export default Response;
