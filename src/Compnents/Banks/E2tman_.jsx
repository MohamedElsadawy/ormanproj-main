import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CiMobile3, CiUser } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const E2tman_ = ({ e2tcom, sete2, setDonationData, donationData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setDonationData((prevData) => ({
      ...prevData,
      donatorDto: { ...data },
    }));
    sete2(1);
    console.log("ahmedhamed", data);
  };
  console.log("ahmedhamed2", donationData);

  return (
    <Container fluid="lg" className="py-5 boxshadowout">
      <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
        بيانات المتبرع
      </p>
      <Form className="boxshadow p-3" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className="mb-3" controlId="">
          <Form.Label column sm="3" xs={12} className="label">
            <CiUser size={25} className="mx-2" />
            اســـــــــم المتبــــرع :
          </Form.Label>
          <Col sm="9" xs={12}>
            <Form.Control
              type="text"
              name="name"
              {...register("name", { required: true })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
          <Form.Label column sm="3" xs={12} className="label">
            <MdOutlineMail size={25} className="mx-2" /> البريد الإلكتروني :
          </Form.Label>
          <Col sm="9" xs={12}>
            <Form.Control
              type="text"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <div style={{ textAlign: "right" }}>
                <span className="text-danger">ادخل ايميل صحيح</span>
              </div>
            )}
          </Col>
        </Form.Group>{" "}
        <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
          <Form.Label column sm="3" xs={12} className="label">
            <CiMobile3 size={25} className="mx-2" /> رقــــــم المحمول :
          </Form.Label>
          <Col sm="9" xs={12}>
            <Form.Control
              type="text"
              {...register("phone", {
                required: true,
                pattern: /^0\d{10}$/, // Phone number should start with 0 and have 11 characters
              })}
            />
            {errors.phone && errors.phone.type === "pattern" && (
              <div style={{ textAlign: "right" }}>
                <span className="text-danger">ادخل رقم صحيح</span>
              </div>
            )}
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

export default E2tman_;
