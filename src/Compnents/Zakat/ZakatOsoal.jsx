import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const ZakatOsoal = ({ setdatazakat, datazakat, reszakat, setreszakat }) => {
  const handleOsolzakatChange = (e, asset) => {
    const value = e.target.value;
    if (value.includes("-")) {
      // If '-' is entered, revert the input to its previous value
      return;
    }

    setdatazakat((prevState) => ({
      ...prevState,
      [asset]: value,
    }));
  };

  useEffect(() => {
    setreszakat(
      (
        +datazakat.osolzakat1 / 40 +
        +datazakat.osolzakat2 / 40 +
        +datazakat.osolzakat3 / 40
      ).toFixed(2)
    );
  }, [datazakat]);
  const handleKeyDown = (event) => {
    // Prevent input of '-' character
    if (event.key === "-") {
      event.preventDefault();
    }
  };
  return (
    <div>
      <Form.Label column sm="12" xs={12} className="label">
        زكاة الأصول والممتلكات{" "}
      </Form.Label>
      <Form.Group
        as={Row}
        className="mb-3 flex-row-reverse boxshadowout"
        controlId=""
      >
        <Col sm="12" xs={12} className="mb-3">
          <Form.Control
            type="number"
            placeholder="قيمة الأسهم التي امتلكها فى السوق بالجنيه المصري"
            dir="rtl"
            style={{
              fontSize: "0.8rem",
            }}
            value={datazakat.osolzakat1}
            onChange={(e) => handleOsolzakatChange(e, "osolzakat1")}
            min={0}
            onKeyDown={handleKeyDown}
          />
        </Col>
        <Col sm="12" xs={12} className="mb-3">
          <Form.Control
            type="number"
            placeholder="قيمة الارباح التي حصلت عليها بالجنيه المصري"
            dir="rtl"
            style={{
              fontSize: "0.8rem",
            }}
            value={datazakat.osolzakat2}
            onChange={(e) => handleOsolzakatChange(e, "osolzakat2")}
            min={0}
            onKeyDown={handleKeyDown}

          />
        </Col>{" "}
        <Col sm="12" xs={12} className="mb-3">
          <Form.Control
            type="number"
            placeholder="قيمة السندات التي امتلكها فى السوق بالجنيه المصري"
            dir="rtl"
            style={{
              fontSize: "0.8rem",
            }}
            value={datazakat.osolzakat3}
            onChange={(e) => handleOsolzakatChange(e, "osolzakat3")}
            min={0}
            onKeyDown={handleKeyDown}

          />
        </Col>
        <Form.Label column sm="3.4" md={5} xs={12} className="label">
          زكاة الاصول والممتلكات{" "}
        </Form.Label>
        <Col
          sm="8"
          md={7}
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
            readOnly
            value={reszakat}
          />
        </Col>
      </Form.Group>
    </div>
  );
};

export default ZakatOsoal;
