import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Social = () => {
  return (
    <>
      <div style={{ rotate: "90deg" }}>
        <span style={{color:"white"}}>...تابعنا</span>
      </div>
      <div>
        <div>
          <RiInstagramFill style={{ color: "#FFC107" }} />
        </div>
        <div>
          <FaLinkedinIn style={{ color: "#FFC107" }} />
        </div>
        <div>
          <FaFacebookF style={{ color: "#FFC107" }} />
        </div>
        <div>
          <FaYoutube style={{ color: "#FFC107" }} />
        </div>
      </div>
    </>
  );
};

export default Social;
