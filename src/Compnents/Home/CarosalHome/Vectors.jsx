import React from "react";
import "./Vector.css";
import { Link } from "react-router-dom";
const Vectors = ({ img, title, to, setShowz, click }) => {
  const geturl = window.location.pathname;
  const scrollToHelm = () => {
    setTimeout(() => {
      const helmSection = document.getElementById("helm");
      if (helmSection) {
        helmSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };
  return (
    <div className="VectorItem">
      <div>
        <img src={img} alt="" />
      </div>
      {click ? (
        geturl === "/" ? (
          <Link onClick={scrollToHelm}>{title} </Link>
        ) : (
          <Link to="/" onClick={scrollToHelm}>
            {title}
          </Link>
        )
      ) : (
        <Link
          to={`${to ? to : geturl}`}
          style={{ color: "#FFC107" }}
          className=""
          onClick={() => {
            setShowz && setShowz(true);
          }}
        >
          {title}
        </Link>
      )}
    </div>
  );
};

export default Vectors;
