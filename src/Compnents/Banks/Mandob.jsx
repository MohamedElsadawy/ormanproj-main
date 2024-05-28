import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CiMobile3, CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import "./Mandob.css";

import { FaHeart } from "react-icons/fa";
import { useForm } from "react-hook-form";
import UseFetch from "../../UseFetch";
import axios from "axios";
import { baseurl } from "../../BaseUrl";
import { toast } from "react-toastify";
const Mandob = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const projects = UseFetch("Project/getProjects");
  const [projectId, setProjectId] = useState(0);
  const data1 = UseFetch("Governorate");
  const [governrate, setgovernrate] = useState(0);
  const handlechange = (e) => {
    setgovernrate(e.target.value);
  };
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const datasend = {
      ...data,
      projectId: +projectId,
      governorateID: +governrate,
    };
    if (datasend.governorateID !== 0 && datasend.projectId !== 0) {
      try {
        const response = await axios.post(
          baseurl + "SendingRepresentative",
          datasend
        );
        console.log(response.data);
        // response.data && dispatch(Login(response.data.token))
        toast.success("تم الارسال بنجاح", {
          position: "top-left",
        });
        setgovernrate(0);
        setProjectId(0);
        reset();
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("something went wrong", {
          position: "top-left",
        });
      }
    } else if (datasend.governorateID == 0 && datasend.projectId == 0) {
      toast.error("رجاء اختيار المحافظة والجهة", {
        position: "top-left",
      });
    } else if (datasend.governorateID == 0) {
      toast.error("رجاء اختيار المحافظة ", {
        position: "top-left",
      });
    } else if (datasend.projectId == 0) {
      toast.error("رجاء اختيار الجهة", {
        position: "top-left",
      });
    }
    console.log(datasend);
  };
  console.log(governrate, projectId, "ehnaaaaa");
  return (
    <>
      <Container fluid="lg" className="py-5 mandob boxshadowout">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          بيانات المتبرع
        </p>
        <Form
          style={{ border: "1px solid #D9D9D9" }}
          className="p-3 boxshadow"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Social Media handles */}
          <Form.Group as={Row} className="mb-3" controlId="formFacebook">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiUser size={25} className="mx-2" /> اسـم المتبــــرع :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control
                type="text"
                {...register("fullName", {
                  required: true,
                })}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formInstagram">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiMobile3 size={30} className="mx-2" /> اسم العائلة :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formTwitter">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <MdOutlineMail size={30} className="mx-2" /> البريد الإلكتروني :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                required
              />
              {errors.email && (
                <div style={{ textAlign: "right" }}>
                  <span className="text-danger">ادخل ايميل صحيح</span>
                </div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInstagram">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiMobile3 size={30} className="mx-2" /> رقــــــم المحمول :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control
                type="text"
                {...register("phoneNumber", {
                  required: true,
                  pattern: /^(0\d{10}|\d{8})$/, // Phone number should start with 0 and have 11 digits, or start with any digit and have 8 digits // Phone number should start with 0 and have 11 characters
                })}
                required
              />
              {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
                <div style={{ textAlign: "right" }}>
                  <span className="text-danger">ادخل رقم صحيح</span>
                </div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <img
                src="../../../assets/Hearttbro3.png"
                alt=""
                style={{ width: "1.7rem" }}
                className="mx-2"
              />{" "}
              المحافظات
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Select onChange={(e) => handlechange(e)} required>
                <option value={0}>اختر محافظة</option>
                {data1?.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiMobile3 size={25} className="mx-2" /> العنــــــــــــــــــوان
              :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control
                as="textarea"
                rows={4}
                {...register("address", {
                  required: true,
                })}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <img
                src="../../../assets/kematbr3.png"
                width={25}
                alt=""
                className="mx-2"
              />{" "}
              قيمة التبـــــــــــرع :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control
                type="number"
                {...register("amount", {
                  required: true,
                })}
                min={250}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiMobile3 size={25} className="mx-2" /> هـــدف التبـــــــــــرع
              :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Select
                onChange={(e) => {
                  setProjectId(e.target.value);
                }}
                required
              >
                <option value={0}>الاشتراك</option>
                {projects?.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                      {console.log(item.id)}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formDate">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiMobile3 size={25} className="mx-2" /> التاريخ :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control
                type="date"
                {...register("availableDate", {
                  required: true,
                })}
                placeholder="yyyy/mm/dd"
                required
              />
            </Col>
          </Form.Group>
          <Button
            className="w-75 p-3 mb-2"
            style={{ background: "#0C6A2C", border: "none" }}
            type="submit"
          >
            إرســـــال
            <FaHeart className="mx-1" />
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Mandob;
