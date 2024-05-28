import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyPayement from "../../Compnents/Payements/MyPayement";
import UseFetch from "../../UseFetch";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
import PayementModal from "./PayementModal";
import "./Payement.css";
const Payement = () => {
  const ways = UseFetch("Categ");
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(ways?.length).fill(0)
  );

  const handlePaymentClick = (wayIndex, optionIndex) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[wayIndex] = optionIndex;
      return newSelectedOptions;
    });
  };
  const [showz, setShowz] = useState(false);
  const handleClosez = () => setShowz(false);
  const handleShowz = () => setShowz(true);
  return (
    <div>
      {/* Your other components */}
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="md">
        <Row className="justify-content-evenly align-items-center">
          <Col md={10} xs={9} className="" style={{ minHeight: "38rem" }}>
            {ways?.map((way, wayIndex) => (
              <Row style={{ marginBottom: "2rem" }} key={wayIndex}>
                <>
                  <h2>{way.name}</h2>
                  <Col
                    xs={12}
                    sm={12}
                    md={8}
                    className="d-flex justify-content-center align-items-center p-2 border rounded-4 p-4 fawry flex-wrap"
                  >
                    {way.ohterWaysToDonate.map((option, optionIndex) => (
                      <div
                        className="pointer col-md-3 col-sm-12 col-xs-12 p-1"
                        key={optionIndex}
                        onClick={() => {
                          handlePaymentClick(wayIndex, optionIndex);
                          if (window.innerWidth <= 750) {
                            setShowz(true);
                          } else {
                            setShowz(false);
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={option.imageURL}
                          alt=""
                          style={{
                            maxWidth: "100%",
                            maxHeight: "8.25rem",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    ))}
                  </Col>
                  <Col
                    md={4}
                    sm={7}
                    xs={12}
                    className="border p-4 d-flex justify-content-evenly flex-colo rounded-4 modalpay1"
                    style={{ minHeight: "40rem" }}
                  >
                    <MyPayement
                      ele={way.ohterWaysToDonate[selectedOptions[wayIndex]]}
                    />
                  </Col>
                  <div className="modalpay2">
                    <PayementModal
                      handleClose={handleClosez}
                      handleShowz={handleShowz}
                      show={showz}
                      Payemenet={
                        <MyPayement
                          ele={way.ohterWaysToDonate[selectedOptions[wayIndex]]}
                        />
                      }
                    />
                  </div>
                </>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payement;
