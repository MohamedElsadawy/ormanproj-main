import React from "react";
import "./E2tman3cont2.css";
import { Button } from "react-bootstrap";
const E2tman3cont2 = ({ subdon }) => {
  const arr = [{}, {}, {}, {}];
  const handleDelete = (index) => {
    const donateDel = subdon.filter((item, i) => i !== index);
    setDonationData((prevData) => ({
      ...prevData,
      subDonates: [...donateDel],
    }));
  };
  return (
    <div className="e2tmanscro textright" style={{ width: "100%" }}>
      {subdon?.map((item, index) => {
        return (
          <div className="scrolcont w-100 d-flex flex-colo align-items-start">
            <div className="d-flex justify-content-between w-100 ">
              <p>سلة التبرعات ( {index + 1} )</p>
              <p>28/11/2023</p>
            </div>
            <div className="">
              <ul className="textright px-3">
                <li className="m-0 p-0">جهة التبرع : زكــاة</li>
                <li>صافي قيمة التبرع : {item.amount * item.quantity}</li>
                <li> طريقة دفع التبرع : مرة واحدة</li>
              </ul>
            </div>
            <div className="text-center w-100">
              <Button onClick={()=>handleDelete(index)} >حـــذف</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default E2tman3cont2;
