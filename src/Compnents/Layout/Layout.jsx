import React from "react";
import HeaderNav from "./HeaderNav/HeaderNav";
import MainNav from "./MainNav/MainNav";
import Footer from "./Footer/Footer";
import Vectors from "../Home/CarosalHome/Vectors";

const Layout = ({ children, setShowz, showz }) => {
  console.log("showzzz",showz)
  return (
    <div className="">
      <div className="dataIn2">
        <Vectors img="../../../assets/Vector.png" title="إتبرع الأن" to="/Banks" />
        <Vectors img="../../../assets/Vector2.png" title="حقق الحلم" click={true} />
        <Vectors img="../../../assets/Vector3.png" title="احسب زكاتك" setShowz={setShowz} cl={true} />
        <Vectors img="../../../assets/Vector4.png" title="Whats App" />
      </div>
      <div>
        <HeaderNav />
        <MainNav setShowz={setShowz} show={showz} />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
