import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CiMobile3, CiUser } from "react-icons/ci";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Account1com = ({ handleshow }) => {
  const { info } = useSelector((state) => state.auth);
  console.log(info, "infooooo");
  return (
    <div>
      <div className="boxshadowout p-5">
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
              <Form.Control type="text" value={info ? info.displayName : ""} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formTwitter">
            <Form.Label column sm="3" xs={12} className="label">
              <MdOutlineMail size={30} className="mx-2" /> البريد الإلكتروني :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="text" value={info ? info.email : ""} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <CiMobile3 size={25} className="mx-2" /> رقــــــم المحمول :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="text" className="mb-1" value={info?.phone} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <FaLock size={25} className="mx-2" /> كلمــــــــة المرور :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="text" className="mb-1" />
              <div className="flex">
                <Link to="/ChangePassword">تغيير كلمة السر ؟</Link>
              </div>
            </Col>
          </Form.Group>
          <div className="w-100"></div>
        </Form>
      </div>
    </div>
  );
};

export default Account1com;
