import React from "react";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
const HoveredInfo = ({ desc, link, date }) => {
  const nav = useNavigate();
  console.log(link);
  return (
    <Link to={link} target="_blank">
      <div className="position-absolute slideHover">
        <div className="flex-colo justify-content-between h-100  text-white">
          <div className="w-100 text-end">
            <div
              className="bg-success bg-opacity-50  px-2"
              style={{ width: "fit-content" }}
            >
              <p className="py-2">{date}</p>
            </div>
          </div>
          <div className="">
            <FiEye size={60} style={{ color: "white" }} />
          </div>
          <div className="bg-success bg-opacity-50 px-2 py-1 text-end">
            {desc}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HoveredInfo;
