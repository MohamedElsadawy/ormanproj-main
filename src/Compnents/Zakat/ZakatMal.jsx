import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const ZakatMal = ({ setdatazakat, datazakat, zakatmalr, setzakatmalr }) => {
  const handleMoneyChange = (e) => {
    const value = e.target.value;
    setdatazakat((prevState) => ({
      ...prevState,
      zakatmal: value,
    }));
  };
  
  useEffect(() => {
    setzakatmalr((prev) => Math.ceil(datazakat.zakatmal / 40));
  }, [datazakat.zakatmal]);
  const handleKeyDown = (event) => {
    // Prevent input of '-' character
    if (event.key === "-") {
      event.preventDefault();
    }
  };
  console.log(zakatmalr);
  return (
    <div>
      <Form.Label column sm="12" xs={12} className="label">
        زكاة المال
      </Form.Label>
      <Form.Group
        as={Row}
        className="mb-3 flex-row-reverse boxshadowout"
        controlId=""
      >
        <Col sm="12" xs={12} className="mb-3">
          <Form.Control
            type="number"
            placeholder="قيمة المال الذي املكه بالجنيه المصري"
            style={{
              fontSize: "0.8rem",
            }}
            dir="rtl"
            value={datazakat.zakatmal}
            onChange={handleMoneyChange}
            min={0}
            onKeyDown={handleKeyDown}
          />
        </Col>
        <Form.Label column sm="3.4" md={3} xs={12} className="label">
          قيمة زكاة المال
        </Form.Label>
        <Col
          sm="8"
          xs={12}
          className="d-flex align-items-center justify-content-end"
        >
          <span style={{ fontSize: "0.6rem", marginRight: "5px" }}>
            بالجنيه المصري
          </span>
          <Form.Control
            type="number"
            dir="rtl"
            className="w-50"
            value={zakatmalr}
            readOnly={true}
          />
        </Col>
      </Form.Group>
    </div>
  );
};

export default ZakatMal;
