import React from "react";
import { Card } from "react-bootstrap";

const SuccessPartnerCard = ({ img, title, desc }) => {
  const parts = img.split("/");
  const fileName = "https://ormantest.runasp.net/CategoriesPhotos/"+parts.pop();
  
  return (
      <img
        src={fileName}
        style={{ height: "100%", objectFit: "contain", maxWidth: "15rem" }}
        className="sora3d"
      />
  );
};

export default SuccessPartnerCard;