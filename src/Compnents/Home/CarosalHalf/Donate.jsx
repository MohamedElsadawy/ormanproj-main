import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Donate.css";
import axios from "axios";
import { baseurl } from "../../../BaseUrl";
const Donate = ({ setDonatorData, donatorData }) => {
  const [selectedPayment, setSelectedPayment] = useState(""); // State to hold the selected payment option
  const handleDonatorDataChange = (event) => {
    const { name, value } = event.target;
    setDonatorData((prevData) => ({
      ...prevData,
      donatorDto: {
        ...prevData.donatorDto,
        [name]: value,
      },
    }));
  };
  const handlePaymentChange = (event) => {
    setSelectedPayment(Number(event.target.value)); // Update the selected payment option
    setDonatorData((prevData) => ({
      ...prevData,
      cardId: Number(event.target.value),
    }));
  };
  console.log(selectedPayment);
  // Function to get the ID of the checked radio button

  const paymentOptions = [
    { id: 1, name: "Visa" },
    { id: 3, name: "MasterCard" },
    { id: 6, name: "Mezza" },
  ];
  const dreamdonateAmount = (event) => {
    const { name, value } = event.target;
    setDonatorData((prevData) => ({
      ...prevData,
      totalAmount: value,
    }));
  };
  const Submitdream = (e) => {
    e.preventDefault();
    axios
      .post(baseurl + "DreamDonate/AddDonate", donatorData)
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "text/html",
        });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      })
      .catch((error) => {
        // Handle error
        console.error("Error making donation:", error);
      });
  };
  console.log(donatorData);
  return (
    <div
      className="formHalf flex-colo align-items-start position-relative"
      id="helm"
    >
      <div className="contact flex">
        <p className="contact-info m-0 px-3 py-2"> حقق الحلم !</p>
      </div>
      <div className="w-100 position-relative px-3 py-2 ">
        <p className="title">بيانات المتبرع</p>
        <form className="form-container" onSubmit={Submitdream}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="اسم المتبرع"
            value={donatorData.donatorDto.name}
            onChange={handleDonatorDataChange}
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="البريد الاليكتروني"
            value={donatorData.donatorDto.email}
            onChange={handleDonatorDataChange}
            required
          />
          <input
            type="text"
            name="phone"
            id=""
            placeholder="رقم المحمول"
            value={donatorData.donatorDto.phone}
            onChange={handleDonatorDataChange}
            required
          />
          <div className="flex">
            {paymentOptions.map((option, index) => (
              <div>
                <label for="age1">
                  {" "}
                  <label htmlFor={`paymentOption_${option.id}`}>
                    <img src="../../../assets/Logo2.png" alt="" />
                  </label>
                </label>
                <input
                  type="radio"
                  id={`paymentOption_${option.id}`}
                  required
                  name="paymentOption"
                  value={option.id}
                  checked={selectedPayment === option.id}
                  onChange={handlePaymentChange}
                  style={{ width: "fit-content" }}
                />
              </div>
            ))}
          </div>
          <label style={{ textAlign: "right" }}>
            كم المبلغ المراد المساهمة به ؟
          </label>
          <input
            type="number"
            name="totalAmount"
            id=""
            value={donatorData.totalAmount}
            onChange={dreamdonateAmount}
          />

          <div className="text-center">
            <button type="submit" className="boton">
              اتبرع الان
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;
