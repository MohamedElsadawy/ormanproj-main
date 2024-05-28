import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./MaglesPhoto.css";
const MaglesPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleFileChange = (e) => {
    // Handle file changes here
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <Row className=" justify-content-between align-items-center w-100">
      <Col sx={12} sm={8} className="mb-2">
        <div className="h-100 flex-colo justify-content-evenly align-items-start">
          <p style={{ fontSize: "1.8rem", fontWeight: "700" }}>تحميل الملف</p>
          <div class="container py-3 px-0">
            <div class="input-group custom-file-button">
              <label class="input-group-text" for="inputGroupFile">
                تحميل الصورة
              </label>
              <input
                type="file"
                class="form-control px-3"
                id="inputGroupFile"
                accept=".jpg, .jpeg, .gif, .png"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div>
            <ul style={{ margin: "0", textAlign: "right" }} className="px-3">
              <li>قم بتحميل صورة الخاصة بك هنا.</li>
              <li> يجب أن تفي بمعايير جودة صورة.</li>
              <li>إرشادات مهمة: 750 × 422 بكسل ؛ لا يوجد نص على الصورة.</li>
            </ul>
          </div>
        </div>
      </Col>
      <Col xs={8} sm={3} style={{justifySelf:"center"}} className="">
        <div className="mglsora w-100 h-100 mb-2">
          {selectedImage && (
            <img
              src={`${selectedImage}`}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default MaglesPhoto;
