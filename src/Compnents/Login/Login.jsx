import React, { useState } from "react";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseurl } from "../../BaseUrl";
import { Info, Login } from "../../Redux/Reducers/Reducers";
import { ToastContainer, toast } from "react-toastify";
const Login1 = () => {
  const [isChecked, setChecked] = useState(false);
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(baseurl + "Account/login", data);
      nav("/");
      console.log(response.data);
      console.log("tokenenn", response.data.token);
      response.data && dispatch(Login(response.data.token));
      response.data && dispatch(Info(response.data));
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error.response ? error.response.data.message : "Server Error",
        {
          position: "top-left",
        }
      );
    }
  };
  console.log(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <>
      <ToastContainer autoClose={1500} theme="dark" />
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg" className="px-3">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          تسجيل الدخول إلى حسابك
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Social Media handles */}
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="3" xs={12} className="label">
              <CiUser size={25} className="mx-2" /> اســـــــــم المتستخدم :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
                required={true}
              />
              {errors.email && (
                <div style={{ textAlign: "right" }}>
                  <span className="text-danger">ادخل ايميل صحيح</span>
                </div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <FaLock size={25} className="mx-2" /> كلمــــــــة المرور :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control
                type="password"
                className="mb-1"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
                })}
              />
              {errors.password && (
                <div style={{ textAlign: "right" }}>
                  <span className="text-danger">
                    يجب أن تحتوي كلمة المرور على حرف كبير، وحرف صغير، ورقم، وأحد
                    الرموز الخاصة ($@$!%*?& )، وعلى الأقل ٨ أحرف وانجليزي
                  </span>
                </div>
              )}
              <div
                className="flex w-50 checkbx"
                style={{ marginBottom: "1.4rem" }}
              >
                <Form.Check
                  type="checkbox"
                  id="custom-checkbox"
                  label="تذكرني"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  style={{ width: "fit-content" }}
                  className="inputa"
                />
                <div>
                  <Link to="/ForgetPass">هل نسيت كلمة السر؟</Link>
                </div>
              </div>
            </Col>
            <Button
              className="w-100 p-3 mb-2"
              style={{ background: "#0C6A2C", border: "none" }}
              type="submit"
            >
              حفظ
            </Button>
          </Form.Group>
          <Button
            className="w-75"
            style={{
              background: "transparent",
              border: "none",
              color: "black",
            }}
          >
            <Link to="/Register">انشاء حساب جديد؟</Link>
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login1;
