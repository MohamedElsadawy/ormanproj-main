import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import "./CancelInstall.css";
import { FaHeart } from "react-icons/fa6";
function CancelInstall({ showCancel, handleCloseCancel }) {
  return (
    <>
      <Modal
        show={showCancel}
        onHide={handleCloseCancel}
        className="modaldia"
        dir="rtl"
      >
        <Modal.Header className="m-0">
          <Modal.Title>
            <p
              style={{
                fontSize: "1.7rem",
                color: "#8E8E8E",
                textAlign: "right",
              }}
              className="m-0"
            >
              الرجاء إدخال البريد الالكتروني و رقم المحمول الذي تم عمل الاشتراك
              به{" "}
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="">
            <Form className="boxshadow p-3">
              {/* Social Media handles */}
              <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
                <Form.Label column sm="3" xs={12} className="label">
                  <MdOutlineMail size={25} className="mx-2" /> البريد الإلكتروني
                  :
                </Form.Label>
                <Col sm="9" xs={12}>
                  <Form.Control type="password" className="mb-1" />
                </Col>
              </Form.Group>{" "}
              <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
                <Form.Label column sm="3" xs={12} className="label">
                  <CiMobile3 size={25} className="mx-2" /> رقــــــم المحمول :
                </Form.Label>
                <Col sm="9" xs={12}>
                  <Form.Control type="password" className="mb-1" />
                </Col>
              </Form.Group>
              <Button
                className="w-100 p-3 mb-2 "
                style={{ background: "#0C6A2C", border: "none" }}
              >
                <FaHeart className="mx-1" />{" "} حفـــظ
              </Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CancelInstall;
