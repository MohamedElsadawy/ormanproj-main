import React, { useEffect, useState } from "react";
import CarosalCard from "../../Compnents/Home/CarosalCard/CarosalCard.jsx";
import "./Home.css";

import CarosalHalf from "../../Compnents/Home/CarosalHalf/CarosalHalf.jsx";
import { Col, Container, Row } from "react-bootstrap";
import Donate from "../../Compnents/Home/CarosalHalf/Donate.jsx";
import CarosalHover from "../../Compnents/Home/CarosalHover/CarosalHover.jsx";
import Carosal3d from "../../Compnents/Home/Carosal3d/Carosal3d.jsx";
import NahrHasanat from "../../Compnents/Home/NahrHasanat/NahrHasanat.jsx";
import CarosalHome from "../../Compnents/Home/CarosalHome/CarosalHome.jsx";
import Vectors from "../../Compnents/Home/CarosalHome/Vectors.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../BaseUrl.js";
import { useSelector } from "react-redux";
var items = [1, 2, 3, 4, 5, 7, 9, 10, 11, 12];

const Home = () => {
  const [goToSlide, setGoToSlide] = React.useState(0);
  const { resource } = useSelector((state) => state.auth);

  const [donatorData, setDonatorData] = useState({
    dreamId: 0,
    donatorDto: {
      name: "",
      phone: "",
      email: "",
    },
    currency: "EGP",
    employeeLinkId: null,
    totalAmount: 0,
    cardId: 0,
  });
  const { id1 } = useParams();
  useEffect(() => {
    console.log(id1, "jejsjsjsjsj");
    if (id1 !== undefined && id1 !== "Login") {
      axios
        .get(baseurl + `EmployeeLink/Resource?resource=${id1}`)
        .then((res) => {
          setDonatorData({
            ...donatorData,
            employeeLinkId: res.data.id,
          });
        })
        .catch((err) => {});
      console.log("anaakkahshshhdshdhdhdhdhhdddddddd", id1);
    }
  }, []);
  return (
    <div>
      <CarosalHome />
      <NahrHasanat />
      <div className="sectionspace">
        <div className="mb-5">
          <h2>انشطة جمعية الاورمان</h2>
          <p
            style={{
              maxWidth: "46.2rem",
              textAlign: "center",
              margin: "auto",
              color: "#8E8E8E",
            }}
          >
            منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على
            التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن
            الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا.
          </p>
        </div>
        <CarosalCard />
      </div>
      <Container fluid="md">
        <Row>
          <Col md={5} style={{ padding: "0", height: "31rem" }}>
            <Donate donatorData={donatorData} setDonatorData={setDonatorData} />
          </Col>
          <Col md={7} style={{ padding: "0", height: "31rem" }}>
            <CarosalHalf
              donatorData={donatorData}
              setDonatorData={setDonatorData}
            />
          </Col>
        </Row>
      </Container>
      <div className="sectionspace">
        <h2 className="mb-5">أخبار أون لاين</h2>
        <CarosalHover />
      </div>
      <div className="position-relative " style={{ width: "100%" }}>
        <Carosal3d goToSlide={goToSlide} setGoToSlide={setGoToSlide} />
      </div>
    </div>
  );
};

export default Home;
