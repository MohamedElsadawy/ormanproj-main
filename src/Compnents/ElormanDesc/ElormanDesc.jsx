import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ElormanDesc.css";

const ElormanDesc = ({ img1, desc, img2 }) => {
  return (
    <Container className="my-4">
      <Row style={{ justifyContent: "space-between" }}>
        <Col
          xs={12}
          md={6}
          className="ormaninfo"
        >
          <div style={{ textAlign: "right" }}>
            <img
              src={img1}
              alt=""
              className="ormanimg"
            />
          </div>
          <p>
            {desc}
          </p>
        </Col>
        <Col xs={12} md={6}>
          <div style={{ textAlign: "left" }}>
            <img
              src={img2}
              className="ormanimg"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ElormanDesc;
