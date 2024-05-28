import React from "react";
import "./ProfilePhoto.css";
import { useSelector } from "react-redux";
const ProfilePhoto = () => {
  const { info } = useSelector((state) => state.auth);

  return (
    <div className="w-100  d-flex align-items-center mb-5 flex-wrap profphoto">
      <div>
        <img
          src={info && info?.imageURL}
          alt=""
          style={{ height: "10rem", borderRadius: "50%" }}
        />
      </div>
      <div className="mx-2">
        <div>
          <p style={{ fontSize: "2.2rem", fontWeight: "1000" }} className="m-0">
            {info && info.displayName}
          </p>
        </div>
        <div>
          <p style={{ fontSize: "2.2rem" }} className="m-0">
            متبرع
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
