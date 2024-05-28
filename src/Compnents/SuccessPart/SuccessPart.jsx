import React from "react";
import "./SuccessPart.css";
import UseFetch from "../../UseFetch";
const SuccessPart = () => {
  const arr = [
    "sidepic.png",
    "ebank.png",
    "cairo.png",
    "sidepic.png",
    "ebank.png",
  ];
  const arr2 = ["trad.png", "cib.png", "grohe.png", "trad.png", "cib.png"];
  const data = UseFetch("SuccessPartener");
  return (
    <div className="partner-cont ">
      <h3>شركائنا في النجاح</h3>
      <div className="center1 ">
        {data?.map((item) => {
          const parts = item.imageURL.split("/");
          const fileName = "https://ormantest.runasp.net/SuccessPartenerPhotos/"+parts.pop();
          return (
            <img
              src={fileName}
              alt=""
              style={{ width: "13.8rem", height: "13.8rem" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SuccessPart;
