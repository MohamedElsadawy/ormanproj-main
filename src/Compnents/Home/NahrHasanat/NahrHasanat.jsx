import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NahrHasanat.css";
import NahrModal from "./NahrModal";
import { useParams } from "react-router-dom";

const NahrHasanat = () => {
  const [showz, setShowz] = useState(false);
  const handleClosez = () => setShowz(false);
  const handleShowz = () => setShowz(true);
  const { id } = useParams();
  const [donationData, setDonationData] = useState({
    paymentTypeId: 1,
    payOptionId: 2,
    subDonates: [
      {
        customeName: "",
        quantity: 0,
        amount: 0,
        portionId: 1,
      },
    ],
    currency: "EGP",
    employeeLinkId: id ? id : null,
    donatorDto: {
      name: "",
      phone: "",
      email: "",
    },
    totalAmount: 0,
    cardId: 3,
    deliveryOrder: {
      fullAddress: "sksksksksk",
      cityId: 1,
    },
  });

  const handleAmountClick = (amount) => {
    setDonationData((prevData) => ({
      ...prevData,
      totalAmount: amount,
    }));
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setDonationData((prevData) => ({
      ...prevData,
      totalAmount: value,
    }));
  };
  return (
    <div
      style={{
        maxWidth: "44rem",
        margin: "auto",
        textAlign: "right",
        zIndex: "998",
      }}
      className="nahr py-2"
    >
      <Container fluid="md">
        <Row>
          <Col md={6} sm={6} xs={12}>
            <h2 style={{ fontWeight: "700" }}>
              <span style={{ color: "#0C6A2C" }}>نهر.. </span>
              <span style={{ color: "#8DC540" }}>الحسانات</span>
            </h2>
            <p className="m-0" style={{ color: "#8E8E8E" }}>
              بعطاء واحد تساهم في مشاريع متعددة ونهر من الحسنات كتوزيع المصاحف و
              كفالة الدعاة وكفالة المعتمرين و سقيا الماء بالاضافة الى مشاريع
              أخر،ساهم الان
            </p>
          </Col>
          <Col
            md={6}
            sm={6}
            xs={12}
            className="flex-colo justify-content-around"
            style={{ minHeight: "8rem" }}
          >
            <div className="flex justify-content-between align-items-center w-100">
              <div
                className="px-4 py-2 nahrrkm"
                style={{ cursor: "pointer" }}
                onClick={() => handleAmountClick(50)}
              >
                50
              </div>
              <div
                className="px-4 py-2 nahrrkm"
                style={{ cursor: "pointer" }}
                onClick={() => handleAmountClick(100)}
              >
                100
              </div>
              <div
                className="px-4 py-2 nahrrkm"
                onClick={() => handleAmountClick(150)}
                style={{ cursor: "pointer" }}
              >
                150
              </div>
              <div
                className="px-4 py-2 nahrrkm"
                onClick={() => handleAmountClick(200)}
                style={{ cursor: "pointer" }}
              >
                200
              </div>
            </div>
            <div className="w-100">
              <form className="w-100 flex" style={{ height: "3rem" }}>
                <div style={{ flexGrow: "1" }}>
                  <div className="w-100 h-100">
                    <input
                      type="number"
                      style={{ width: "100%" }}
                      className="inputt h-100"
                      placeholder="اي مبلغ"
                      value={donationData.totalAmount}
                      onChange={handleInputChange}
                      min={5}
                    />
                  </div>
                </div>
                <div
                  className="h-100"
                  style={{ flexGrow: "5", marginRight: "0.7rem" }}
                >
                  <button
                    className="h-100 w-100 btnn"
                    onClick={handleShowz}
                    type="button"
                  >
                    اتبرع الان
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <NahrModal
          show={showz}
          handleClose={handleClosez}
          donationData={donationData}
          setDonationData={setDonationData}
        />
      </Container>
    </div>
  );
};

export default NahrHasanat;
