import logo from "./logo.svg";
import "./App.css";
import Layout from "./Compnents/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Family.css";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import OrmanActivities from "./Pages/OrmanActivities/OrmanActivities";
import OrmanActivity from "./Pages/OrmanActivities/OrmanActivity/OrmanActivity";
import Banks from "./Pages/Banks/Banks";
import RegisterMagles from "./Compnents/RegisterMagles/RegisterMagles";
import Register from "./Compnents/Register/Register";
import Login from "./Compnents/Login/Login";
import { useEffect, useState } from "react";
import Branches from "./Pages/Branches/Branches";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import { Table } from "react-bootstrap";
import Reciept from "./Compnents/Reciept/Reciept";
import RecieptPage from "./Pages/Reciept/RecieptPage";
import Profile from "./Pages/Profile/Profile";
import News from "./Pages/News/News";
import Account1 from "./Pages/Account1/Account1";
import Payement from "./Pages/PayementWays/Payement";
import PartenerSuccess from "./Pages/PartenerSuccess/PartenerSuccess";
import Zakat from "./Pages/Zakat/Zakat";
import Code from "./Pages/Code/Code";
import { useSelector } from "react-redux";
import Response from "./Pages/Response/Response";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import EmailForgetPass from "./Pages/EmailForget/EmailForgetPass";
import NewsDetails from "./Pages/NewsDetails/NewsDetails";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
function App() {
  const history = useLocation();
  const { auth } = useSelector((state) => state.auth);
  const { info } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [history]);
  const [showz, setShowz] = useState(false);
  const handleClosez = () => setShowz(false);
  const handleShowz = () => setShowz(true);
  return (
    <div className="App" dir="rtl" style={{}}>
      <div style={{ zIndex: "983837373737733737" }}>
        <ToastContainer />
      </div>
      <Zakat
        show={showz}
        handleClose={handleClosez}
        handleShow={handleShowz}
        setShow={setShowz}
      />
      <Layout setShowz={setShowz} showz={showz}>
        <Routes>
          <Route exact path="/:id1?" element={<Home />} />
          <Route exact path="/About" element={<AboutUs />} />
          <Route exact path="/Activities/:id" element={<OrmanActivities />} />
          <Route
            exact
            path="/Activities/:id/:id1"
            element={<OrmanActivity />}
          />
          <Route exact path="/Banks/:id?" element={<Banks />} />
          <Route
            exact
            path="/RegisterManagement"
            element={<RegisterMagles />}
          />
          {auth === null && (
            <>
              {" "}
              <Route exact path="/Register" element={<Register />} />
              <Route exact path="/Login" element={<Login />} />
            </>
          )}
          <Route exact path="/Branches" element={<Branches />} />
          <Route
            exact
            path="/Account/Reset_Password"
            element={<ForgetPassword />}
          />
          <Route exact path="/ForgetPass" element={<EmailForgetPass />} />
          <Route exact path="/Table" element={<RecieptPage />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/News" element={<News />} />
          {info && <Route exact path="/Account1" element={<Account1 />} />}
          <Route exact path="/Payement" element={<Payement />} />
          <Route exact path="/AddPartener" element={<PartenerSuccess />} />
          <Route exact path="/:url1/:url2/:url3/:url4" element={<Response />} />
          <Route exact path="/Code" element={<Code />} />
          <Route exact path="/News/:id" element={<NewsDetails />} />
          <Route exact path="/ChangePassword" element={<ChangePassword />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
