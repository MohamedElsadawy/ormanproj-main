import React from "react";
import "./RegisterMagles.css";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaFacebookF, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import MaglesPhoto from "./MaglesPhoto";
const RegisterMagles = () => {
  return (
    <div>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg" className="px-3">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          إنشــــــاء حســــــــاب لعضوية مجلس الادارة
        </p>
        <Form>
          {/* Other form fields */}
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label column sm="2" xs={6} className="label">
              <CiUser
                size={30}
                className="mx-2"
                style={{ visibility: "hidden" }}
              />{" "}
              الوظيفــــــــــــــــــة :
            </Form.Label>
            <Col sm="10" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          {/* Social Media handles */}
          <Form.Group as={Row} className="mb-3" controlId="formFacebook">
            <Form.Label column sm="2" xs={6} className="label">
              <CiUser size={25} className="mx-2" /> االاســــــــــــــــــــــم
              :
            </Form.Label>
            <Col sm="10" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formTwitter">
            <Form.Label column sm="2" xs={6} className="label">
              <FaFacebookF size={30} className="mx-2" /> الفيسبـــــــــوك :
            </Form.Label>
            <Col sm="10" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInstagram">
            <Form.Label column sm="2" xs={6} className="label">
              <FaTwitter size={30} className="mx-2" />{" "}
              تويتــــــــــــــــــــــــــر :
            </Form.Label>
            <Col sm="10" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="2" xs={6} className="label">
              <RiInstagramFill size={30} className="mx-2" /> انستجـــــــــرام :
            </Form.Label>
            <Col sm="10" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="2" xs={6} className="label">
              <FaLinkedinIn size={30} className="mx-2" /> لينكـــــــــــــد إن
              :
            </Form.Label>
            <Col sm="10" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <div className="w-100 flex-colo justify-content-between" style={{minHeight:"20.6rem"}}>
            <MaglesPhoto />
            <Button className="w-100 p-3" style={{ background: "#0C6A2C",border:"none" }}>
              حفظ
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default RegisterMagles;
