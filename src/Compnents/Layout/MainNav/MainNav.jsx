import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./MainNav.css";
import { Link } from "react-router-dom";
import UseFetch from "../../../UseFetch";
const MainNav = ({ setShowz, showz }) => {
  const activities = [
    { id: 1, title: "القضاء على الجوع والفقر", path: "/activities" },
    {
      id: 2,
      title: "لمدن والمجتمعات المستدامة وتوفير المياه النظيفة",
      path: "/activities",
    },
    { id: 3, title: "الصحة الجيدة والرفاه", path: "/activities" },
    { id: 4, title: "العمل اللائق والنمو الاقتصادي", path: "/activities" },
    { id: 5, title: "ساهم في الخير", path: "/activities" },
  ];
  const data = UseFetch("Category");
  const scrollToHelm = () => {
    const helmSection = document.getElementById("helm");
    if (helmSection) {
      helmSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{ margin: "0" }}>
          <img
            src="../../../assets/orman.png"
            style={{ width: "10rem" }}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="" href="">
              <Link to="/">الصفحة الرئيسية</Link>
            </Nav.Link>
            <NavDropdown
              title="انشطة الاورمان"
              id="basic-nav-dropdown"
              className="flex-colo justify-content-between"
              style={{ zIndex: "84837" }}
            >
              {data?.map((activity) => {
                return (
                  <NavDropdown.Item key={activity.id}>
                    <Link
                      to={`/Activities/${activity.id}`}
                      style={{ width: "100%" }}
                      class="dropdown-item"
                      tabIndex="0"
                      role="button"
                    >
                      {activity.name}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link className="">
              <Link to="/About">عن الاورمان</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/News">اخبارنا</Link>
            </Nav.Link>
          </Nav>
          <Nav className="me-auto ff">
            <div className="flex">
              <div className="navBor">
                <a
                  onClick={scrollToHelm}
                  style={{ color: "black", cursor: "pointer" }}
                >
                  حقق الحلم
                </a>
              </div>
              <div className="navBor">
                <Link style={{ color: "black" }} to="/Banks">
                  اتبرع الان
                </Link>
              </div>
            </div>
            <div className="navBor">
              <Link
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => setShowz(true)}
              >
                احسب زكاتك
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
