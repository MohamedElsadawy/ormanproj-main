import React from "react";
import { Card } from "react-bootstrap";

const CardItem = ({ img, title, desc }) => {
  const parts = img.split("/");
  const fileName = "https://ormantest.runasp.net/CategoriesPhotos/"+parts.pop();
  return (
    <Card className="" style={{ maxHeight: "400px", borderRadius: "30px" }}>
      <Card.Img src={fileName} style={{ textAlign: "center", maxHeight: "230px", }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
