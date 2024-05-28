import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterList from "./FooterList/FooterList";
import FooterContact from "./FooterContact/FooterContact";
const Footer = () => {
  return (
    <Container className="footer" fluid="md"  >
      <Row style={{alignItems:"center",minHeight:"29rem"}}>
        <Col xs={12} md={6} className="flex1">
            <FooterInfo/>
            <FooterList/>
        </Col>
        <Col xs={12} md={6} className="flex1" style={{justifyContent:"flex-end"}} >
          <FooterContact/>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
