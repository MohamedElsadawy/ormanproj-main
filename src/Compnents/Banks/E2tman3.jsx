import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CiMobile3 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import E2tman3cont1 from "./E2tman3cont1";
import E2tman3cont2 from "./E2tman3cont2";

const E2tman3 = () => {
  return (
    <div>
      <Container fluid="lg" className="boxshadowout  py-5">
        <Row>
          <p
            style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}
          >
            بيانات المتبرع
          </p>
          <Col md={8}>
            <E2tman3cont1 />
          </Col>
          <Col md={4}>
            <E2tman3cont2 />
          </Col>
          <p
            style={{ textAlign: "right", fontSize: "1.6rem", color: "#FF0000" }}
          >
            إضافة تبرع جديد
          </p>
          <Col md={12}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
                <Form.Label column sm="5" xs={12} md={5} className="label">
                  <img
                    src="../../../assets/kematbr3.png"
                    width={25}
                    alt=""
                    className="mx-2"
                  />{" "}
                  إجمالي التبـــــــــــرع :
                </Form.Label>
                <Col sm="7" xs={12} md={7}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default E2tman3;
