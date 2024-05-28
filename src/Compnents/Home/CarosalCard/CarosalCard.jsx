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

import CardItem from "./CardItem";
import UseFetch from "../../../UseFetch";

export default function CarosalCard() {
  const data = UseFetch("Category");
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        style={{ height: "fit-content", width: "80%", margin: "auto" }}
        className=" swipe "
        spaceBetween={30}
      >
        {data?.map((item) => {
          return (
            <SwiperSlide className="swipeima">
              <CardItem
                img={item.pathPhoto}
                title={item.name}
                desc={item.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
