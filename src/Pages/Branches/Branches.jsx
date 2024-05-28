import React from "react";
import "./Branches.css";
import { Col, Container, Row } from "react-bootstrap";
import Branch from "./Branch";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
import UseFetch from "../../UseFetch";
const Branches = () => {
  const branch = UseFetch("Branch");
  return (
    <>
      <HeaderPhoto imageUrl="../../../assets/activeback.png" />

      <Container className="" fluid="lg">
        <Row>
          {branch?.map((item) => {
            return (
              <Col xs={12} sm={6} className="p-2">
                {console.log(item)}
                <Branch
                  title={item.name}
                  address={item.adrees}
                  lat={item.latitude}
                  lon={item.longitude}
                  phones={item.phones}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Branches;
