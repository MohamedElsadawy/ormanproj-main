import React, { useState } from "react";
import "./Account2modal.css";
import { Button, Modal } from "react-bootstrap";
import PieChart1 from "../Home/Pie/PieChart";

const Account2modal = ({ show, handleClose, handleShowCancel }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="mymodal">
        <Modal.Body>
          <div className="">
            <div className="info flex flex-column justify-content-around align-items-center">
              <p
                style={{
                  fontSize: "1.8rem",
                  borderBottom: "2px solid #FFC107",
                  fontWeight: "700",
                }}
                className="p-1 slidesw"
              >
                إجمالي الاقساط المدفوعة
              </p>
              <p>8,350</p>
              <div className="flex justify-content-evenly align-items-center w-100">
                <div className="flex-colo justify-content-center align-items-center">
                  <div>المبلغ المراد</div>
                  <div>8,350</div>
                </div>
                <div className="flex-colo justify-content-center align-items-center">
                  <div>عدد الاقساط</div>
                  <div>8,600,000</div>
                </div>
              </div>
              <PieChart1 value={59} size={150} strokewidth={10} />
            </div>
          </div>
          <div className="d-flex flex-colo align-items-end">
            {" "}
            <div>
              <span>القسط الشهري : 2750 EGP</span>
            </div>
            <div>تاريخ حجز التبرع : 30/9/2020</div>
          </div>
          <div>
            <Button
              variant="none"
              className="t2seet"
              onClick={() => {
                handleClose();
                handleShowCancel();
              }}
            >
              لالغاء الاشتراك بنظام التقسيط
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Account2modal;
