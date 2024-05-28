import React from "react";
import { Accordion } from "react-bootstrap";
import "./Questions.css";
const Questions = ({ title, answer, index }) => {
  return (
    <Accordion defaultActiveKey="0" className="custom-accordion acco">
      <Accordion.Item eventKey={index}>
        <Accordion.Header style={{ textAlign: "right" }}>
          {title}
        </Accordion.Header>
        <Accordion.Body>
          {" "}
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default Questions;
