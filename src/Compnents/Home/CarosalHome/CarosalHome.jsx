import React from "react";
// Import Swiper React components
import "./CarosalHome.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Social from "./Social";
import UseFetch from "../../../UseFetch";
// import required modules

export default function CarosalHome() {
  const data = UseFetch("HomeSlider");
  console.log("anahomeslider", data);
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper swiper2"
        style={{ height: "52rem", width: "100%" }}
      >
        <div className="bgop">
          <div className="dataOut">
            <div className="dataIn1">
              <img src="../../../assets/5er.png" alt="" className="i5er" />
              {/* <p>
                <span style={{fontWeight:"900"}}>أعمــل خيــر بالتقسيط </span>
                <span style={{fontWeight:"500"}}>شارك في كفالة يتيم بقسط </span>
                <span > شهري <span className="three">300</span> جنية</span>
              </p> */}
            </div>

            <div className="dataIn3">
              <Social />
            </div>
          </div>
        </div>

        {data?.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.imgeURL} alt="" className="imageSlide" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
