import React, { useState } from "react";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
import { Container, Row } from "react-bootstrap";
import NewsCard from "../../Compnents/News/NewsCard";
import UseFetch from "../../UseFetch";

const News = () => {
  const [cardindex, setcardindex] = useState(6);
  const data2 = UseFetch("OrmanNews");
  console.log(data2, "anadata2");
  const arr = [
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
    { com: <NewsCard /> },
  ];

  return (
    <div>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          اخبارنا
        </p>
        <Row>
          {data2?.slice(0, cardindex).map((item) => {
            return (
              <NewsCard
                image={item?.imagesURLs[0]?.imageURL}
                title={item.title}
                id={item.id}
              />
            );
          })}
        </Row>
        <button
          onClick={() => {
            if (cardindex + 6 < data2?.length) setcardindex((prev) => prev + 6);
            else setcardindex(data2?.length);
          }}
        >
          show more
        </button>
      </Container>
    </div>
  );
};

export default News;
