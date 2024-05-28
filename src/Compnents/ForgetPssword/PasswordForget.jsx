import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaLock } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
import axios from "axios";
import { baseurl } from "../../BaseUrl";
import { toast } from "react-toastify";
const PasswordForget = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmePassword: "",
    email: "",
    token: "",
  });

  const location = useLocation();

  // Function to parse query parameters
  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };

  // Function to get specific query parameter
  const getEmail = () => {
    return getQueryParams().get("email");
  };

  const getToken = () => {
    return getQueryParams().get("token");
  };

  useEffect(() => {
    // Set email and token from query params when component mounts
    setFormData((prevState) => ({
      ...prevState,
      email: getEmail(),
      token: getToken(),
    }));
  }, []);

  const handlePasswordChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      confirmePassword: e.target.value,
    }));
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseurl + "Account/Reset_Password", formData)
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

export default PasswordForget;
