import React from "react";
import { Card, Col } from "react-bootstrap";
import "./PersonCard.css";
const PersonCard = ({ name, title, image }) => {
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      style={{ justifyContent: "center", display: "flex" }}
      className="p-4"
    >
      <Card style={{ width: "100%", display: "flow-root" }} className="pb -5">
        <Card.Img
          src={image}
          style={{ textAlign: "center" }}
          className="person-img"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonCard;
