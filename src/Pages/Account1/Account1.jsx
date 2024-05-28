import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
import ProfilePhoto from "../../Compnents/Profile/ProfilePhoto";
import Account1com from "../../Compnents/Account1com/Account1com";
import Account1table from "../../Compnents/Account1com/Account1table";
import Account2modal from "../../Compnents/Account2modal/Account2modal";
import CancelInstall from "../../Compnents/CancelInstall/CancelInstall";

const Account1 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showCancel, setShowCancel] = useState(false);

  const handleCloseCancel = () => setShowCancel(false);
  const handleShowCancel = () => setShowCancel(true);
  
  return (
    <div>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Account2modal
        show={show}
        handleClose={handleClose}
        handleShowCancel={handleShowCancel}
      />
      <CancelInstall
        showCancel={showCancel}
        setShowCancel={setShowCancel}
        handleCloseCancel={handleCloseCancel}
      />
      <Container fluid="lg">
        <ProfilePhoto />
        <Account1com />
        <p
          style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}
          className="mt-5"
        >
          التبرعات
        </p>
        <Account1table handleShow={handleShow} />
      </Container>
    </div>
  );
};

export default Account1;
