import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./CarosalHover.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarosalHover.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { datahov } from "./CarosalHovData";
import HoveredInfo from "./HoveredInfo";
import UseFetch from "../../../UseFetch";

export default function CarosalHover() {
  const data2 = UseFetch("OnlineNews");
  console.log(data2, "ormannewwws");
  console.log(data2?.length);
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
          },
          768: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        style={{ width: "100%", margin: "auto" }}
        className="swipeHover"
        spaceBetween={0}
      >
        {data2?.map((item, index) => {
        const parts = item.imageURL.split("/");
        const fileName = "https://ormantest.runasp.net/OnlineNewsPhotos/"+parts.pop();
          return (
            <SwiperSlide className="position-relative slideflow">
              <HoveredInfo desc={item.description} link={item.link} date={item.date} />
              <img src={fileName} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
