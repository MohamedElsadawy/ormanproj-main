import React from "react";
import { Card, Col } from "react-bootstrap";
import "./OrmanActivityCard.css";
const OrmanActivityCard = ({ description, title, image }) => {
  return (
    <Col
      xs={12}
      style={{ justifyContent: "center", display: "flex" }}
      className="  p-3"
    >
      <Card
        style={{
          width: "100%",
          minHeight: "29.7rem",
          boxSizing: "border-box",
        }}
        className="flex-colo justify-content-between p-3 actcard"
      >
        <Card.Img
          src={image}
          style={{
            textAlign: "center",
            height: `35rem`,
            objectFit: "cover",
          }}
        />
        <Card.Title
          style={{ textAlign: "right", color: "#343A40" }}
          className="w-100"
        >
          {title}
        </Card.Title>
        <Card.Body
          className="p-0"
          style={{ flex: "0", color: "#8E8E8E", width: "100%" }}
        >
          <Card.Text
            className="p-0"
            style={{
              textAlign: "right",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OrmanActivityCard;
