import React from "react";
import { Card, Col } from "react-bootstrap";

const NewsDetailsCard = ({ image, describtion, title }) => {
  return (
    <Card
      style={{
        width: "100%",
        height: "fit-content",
        boxSizing: "border-box",
        fontSize: "0.7rem",
      }}
      className="flex-colo "
      onClick={() => {}}
    >
      <Card.Img
        src={image}
        style={{
          textAlign: "center",
          maxHeight: "35rem",
          objectFit: "cover",
        }}
      />
      <Card.Title
        style={{ textAlign: "right", color: "#343A40", fontSize: "1.5rem" }}
        className="w-100 p-3 "
      >
        {title}
      </Card.Title>
      <Card.Body className="w-100" style={{ flex: "0", color: "#8E8E8E" }}>
        <div
          className="w-100"
          style={{ fontSize: "1.5rem", textAlign: "right" }}
        >
          <div dangerouslySetInnerHTML={{ __html: describtion }} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsDetailsCard;
