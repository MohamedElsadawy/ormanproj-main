import React from "react";
import ZakatModal from "../../Compnents/Zakat/ZakatModal";

const Zakat = ({ show, handleClose, handleShow, setShow }) => {
  
  return (
    <div>
      <ZakatModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        setShow={setShow}
      />
    </div>
  );
};

export default Zakat;
