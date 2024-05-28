import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ZakatModal.css";
import ZakatMal from "./ZakatMal";
import ZakatOsoal from "./ZakatOsoal";
import { Col, Container, Form, Row } from "react-bootstrap";
import UseFetch from "../../UseFetch";
import axios from "axios";
import { baseurl } from "../../BaseUrl";
function ZakatModal({ show, handleClose }) {
  const data = UseFetch("Project/getProjects");
  const [datazakat, setdatazakat] = useState({
    zakatmal: "",
    osolzakat1: "",
    osolzakat2: "",
    osolzakat3: "",
  });
  const [donationData, setDonationData] = useState({
    paymentTypeId: 1,
    payOptionId: 2,
    subDonates: [
      {
        customeName: "",
        quantity: 0,
        amount: 0,
        portionId: 0,
      },
    ],
    currency: "EGP",
    employeeLinkId: null,
    donatorDto: {
      name: "",
      phone: "",
      email: "",
    },
    totalAmount: 0,
    cardId: 3,
    deliveryOrder: {
      fullAddress: "striskskng",
      cityId: 1,
    },
  });
  console.log(donationData);
  const handleDonatorDataChange = (event) => {
    const { name, value } = event.target;
    setDonationData((prevData) => ({
      ...prevData,
      donatorDto: {
        ...prevData.donatorDto,
        [name]: value,
      },
    }));
  };
  console.log(donationData);
  const [zakatmalr, setzakatmalr] = useState(0);
  const [reszakat, setreszakat] = useState(0);
  const [portion, setportion] = useState({});
  const handlePortionId = (e) => {
    setportion(JSON.parse(e.target.value));
  };
  useEffect(() => {
    const element = portion?.portions?.find(
      (item) => item.customPortionPrice === true
    );
    console.log(portion?.portions, "anaaaa elementt");
    if (element) {
      setDonationData((prevData) => ({
        ...prevData,
        subDonates: [
          {
            ...prevData.subDonates[0], // Keep other properties of subDonates intact
            portionId: element.id, // Set portionId with the id of the element
          },
        ],
      }));
    }
  }, [portion]);
  useEffect(() => {
    if (donationData.subDonates[0].amount !== 0) {
      axios
        .post(baseurl + "Donate/AddDonate", donationData)
        .then((response) => {
          const blob = new Blob([response.data], {
            type: "text/html",
          });
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => {
          // Handle error
          console.error("Error making donation:", error);
        });
    }
  }, [donationData.subDonates[0].amount]);
  console.log(donationData);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        style={{ zIndex: "98754" }}
        className="zakatmod"
      >
        <Modal.Header
          closeButton
          style={{ textAlign: "center" }}
          className="zakatmodal "
        >
          <Modal.Title className="w-100">
            <div className="w-100 mx-3">
              <p style={{ fontSize: "1.2rem" }}>اعمل لنفسك خير بزكاتك</p>
              <p style={{ fontSize: "0.76rem", color: "#8E8E8E" }}>
                نصاب زكاة النقود والعملات، ما قيمته(85 غراما) من الذهب الخالص.
              </p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid="lg" className="px-3">
            <Form>
              <Form.Group
                as={Row}
                className="mb-3 flex-row-reverse boxshadowout"
                controlId=""
              >
                <Col sm="12" xs={12} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="الاسم"
                    name="name"
                    style={{
                      fontSize: "0.8rem",
                    }}
                    dir="rtl"
                    value={donationData.donatorDto.name}
                    onChange={handleDonatorDataChange}
                  />
                </Col>{" "}
                <Col sm="12" xs={12} className="mb-3">
                  <Form.Control
                    type="email"
                    style={{
                      fontSize: "0.8rem",
                    }}
                    dir="rtl"
                    name="email"
                    id=""
                    placeholder="البريد الاليكتروني"
                    value={donationData.donatorDto.email}
                    onChange={handleDonatorDataChange}
                    required
                  />
                </Col>
                <Col sm="12" xs={12} className="mb-3">
                  <Form.Control
                    type="number"
                    placeholder="رقم المحمول"
                    name="phone"
                    min={0}
                    style={{
                      fontSize: "0.8rem",
                    }}
                    dir="rtl"
                    value={donationData.donatorDto.phone}
                    onChange={handleDonatorDataChange}
                    required
                  />
                </Col>
              </Form.Group>
              <ZakatMal
                zakatmal={datazakat.zakatmal}
                setdatazakat={setdatazakat}
                datazakat={datazakat}
                zakatmalr={zakatmalr}
                setzakatmalr={setzakatmalr}
              />
              <ZakatOsoal
                datazakat={datazakat}
                setdatazakat={setdatazakat}
                reszakat={reszakat}
                setreszakat={setreszakat}
              />
              <Form.Group
                as={Row}
                className="mb-3 flex-row-reverse boxshadowout"
                controlId=""
              >
                <Form.Label column sm="12" md={4} xs={12} className="label">
                  إجمالي قيمة الزكاة :
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
                    value={+zakatmalr + +reszakat}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formLinkedIn"
                style={{ flexDirection: "row-reverse" }}
              >
                <Form.Label column sm="5" xs={12} md={4} className="label">
                  : هدف التبرع
                </Form.Label>
                <Col sm="7" xs={12} md={8}>
                  <Form.Select onChange={handlePortionId}>
                    <option>اختر هدف التبرع</option>
                    {data?.map((item) => {
                      return (
                        <>
                          {console.log(data)}
                          {item.customPortionPrice && (
                            <option value={JSON.stringify(item)} key={item.id}>
                              {item.name}
                            </option>
                          )}
                        </>
                      );
                    })}
                  </Form.Select>
                </Col>
              </Form.Group>
              <div className="flex-cen" style={{ with: "100%" }} type="">
                <Button
                  style={{
                    background: "transparent",
                    border: "3px solid #ffc107",
                    color: "black",
                    borderRadius: "30px",
                  }}
                  onClick={() => {
                    setDonationData((prevData) => ({
                      ...prevData,
                      totalAmount: +zakatmalr + +reszakat,
                      subDonates: [
                        {
                          ...prevData.subDonates[0], // Keep other properties of subDonates intact
                          amount: +zakatmalr + +reszakat,
                          quantity: 1,
                        },
                      ],
                    }));
                  }}
                >
                  اتبرع الان
                </Button>
              </div>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ZakatModal;
