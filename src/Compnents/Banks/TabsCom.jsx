import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BankTable from "./ElectronicBank";
import "./Tabs.css";
import Mandob from "./Mandob";
import WalletBank from "./WalletBank";
import E2tman from "./E2tman";
import E2tmanmain from "./E2tmanmain";
import Est from "./Est";
import UseFetch from "../../UseFetch";
const TabsCom = () => {
  const [compIndex, setComIndex] = useState(0);

  const CustomTab = ({ title, onClick }) => {
    return (
      <span
        style={{ cursor: "pointer" }} // Add pointer cursor to indicate it's clickable
        onClick={onClick}
      >
        {title}
      </span>
    );
  };
  const Tabcus = ({ img, title, onClick }) => {
    return (
      <div>
        <div onClick={onClick}>
          <img
            src={`../../../assets/${img}`}
            alt=""
            style={{ width: "2rem", height: "2rem" }}
          />
        </div>{" "}
        <span>{title}</span>
      </div>
    );
  };
  const data = UseFetch("PayOption");
  console.log(data);
  return (
    <Tabs
      defaultActiveKey="home1"
      id="fill-tab-example"
      className="mb-3 thetabs"
      fill
      style={{ width: "49rem" }}
    >
      {data?.map((item, index) => {
        return (
          <Tab
            eventKey={`home${index + 1}`}
            title={<Tabcus title={item.name} img={"e2tman.png"} />}
          >
            <E2tmanmain payid={item.id} cards={item.cards} />
          </Tab>
        );
      })}
      <Tab
        eventKey="profile"
        title={
          <Tabcus
            title="محافظة إلكترونية"
            onClick={() => setComIndex(0)}
            img={"mohafzt.png"}
          />
        }
        style={{ border: "0" }}
        className="bankk"
      >
        <WalletBank setComIndex={setComIndex} compIndex={compIndex} />
      </Tab>
      <Tab
        eventKey="longer-tab"
        title={<Tabcus title="حساباتنا في البنوك" img={"hsabat.png"} />}
      >
        <BankTable />
      </Tab>
      <Tab
        eventKey="Manodb"
        title={<Tabcus title="إرسال مندوب" img={"delivery.png"} />}
      >
        <Mandob />
      </Tab>
      <Tab
        eventKey="Est"
        title={<Tabcus title="الاقساط" img={"delivery.png"} />}
      >
        <Est />
      </Tab>
    </Tabs>
  );
};

export default TabsCom;
