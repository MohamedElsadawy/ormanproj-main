import React from "react";
import "./FootetInfo.css";
import { FaPhoneAlt } from "react-icons/fa";
const FooterInfo = () => {
  return (
    <div className="flex-colo">
      <div className="mb-2">
        <img
          src="../../../../../assets/orman.png"
          alt=""
          style={{ width: "22.875rem" }}
          className="soraFoot"
        />
      </div>
      <p className="description mb-5">
        جمعية خيرية مصرية مقيدة برقم803 مركزية عام 1993
      </p>
      <div>
        <img src="../../../../../assets/Vector(1).png" alt="" />
      </div>
    </div>
  );
};

export default FooterInfo;
