import React from "react";

const HeaderPhoto = ({ imageUrl, title }) => {
  const styles = {
    width: "100%",
    height: "100%", // Adjust the height as needed
    background: `url(${imageUrl}) center/cover no-repeat`,
  };

  return (
    <>
      <div className="position-relative mb-5" style={{ height: "20.2rem" }}>
        <div className="w-100" style={styles}></div>
        <div className="bggreen"></div>
      </div>
    </>
  );
};

export default HeaderPhoto;
