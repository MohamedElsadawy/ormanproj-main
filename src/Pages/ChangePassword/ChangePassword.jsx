import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaLock } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import axios from "axios";
import { baseurl } from "../../BaseUrl";
import { toast } from "react-toastify";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
import { useSelector } from "react-redux";
const ChangePassword = () => {
  const { info } = useSelector((state) => state.auth);
  console.log("tokeni", info);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confimNewPassword: "",
  });
  const handlePasswordChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      newPassword: e.target.value,
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      confimNewPassword: e.target.value,
    }));
  };
  const handleOldChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      currentPassword: e.target.value,
    }));
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseurl + "Account/Change-Password", formData, {
        headers: {
          Authorization: `Bearer ${info.token}`,
        },
      })
      .then((response) => {
        toast.success("تم تغيير كلمة السر بنجاح", {
          position: "top-left",
        });
      })
      .catch((error) => {
        // Handle error
        toast.error("حدث خطا ما", {
          position: "top-left",
        });
        console.error("Error making donation:", error);
      });
  };

  return (
    <>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg" className="px-3 boxshadowout">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          إدخال كلمة المرور الجديدة
        </p>
        <Form className="" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <FaLock size={25} className="mx-2" /> كلمــــــــة المرور الحالية
              :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control
                type="password"
                className="mb-1"
                onChange={handleOldChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <FaLock size={25} className="mx-2" /> كلمــــــــة المرور الجديدة
              :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control
                type="password"
                className="mb-1"
                onChange={handlePasswordChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <FaLock size={25} className="mx-2" /> تأكيد كلمة المرور الجديدة :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control
                type="password"
                className="mb-1"
                onChange={handleConfirmPasswordChange}
              />
            </Col>
          </Form.Group>
          <Button
            className="w-75 p-3 mb-2"
            style={{ background: "#0C6A2C", border: "none" }}
            type="submit"
          >
            حفظ
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ChangePassword;
