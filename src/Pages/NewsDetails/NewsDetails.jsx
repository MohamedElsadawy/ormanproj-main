import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarosalCard.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { useParams } from "react-router-dom";
import NewsCard from "../../Compnents/News/NewsCard";
import UseFetch from "../../UseFetch";
import { Row } from "react-bootstrap";
import NewsDetailsCard from "./NewsDetailsCard";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";

export default function NewsDetails() {
  const { id } = useParams();
  const data = UseFetch(`OrmanNews/${id}`);
  console.log("sjs", `OrmanNews/${id}`);
  return (
    <>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        style={{
          width: "80%",
          margin: "auto",
        }}
        className="swipe"
        spaceBetween={30}
      >
        {data?.imagesURLs?.map((item) => {
          return (
            <SwiperSlide className="swipeima">
              <NewsDetailsCard
                image={item.imageURL}
                describtion={data?.describtion}
                title={data?.title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
