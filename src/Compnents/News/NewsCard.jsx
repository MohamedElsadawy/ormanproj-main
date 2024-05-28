import React from "react";
import { Card, Col } from "react-bootstrap";
// import './NewsCard.css'
import "./NewsCard";
import { useNavigate } from "react-router-dom";
const NewsCard = ({ image, title, id }) => {
  const nav = useNavigate();
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      className="p-3"
      style={{ cursor: "pointer" }}
      onClick={() => {
        nav(`/News/${id}`);
      }}
    >
      <Card
        style={{
          width: "100%",
          minHeight: "18.7rem",
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
            height: "13rem",
            objectFit: "cover",
          }}
        />
        <Card.Title
          style={{ textAlign: "right", color: "#343A40", fontSize: "0.7rem" }}
          className="w-100 p-3 "
        >
          {title}
        </Card.Title>
        <Card.Body className="" style={{ flex: "0", color: "#8E8E8E" }}>
          <div className="w-100" style={{ textAlign: "left" }}>
            <button className="card_btn">اقرا المزيد</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsCard;
