import React, { useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import "./Carosal3d.css";
import UseFetch from "../../../UseFetch";
const FeaturesCarousel = ({ goToSlide, setGoToSlide }) => {
  const [offsetRadius, setOffsetRadius] = React.useState(2);
  const [showNavigation, setShowNavigation] = React.useState(false);
  const data2 = UseFetch("SuccessPartener");
 // Updated to contain paths to five different images
  useEffect(() => {
    const handleResize = () => {
      // Adjust offsetRadius based on screen width
      if (window.innerWidth <= 700) {
        setOffsetRadius(0);
      } else {
        setOffsetRadius(2);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to set offsetRadius based on the initial screen width
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const sliders =
    data2 !== null &&
    data2?.map((imagePath, index) => {
      const parts = imagePath.imageURL.split("/");
      const fileName = "https://ormantest.runasp.net/SuccessPartenerPhotos/"+parts.pop();
      return {
        key: index,
        content: (
          <>
            <img
            src={fileName}
            alt={`mage ${index + 1}`}
            style={{ height: "100%", objectFit: "contain", maxWidth: "15rem" }}
            className="sora3d"
            />
          </>
        ),
        onClick: () => setGoToSlide(index),
      };
    });

  return (
    <div className="mb-4">
      <h2 className="mb-5">شركائنا في النجاح</h2>
      <div className="main-bg">
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "15rem",
            width: "80%",
            margin: "0px auto",
          }}
          className="slidercon"
        >
          <RxDoubleArrowRight
            size={30}
            className="gallery-arrows"
            onClick={() => setGoToSlide(goToSlide + 1)}
          />

          <div className="" style={{ height: "100%", width: "100%" }}>
            <Carousel
              slides={sliders ? sliders : []}
              goToSlide={goToSlide}
              offsetRadius={offsetRadius}
              showNavigation={showNavigation}
            />
          </div>
          <RxDoubleArrowLeft
            className="gallery-arrows"
            size={30}
            onClick={() => setGoToSlide(goToSlide - 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
