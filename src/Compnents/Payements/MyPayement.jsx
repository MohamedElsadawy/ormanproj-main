import React from "react";
import "./MyPayement.css";
const MyPayement = ({ ele }) => {
  // console.log("labaanadata", thedata);
  console.log(ele, "anaele");
  return (
    <>
      <img
        src={ele?.imageURL}
        alt=""
        style={{ width: "100%", height: "10rem" }}
      />

      <div style={{ textAlign: "right" }} className="textpay">
        <div dangerouslySetInnerHTML={{ __html: ele?.describtion }} />
      </div>
    </>
  );
};

export default MyPayement;
