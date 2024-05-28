import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
import MaglesPhoto from "../RegisterMagles/MaglesPhoto";

const PartnerSuccess = () => {
  return (
    <div>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg" className="px-3">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          إضافة شريك النجاح
        </p>
        <Form>
          {/* Other form fields */}
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label column sm="2" xs={6} className="label">
              اسم الشريك :
            </Form.Label>
            <Col sm="10" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          {/* Social Media handles */}
          <Form.Group as={Row} className="mb-3" controlId="formFacebook">
            <Form.Label column sm="2" xs={6} className="label">
              اللينك الشريك :{" "}
            </Form.Label>
            <Col sm="10" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formTwitter">
            <Form.Label column sm="2" xs={6} className="label">
              الوصف :
            </Form.Label>
            <Col sm="10" xs={6}>
              <Form.Control as="textarea" />
            </Col>
          </Form.Group>

          <div
            className="w-100 flex-colo justify-content-between"
            style={{ minHeight: "20.6rem" }}
          >
            <MaglesPhoto />
            <Button
              className="w-100 p-3"
              style={{ background: "#0C6A2C", border: "none" }}
            >
              حفظ
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default PartnerSuccess;
