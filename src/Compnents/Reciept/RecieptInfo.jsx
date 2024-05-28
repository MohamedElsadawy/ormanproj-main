import React from "react";
import "./RecieptInfo.css";
const RecieptInfo = () => {
  return (
    <div className="w-100 RecInfo mb-5 d-flex justify-content-between p-3">
      <div className="h-100 flex-colo justify-content-between align-items-start ">
        <div className="text-right">رقم الايصال :13 </div>
        <div>قيمة التبرع : EGP 300</div>
        <div>البريد الإلكتروني : Wessamazzab@yahoo.com </div>
        <div>رقم المحمول : 01129149233</div>
        <div>رقم البطاقة :4000382727***</div>
      </div>
      <div className="flex-colo justify-content-between h-100">
        <div style={{ color: "#8E8E8E" }}>28/11/2023</div>
        <div>
          <img
            src="../../../assets/Print.png"
            alt=""
            style={{ width: "3rem", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RecieptInfo;
