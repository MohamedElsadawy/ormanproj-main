import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CiMobile3 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

const E2tman3cont1 = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [Le1, setLe1] = useState(45);
  const [Le2, setLe2] = useState(18);
  const [Le3, setLe3] = useState(350);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <Form className="boxshadow p-5">
        <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
          <Form.Label column sm="5" xs={12} md={5} className="label">
            <img
              src="../../../assets/floos1.png"
              alt=""
              style={{ width: "1.7rem" }}
              className="mx-2"
            />{" "}
            طريقــــة الدفـــع :
          </Form.Label>
          <Col sm="7" xs={12} md={7}>
            <Form.Select>
              <option>تبرع مره واحدة</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
          <Form.Label column sm="5" xs={12} md={5} className="label">
            <img
              src="../../../assets/Hearttbro3.png"
              alt=""
              style={{ width: "1.7rem" }}
              className="mx-2"
            />{" "}
            جهة التبـــــــــــرع :
          </Form.Label>
          <Col sm="7" xs={12} md={7}>
            <Form.Select>
              <option>--اختار--</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
          <Form.Label column sm="5" xs={12} md={5} className="label">
            <CiMobile3 size={25} className="mx-2" /> هـــدف التبـــــــــــرع :
          </Form.Label>
          <Col sm="7" xs={12} md={7}>
            <Form.Select>
              <option>الاشتراك</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 " controlId="formLinkedIn">
          <Col sm="7" xs={12} md={12} className="checkwallet">
            <div className=" flex mb-2 flexmob " style={{ flexWrap: "nowrap" }}>
              <Form.Check
                type="radio"
                label="القيمة الكاملة للكشك ( بضاعة /ثلاجة /جسم الكشك/ توصيل كهرباء )."
                name="radioGroup"
                id="option1"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className="p-0"
                style={{ maxWidth: "19rem" }}
              />
              <div style={{ width: "18rem" }} className="flex inps">
                <Button
                  className="calc h-100 flex justify-content-center align-items-center righttext"
                  onClick={() => {
                    setLe1((prev) => prev + 45);
                  }}
                >
                  +
                </Button>
                <div>
                  <input
                    type=""
                    style={{ height: "100%" }}
                    className="inp"
                    value={Le1}
                  />
                </div>
                <Button
                  className="calc h-100 flex justify-content-center align-items-center"
                  onClick={() => {
                    if (Le1 !== 45) {
                      setLe1((prev) => prev - 45);
                    }
                  }}
                >
                  -
                </Button>
              </div>
            </div>{" "}
            <div className=" flex mb-2 righttext flexmob">
              <Form.Check
                type="radio"
                label="قيمة المشاركة في كشك."
                name="radioGroup"
                id="option1"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className="p-0"
                style={{ maxWidth: "19rem" }}

              />
              <div style={{ width: "18rem" }} className="flex inps">
                <Button
                  className="calc h-100 flex justify-content-center align-items-center"
                  onClick={() => {
                    setLe2((prev) => prev + 18);
                  }}
                >
                  +
                </Button>
                <div>
                  <input
                    type=""
                    style={{ height: "100%" }}
                    className="inp"
                    value={Le2}
                  />
                </div>
                <Button
                  className="calc h-100 flex justify-content-center align-items-center"
                  onClick={() => {
                    if (Le2 !== 18) {
                      setLe2((prev) => prev - 18);
                    }
                  }}
                >
                  -
                </Button>
              </div>
            </div>{" "}
            <div className=" flex righttext flexmob mb-3">
              <Form.Check
                type="radio"
                label="سهم المشاركة في الاكشاك."
                name="radioGroup"
                id="option1"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className="p-0"
                style={{ maxWidth: "19rem" }}

              />
              <div style={{ width: "18rem" }} className="flex inps">
                <Button
                  className="calc h-100 flex justify-content-center align-items-center"
                  onClick={() => {
                    setLe3((prev) => prev + 350);
                  }}
                >
                  +
                </Button>
                <div>
                  <input
                    type=""
                    style={{ height: "100%" }}
                    className="inp"
                    value={Le3}
                  />
                </div>
                <Button
                  className="calc h-100 flex justify-content-center align-items-center"
                  onClick={() => {
                    if (Le3 !== 350) {
                      setLe3((prev) => prev - 350);
                    }
                  }}
                >
                  -
                </Button>
              </div>
            </div>
            <div className=" flex righttext flexmob">
              <Form.Check
                type="radio"
                label="سهم المشاركة في الاكشاك."
                name="radioGroup"
                id="option1"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className="p-0 "
              />
              <div style={{ width: "18rem" }} className="flex inps ">
                <div>
                  <input
                    type=""
                    style={{ height: "100%" }}
                    className="inp dj w-100"
                    value={Le2}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="">
          <Form.Label column sm="5" xs={12} className="label">
            <img
              src="../../../assets/kematbr3.png"
              width={25}
              alt=""
              className="mx-2"
            />{" "}
            قيمة التبـــــــــــرع :
          </Form.Label>
          <Col sm="7" xs={12}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Button
          className="w-75 p-3 mb-2"
          style={{ background: "#0C6A2C", border: "none" }}
          onClick={() => {}}
        >
          متابعة التبرع
          <FaHeart className="mx-1" />
        </Button>
      </Form>
      
    </div>
  );
};

export default E2tman3cont1;
