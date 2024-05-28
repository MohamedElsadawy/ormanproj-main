import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { data } from "../../../CarosalHalfData";
import "./CarosalHalf.css";
import PieChart1 from "../Pie/PieChart";
import UseFetch from "../../../UseFetch";
export default function CarosalHalf({ setDonatorData, donatorData }) {
  const dataw = UseFetch("Dream");
  const handleSlideChange = (swiper) => {
    setDonatorData((prevData) => ({
      ...prevData,
      dreamId: dataw !== null && dataw[swiper.realIndex].id,
    }));
  };
  console.log("labaa", dataw);
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
        style={{ height: "100%", width: "100%", margin: "auto" }}
        className=""
        onSlideChange={handleSlideChange}
      >
        {dataw?.map((item) => {
            const parts = item.image.split("/");
            const fileName = "https://ormantest.runasp.net/DreamesPhotos/"+parts.pop();
          return (
            <SwiperSlide style={{ position: "relative" }}>
              <div className="content">
                <div className="info flex flex-column justify-content-around align-items-center">
                  <p
                    style={{
                      fontSize: "1.8rem",
                      borderBottom: "2px solid #FFC107",
                      fontWeight: "700",
                    }}
                    className="p-1 slidesw"
                  >
                    {item.name}
                  </p>
                  <div className="flex justify-content-between align-items-center w-100">
                    <div className="flex-colo justify-content-center align-items-center">
                      <div>تم جمع مبلغ </div>
                      <div>{item.currentAmount}</div>
                    </div>
                    <div className="flex-colo justify-content-center align-items-center">
                      <div>المبلغ المراد</div>
                      <div>{item.amountNeeded}</div>
                    </div>
                  </div>
                  <PieChart1
                    value={
                      item.currentAmount
                        ? item.amountNeeded
                          ? (item.currentAmount * 100) / item.amountNeeded
                          : 0
                        : 0
                    }
                    size={140}
                    strokewidth={10}
                  />
                </div>
              </div>
              <img src={fileName} alt="" className="Halfimg" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
