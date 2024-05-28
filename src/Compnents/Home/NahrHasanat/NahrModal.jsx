import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { baseurl } from "../../../BaseUrl";

const NahrModal = ({ show, handleClose, donationData, setDonationData }) => {
  const { id } = useParams();
  console.log("labaanaid", id ? id : null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonationData((prevData) => ({
      ...prevData,
      donatorDto: {
        ...prevData.donatorDto,
        [name]: value,
      },
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseurl + "Donate/AddDonate", donationData)
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "text/html",
        });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      })
      .catch((error) => {
        // Handle error
        console.error("Error making donation:", error);
      });
    handleClose();
  };
  console.log(donationData);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{ zIndex: "98754" }}
      className="zakatmod"
    >
      <Modal.Header
        closeButton
        style={{ textAlign: "center" }}
        className="zakatmodal "
      >
        <Modal.Title className="w-100">اضف بياناتك</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid="lg" className="px-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3 flex-row-reverse boxshadowout"
              controlId=""
            >
              <Col sm="12" xs={12} className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="الاسم"
                  name="name"
                  style={{
                    fontSize: "0.8rem",
                  }}
                  dir="rtl"
                  onChange={handleInputChange}
                  required
                />
              </Col>{" "}
              <Col sm="12" xs={12} className="mb-3">
                <Form.Control
                  type="email"
                  style={{
                    fontSize: "0.8rem",
                  }}
                  dir="rtl"
                  name="email"
                  id=""
                  placeholder="البريد الاليكتروني"
                  onChange={handleInputChange}
                  required
                />
              </Col>
              <Col sm="12" xs={12} className="mb-3">
                <Form.Control
                  type="tel"
                  placeholder="رقم المحمول"
                  name="phone"
                  min={0}
                  style={{
                    fontSize: "0.8rem",
                  }}
                  dir="rtl"
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Form.Group>

            <div className="flex-cen" style={{ with: "100%" }} type="">
              <Button
                style={{
                  background: "transparent",
                  border: "3px solid #ffc107",
                  color: "black",
                  borderRadius: "30px",
                }}
                type="submit"
              >
                اتبرع الان
              </Button>
            </div>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default NahrModal;
