import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
// import required modules
import "./OrmanAct3d.css";

export default function Orman3dAct() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        modules={[
          EffectCoverflow,
          Pagination,
          Mousewheel,
          Keyboard,
          Navigation,
          Autoplay,
        ]}
        className="mySwiper car3d"
        style={{ height: "20rem", width: "100%" }}
      >
        <SwiperSlide>
          <img src="../../../../assets/Activitiess.png" alt=""  loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assets/Ramadan.png" alt=""loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assets/activitiesm.png" alt="" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assets/activitiese.png" alt="" loading="lazy"/>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="../../../../assets/Activitiess.png" alt="" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assets/activitiese.png" alt=""  loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assets/Ramadan.png" alt=""loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assets/activitiesm.png" alt="" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assets/activitiese.png" alt="" loading="lazy"/>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="../../../../assets/Activitiess.png" alt="" loading="lazy"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
