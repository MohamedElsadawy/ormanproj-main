import React from "react";
import { Accordion, Table } from "react-bootstrap";
import "./Account1table.css";
import UseFetch from "../../UseFetch";
import { useSelector } from "react-redux";
const Account1table = ({ handleShow }) => {
  const reciept = [
    {
      info: [
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
      ],
    },
    {
      info: [
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
      ],
    },
    {
      info: [
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
        {
          type: "زكــاة",
          goal: "مستشفى شفاء الاورمان لسرطان الكبار بالصعيد",
          sahm: "القيمة الكاملة لعملية إزالة ورم سرطاني",
          value: "1.00",
          Est: "11 من 15",
        },
      ],
    },
  ];
  const { info } = useSelector((state) => state.auth);
  console.log(info);
  const data = UseFetch(`Donate/history/01929338238`);
  console.log("anadata", data);
  return (
    <div>
      <Accordion defaultActiveKey="0" className="custom-accordion acco1">
        {data &&
          data.map((item, index) => {
            return (
              <Accordion.Item eventKey={index} className="jd">
                <Accordion.Header
                  style={{ textAlign: "right" }}
                  className="flex justify-content-between"
                >
                  <div className="w-100 h-100 d-flex justify-content-between fonthead">
                    <div className="mx-2 ">
                      <span style={{ fontSize: "1.6rem" }}>رقم الايصال : </span>
                      15145152
                    </div>
                    <div className="mx-2">
                      <span style={{ fontSize: "1.6rem" }}>التاريخ : </span>
                      {item.date}{" "}
                    </div>
                    <div className="mx-2">
                      <span style={{ fontSize: "1.6rem" }}>
                        {" "}
                        طريقة الدفع :{" "}
                      </span>
                      {item.payOption}
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Table
                    striped
                    bordered
                    hover
                    className=" tableshow"
                    style={{ borderRadius: "20px" }}
                  >
                    <thead>
                      <tr className="rowtable">
                        <th className="firstth">م</th>
                        <th>نـوع التبــرع</th>
                        <th>هدف التبرع</th>
                        <th>سهـــــم</th>
                        <th>قيمة التبرع</th>
                        <th className="lastth">عدد الاقساط</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {item.info.map((element, innerIndex) => {
                        return (
                          <tr
                            style={{ textAlign: "right" }}
                            key={innerIndex}
                            onClick={handleShow}
                          >
                            <td>{index + 1}</td>
                            <td>{element.type}</td>
                            <td className="colwidth">{element.goal}</td>
                            <td className="colwidth">{element.sahm}</td>
                            <td>{element.value}</td>
                            <td>{element.Est}</td>
                            <td>
                              <div className="navBor">تبرع مرة اخرى</div>
                            </td>
                          </tr>
                        );
                      })} */}
                    </tbody>
                  </Table>
                  <div className="tablehide">
                    {/* {item.info.map((element, innerIndex) => (
                      <ul
                        className="rec-list py-1 px-4 "
                        key={innerIndex}
                        onClick={handleShow}
                      >
                        <li>نـوع التبــرع: {element.type}</li>
                        <li>هدف التبرع: {element.goal}</li>
                        <li>سهـــــم: {element.sahm}</li>
                        <li>قيمة التبرع: {element.value}</li>
                        <li>عدد الاقساط: {element.Est}</li>
                      </ul>
                    ))} */}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
      <p
        style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}
        className="mt-5"
      >
        التبرعات
      </p>
      <Table
        striped
        bordered
        hover
        className=" tableshow"
        style={{ borderRadius: "20px" }}
      >
        <thead>
          <tr className="rowtable">
            <th className="firstth">م</th>
            <th>نـوع التبــرع</th>
            <th>هدف التبرع</th>
            <th>قيمة التبرع</th>
            <th className="lastth">عدد الاقساط</th>
            <th className="lastth"></th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ textAlign: "right" }} onClick={handleShow}>
            <td>1</td>
            <td>زكــاة</td>
            <td>مستشفى شفاء الاورمان لسرطان الكبار بالصعيد</td>
            <td className="colwidth">1.00EGP </td>
            <td className="colwidth">11 من 15</td>
            <td>
              <a
                style={{
                  color: "#034EA2",
                  borderBottom: "1px solid #034EA2",
                }}
              >
                إضغط هنا للمزيد
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Account1table;
