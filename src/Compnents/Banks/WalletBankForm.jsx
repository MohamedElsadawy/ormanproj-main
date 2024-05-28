import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CiMobile3, CiUser } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const WalletBankForm = ({ setComIndex, compIndex, setDonationData, donationData }) => {
  const submitData = (e) => {
    e.preventDefault();
    setComIndex(1);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonationData((prevData) => ({
      ...prevData,
      donatorDto: {
        ...prevData.donatorDto,
        [name]: value,
      },
    }));
  };
 console.log(donationData)
  return (
    <Container fluid="lg" className="py-5 boxshadowout">
      <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
        بيانات المتبرع
      </p>
      <Form className="boxshadow p-3" onSubmit={submitData}>
        <Form.Group as={Row} className="mb-3" controlId="">
          <Form.Label column sm="3" xs={12} className="label">
            <CiUser size={25} className="mx-2" />
            اســـــــــم المتبــــرع :
          </Form.Label>
          <Col sm="9" xs={12}>
            <Form.Control
              type="text"
              name="name"
              value={donationData.donatorDto.name}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
          <Form.Label column sm="3" xs={12} className="label">
            <MdOutlineMail size={25} className="mx-2" /> البريد الإلكتروني :
          </Form.Label>
          <Col sm="9" xs={12}>
            <Form.Control
              type="email"
              name="email"
              value={donationData.donatorDto.email}
              onChange={handleChange}
              className="mb-1"
              required
            />
          </Col>
        </Form.Group>{" "}
        <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
          <Form.Label column sm="3" xs={12} className="label">
            <CiMobile3 size={25} className="mx-2" /> رقــــــم المحمول :
          </Form.Label>
          <Col sm="9" xs={12}>
            <Form.Control
              type="text"
              name="phone"
              value={donationData.donatorDto.phone}
              onChange={handleChange}
              className="mb-1"
              required
            />
          </Col>
        </Form.Group>
        <Button
          className="w-100 p-3 mb-2 rounded-4"
          style={{ background: "#0C6A2C", border: "none" }}
          onClick={() => {}}
          type="submit"
        >
          متابعة التبرع
          <FaHeart className="mx-1" />
        </Button>
        <Button
          className="w-100"
          style={{ background: "transparent", border: "none", color: "black" }}
        >
          <Link style={{ borderBottom: "1px solid" }} className="py-1">
            لالغاء الاشتراك بنظام التقسيط
          </Link>
        </Button>
      </Form>
    </Container>
  );
};

export default WalletBankForm;
