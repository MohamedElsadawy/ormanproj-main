import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CiMobile3, CiUser } from "react-icons/ci";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const ProfileInfo = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="boxshadowout p-3">
      <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
        البيانات الشخصية
      </p>
      <Form>
        {/* Social Media handles */}
        <Form.Group as={Row} className="mb-3" controlId="">
          <Form.Label column sm="3" xs={12} className="label">
            <CiUser size={25} className="mx-2" /> اســـــــــم المتستخدم :
          </Form.Label>
          <Col sm="9" xs={12}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formTwitter">
          <Form.Label column sm="5" xs={12} md={3} className="label">
            <MdOutlineMail size={30} className="mx-2" /> البريد الإلكتروني :
          </Form.Label>
          <Col sm="7" xs={12} md={9}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
          <Form.Label column sm="3" xs={12} className="label">
            <CiMobile3 size={25} className="mx-2" /> رقــــــم المحمول :
          </Form.Label>
          <Col sm="9" xs={12}>
            <Form.Control type="password" className="mb-1" />
          </Col>
        </Form.Group>

        <div className="w-100">
          <Button
            className=" p-3 mb-2 mx-2 rounded-4"
            style={{ background: "#0C6A2C", border: "none", width: "12rem" }}
            type=""
          >
            حفظ
          </Button>
          <Button
            className=" p-3 mb-2 mx-2 rounded-4"
            style={{ background: "#0C6A2C", border: "none", width: "12rem" }}
            type=""
          >
            إلغـــــاء
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ProfileInfo;
