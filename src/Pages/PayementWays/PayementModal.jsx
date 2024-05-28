import React from "react";
import { Container, Modal } from "react-bootstrap";

const PayementModal = ({ show, handleClose, Payemenet }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{ zIndex: "98754" }}
      className="modalpay2"
    >
      <Modal.Header
        closeButton
        style={{ textAlign: "center" }}
        className="zakatmodal "
      >
        <Modal.Title className="w-100">التفاصيل</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid="lg" className="px-3" dir="rtl">
          {Payemenet}
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default PayementModal;
