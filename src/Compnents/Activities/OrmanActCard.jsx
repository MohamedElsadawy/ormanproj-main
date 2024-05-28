import React from "react";
import { Card, Col } from "react-bootstrap";
import "./OrmanActCard.css";
import { useNavigate } from "react-router-dom";
const OrmanActCard = ({ title, image, col, height, id, desc, idcard }) => {
  const navigate = useNavigate();
  return (
    <Col
      xs={12}
      sm={col ? 12 : 6}
      md={col ? 12 : 4}
      style={{ justifyContent: "center", display: "flex" }}
      className="  p-3"
    >
      <Card
        style={{
          width: "100%",
          minHeight: "29.7rem",
          boxSizing: "border-box",
        }}
        className="flex-colo justify-content-between p-3 octcard"
        onClick={() => {
          navigate(`/Activities/${id}/${idcard}`);
        }}
      >
        <Card.Title
          style={{ textAlign: "right", color: "#343A40" }}
          className="w-100"
        >
          {title}
        </Card.Title>
        <Card.Img
          src={image}
          style={{
            textAlign: "center",
            height: `${height ? height : "13rem"}`,
            objectFit: "cover",
          }}
        />
        <Card.Body className="p-0" style={{ flex: "0", color: "#8E8E8E" }}>
          <div className="w-100" style={{ textAlign: "left" }}>
            <button className="card_btn">اقرا المزيد</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OrmanActCard;
