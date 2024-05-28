import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CiMobile3, CiUser } from "react-icons/ci";
import { FaLock, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../BaseUrl";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../Redux/Reducers/Reducers";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const formdata = new FormData();
    Object.keys(data).forEach((key) => {
      formdata.append(key, data[key]);
    });
    if (selectedImage) {
      formdata.append("Photo", selectedImage); // Change 'image' to the desired field name for the image
    }
    try {
      const response = await axios.post(baseurl + "Account/Register", formdata);
      console.log(response.data);
      // response.data && dispatch(Login(response.data.token))
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, maybe show an error message to the user
    }
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const handleFileChange = (e) => {
    // Handle file changes here

    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(selectedFile);
    }
  };

  return (
    <>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg" className="px-3">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          إنشــــــاء حســــــــاب
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Social Media handles */}
          <Form.Group as={Row} className="mb-3" controlId="formFacebook">
            <Form.Label column sm="3" xs={6} className="label">
              <CiUser size={25} className="mx-2" /> اســـــــــم المتستخدم :
            </Form.Label>
            <Col sm="9" xs={6}>
              <Form.Control
                type="text"
                name="DisplayName"
                {...register("DisplayName", { required: true })}
              />
            </Col>
          </Form.Group>
          <div
            class="input-group custom-file-button"
            style={{ marginBottom: "1rem" }}
          >
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
          <Form.Group as={Row} className="mb-3" controlId="formTwitter">
            <Form.Label column sm="3" xs={6} className="label">
              <MdOutlineMail size={30} className="mx-2" /> البريد الإلكتروني :
            </Form.Label>
            <Col sm="9" xs={6}>
              <Form.Control
                type="text"
                {...register("Email", {
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
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInstagram">
            <Form.Label column sm="3" xs={6} className="label">
              <CiMobile3 size={30} className="mx-2" /> رقــــــم المحمول :
            </Form.Label>
            <Col sm="9" xs={6}>
              <Form.Control
                type="text"
                {...register("PhoneNumber", { required: true })}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={6} className="label">
              <FaLock size={25} className="mx-2" /> كلمــــــــة المرور :
            </Form.Label>
            <Col sm="9" xs={6}>
              <Form.Control
                type="text"
                {...register("Password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
                })}
              />
              {errors.password && (
                <div style={{ textAlign: "right" }}>
                  <span className="text-danger">
                    يجب أن تحتوي كلمة المرور على حرف كبير، وحرف صغير، ورقم، وأحد
                    الرموز الخاصة ($@$!%*?& )، وعلى الأقل ٨ أحرف
                  </span>
                </div>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={6} className="label">
              <FaLock size={25} className="mx-2" />  تاكيد كلمــــــــة المرور :
            </Form.Label>
            <Col sm="9" xs={6}>
              <Form.Control
                type="text"
                {...register("ConfirmPassword", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
                })}
              />
              {errors.password && (
                <div style={{ textAlign: "right" }}>
                  <span className="text-danger">
                    يجب أن تحتوي كلمة المرور على حرف كبير، وحرف صغير، ورقم، وأحد
                    الرموز الخاصة ($@$!%*?& )، وعلى الأقل ٨ أحرف
                  </span>
                </div>
              )}
            </Col>
          </Form.Group>
          <Button
            className="w-75 p-3 mb-2"
            style={{ background: "#0C6A2C", border: "none" }}
            type="submit"
          >
            حفظ
          </Button>
        </Form>
        <Button
          className="w-75"
          style={{ background: "transparent", border: "none", color: "black" }}
        >
          <Link to="/Login">هل لديك حساب</Link>
        </Button>
      </Container>
    </>
  );
};

export default Register;
