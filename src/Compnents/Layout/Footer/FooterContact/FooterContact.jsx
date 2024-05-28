import React, { useState } from "react";
import "./FooterContact.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { baseurl } from "../../../../BaseUrl";
import { toast } from "react-toastify";

const FooterContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    msgHeader: "",
    msgContent: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const sendData = (e) => {
    e.preventDefault();
    axios
      .post(baseurl + "ContactUs", formData)
      .then((response) => {
        console.log(response);
        toast.success("تم الارسال بنجاح", {
          position: "top-left",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          msgHeader: "",
          msgContent: "",
        });
      })
      .catch((error) => {
        // Handle error
        console.error("Error making donation:", error);
      });
  };
  return (
    <div className="form1">
      <p className="title">تواصل معنا</p>
      <form className="form-container" onSubmit={sendData}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="الاســــــــــــــم"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="رقم المحمول"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="email"
          placeholder="البريد الاليكتروني"
          className="w-100"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="msgHeader"
          placeholder="عنوان الرسالة"
          className="w-100"
          value={formData.msgHeader}
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          name="msgContent"
          placeholder="استفسارك"
          style={{ height: "9rem" }}
          value={formData.msgContent}
          onChange={handleChange}
          required
        />
        <Button className="urBtn" type="submit">
          ارسال
        </Button>
      </form>
    </div>
  );
};

export default FooterContact;
