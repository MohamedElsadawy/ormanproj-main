import React from "react";
import "./HeaderNav.css";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logoinfo, Logout } from "../../../Redux/Reducers/Reducers";
const HeaderNav = () => {
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.auth);

  return (
    <div className="header flex col" dir="rtl">
      <div className="flex">
        <div>
          {" "}
          <Link to={"/Payement"}>طرق اخري للتبرع | &nbsp;</Link>{" "}
        </div>
        <div>
          {" "}
          <Link to={"/Banks"}>حساباتنا في البنوك</Link> | &nbsp;
        </div>
        <div>
          <Link to="/Branches">فروعنا</Link>
        </div>
      </div>
      <div className="flex">
        <div>En |</div>
        {auth !== null ? (
          <Link
            to="/Login"
            onClick={() => {
              dispatch(Logout());
              dispatch(Logoinfo());
            }}
          >
            &nbsp; تسجيل الخروج &nbsp;
          </Link>
        ) : (
          <Link to="/Login"> &nbsp; تسجيل الدخول &nbsp;</Link>
        )}
        {info && (
          <div style={{ marginTop: "rem" }}>
            <Link to="/Account1">
              <FaUser />
            </Link>
          </div>
        )}
        <div>
          <img
            src="../../../assets/orman.png"
            alt=""
            style={{ width: "7rem", marginRight: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
