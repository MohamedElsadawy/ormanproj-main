import React from "react";
import { Container, Row } from "react-bootstrap";
import PersonCard from "../Personcard/PersonCard";
import OrmanActCard from "./OrmanActCard";

const arr = [
  {
    title: "كراتين رمضان",
    image: "Ramadan.png",
  },
  {
    title: "لحوم الاضاحي",
    image: "adha.png",
  },
  {
    title: "ذبح خروف أو عجل",
    image: "5rof.png",
  },
  {
    title: "إعانة اسر فقيرة ",
    image: "poor.png",
  },
  {
    title: "وجبات إفطار ساخنة",
    image: "ftar.png",
  },
];
const OrmanActivitiesCom = ({ title, data, idParam }) => {
  return (
    <Container fluid="lg">
      <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
        {title}
      </p>
      <Row className="">
        {data?.projects.map((item) => {
          return (
            <>
              {console.log("aksks", item)}
              <OrmanActCard
                title={item.name}
                image={item.imageURL}
                id={idParam}
                desc={item.description}
                idcard={item.id}
              />
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default OrmanActivitiesCom;
