import React from "react";
import "./Branch.css";
const Branch = ({ title, address, lat, lon, phones }) => {
  const zoom = 16;
  return (
    <div
      className="w-100 d-flex p-3 justify-content-between textright boxshadow cardbranch"
      style={{
        minHheight: "10rem",
        border: "1px solid #D9D9D9",
        borderRadius: "1.2rem",
      }}
    >
      <div
        className=" flex-colo justify-content-around align-items-start"
        style={{ width: "60%", height: "10rem" }}
      >
        <div className="">
          <img src="../../../assets/location.png" style={{ width: "2rem" }} />
          <span>{title}</span>
        </div>
        <div className="">{address}</div>
        <div>
          {phones.map((item) => {
            return (
              <p>
                <a href="tel:%23 224">{item.number}</a>
              </p>
            );
          })}
        </div>
      </div>
      <div style={{ height: "100%" }}>
        <iframe
          width="200"
          height="100%"
          style={{ border: "none" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
          title="google map"
        ></iframe>
      </div>
    </div>
  );
};

export default Branch;
