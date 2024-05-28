import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CiMobile3, CiUser } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const WalletBank2 = ({ setIndex }) => {
  return (
    <div>
      <Container fluid="lg" className="p-5 boxshadowout">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          سلة التبرعات ( 1 )
        </p>
        <Form className="boxshadow p-3">
          {/* Social Media handles */}
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="3" xs={12} className="label">
              <CiUser size={25} className="mx-2" /> اســـــــــم المتستخدم :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <CiUser size={25} className="mx-2" /> اســـــــــم العائلة :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="password" className="mb-1" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <MdOutlineMail size={25} className="mx-2" /> البريد الإلكتروني :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="password" className="mb-1" />
            </Col>
          </Form.Group>{" "}
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <CiMobile3 size={25} className="mx-2" /> رقــــــم المحمول :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="password" className="mb-1" />
            </Col>
          </Form.Group>
          <Button
            className="w-75 p-3 mb-2 "
            style={{ background: "#0C6A2C", border: "none" }}
          >
            متابعة التبرع
            <FaHeart className="mx-1" />
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default WalletBank2;
