import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
import { baseurl } from "../../BaseUrl";
import axios from "axios";
import { toast } from "react-toastify";

const EmailForgetPass = () => {
  const [myEmail, setMyEmail] = useState("");
  const handleEmail = (e) => {
    setMyEmail(e.target.value);
  };
  console.log(myEmail);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseurl + "Account/ForgetPassword", myEmail, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success("تم الارسال بنجاح", {
          position: "top-left",
        });
      })
      .catch((error) => {
        // Handle error
        console.error("Error making donation:", error);
        toast.error("حدث خطا ما", {
          position: "top-left",
        });
      });
  };
  return (
    <>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg" className="px-3 boxshadowout">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          إدخال البريد الالكتروني
        </p>
        <Form className="" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <MdOutlineMail size={30} className="mx-2" /> البريد الإلكتروني :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control
                type="email"
                className="mb-1"
                value={myEmail}
                onChange={handleEmail}
              />
            </Col>
          </Form.Group>
          <Button
            className="w-75 p-3 mb-2"
            style={{ background: "#0C6A2C", border: "none" }}
            type="submit"
          >
            ارسال
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EmailForgetPass;
