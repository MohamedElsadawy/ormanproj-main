import React from "react";
import VerificationInput from "react-verification-input";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
import "./Code.css";
import { Button } from "react-bootstrap";
const Code = () => {
  return (
    <>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <div className="w-100 d-flex justify-content-center flex-colo align-items-center">
        <p className="text-center" style={{ fontSize: "1.8rem" }}>
          ادخل الكود
        </p>
        <VerificationInput />
        <Button className="bg-transparent border-0 text-black border-bottom border-black rounded-0 mt-2 px-0">
          إعادة إرســـال الكود
        </Button>
        <Button
          className="w-75 p-3 my-3"
          style={{ background: "#0C6A2C", border: "none" }}
        >
          <img src="../../../assets/تحقق.png" alt="" className="mx-1" />
          <span className="mx-1 " style={{fontSize:"1.6rem"}}>تحقق</span>
        </Button>
      </div>
    </>
  );
};

export default Code;
