import React from "react";
import OrmanActCard from "../../../Compnents/Activities/OrmanActCard";
import { Container, Row } from "react-bootstrap";
import HeaderPhoto from "../../../Compnents/HeaderPhoto/HeaderPhoto";
import OrmanActivityCard from "./OrmanActivityCard";
import Orman3dAct from "./OrmanAct3d";
import UseFetch from "../../../UseFetch";
import { useParams } from "react-router-dom";

const OrmanActivity = ({ title }) => {
  const { id1 } = useParams();
  const data = UseFetch(`Project/${id1}`);
  console.log("ananaurk", data?.imageURL);
  return (
    <>
      <HeaderPhoto imageUrl="../../../../assets/actfakr1.png" />
      <Container fluid="lg">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          {/* {data.name} */}
          {data?.name}
        </p>
        <Row>
          <OrmanActivityCard
            image={data?.imageURL}
            title={data?.name}
            description={data?.description}
          />
        </Row>
        <Orman3dAct />
      </Container>
    </>
  );
};

export default OrmanActivity;
