import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import { CiMobile3 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import "./WalletBank1.css";
import axios from "axios";
import { baseurl } from "../../BaseUrl";
import UseFetch from "../../UseFetch";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddSource } from "../../Redux/Reducers/Reducers";
const Est = ({ setComIndex, compIndex }) => {
  const data1 = UseFetch("Type/GetjustInstallmentTypes");
  const dispatch = useDispatch();
  const { id } = useParams();
  const [donationData, setDonationData] = useState({
    paymentTypeId: 1,
    payOptionId: 2,
    subDonate: null,
    currency: "EGP",
    employeeLinkId: null,
    donatorDto: {
      name: "mohamed",
      phone: "01223337837",
      email: "mohamed@gmail.com",
    },
    totalAmount: 0,
    cardId: 3,
    bankId: 1,
    installmentId: 1,
  });
  useEffect(() => {
    setDonationData({
      ...donationData,
      paymentTypeId: 1,
      payOptionId: 2,
      cardId: 3,
    });
  }, []);
  const [projects1, setprojects] = useState({ projects: [] });
  const handlechange = (event) => {
    event?.target && setinitialvalue(event.target.value);
    axios
      .get(
        baseurl +
          `Type/GetByIdIncludingJustInstallmentsPortions${
            event.target ? event.target.value : event
          }`
      )
      .then((response) => {
        const data = response.data;
        setprojects({ projects: data });
        event?.target && setinitialvalueP(event.target.value);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const [donate, setdonate] = useState({});
  const handlechange1 = (event, index) => {
    event && event.target && setinitialvalueP(event.target.value);
    axios
      .get(
        baseurl +
          `Project/GetByIdIncludeInstallmentPortionsAsync/${
            event && event.target ? event.target.value : event && event
          }`
      )
      .then((response) => {
        const data = response.data;
        setdonate(data);
         
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setAmountField("");
    setSelectedOption(null);
    setinputhandle("");
  };

  const [selectedOption, setSelectedOption] = useState(undefined);
  const [amountField, setAmountField] = useState(0);

  const handleOptionChange3 = (event, index) => {
    const newValue = Number(index);
    setSelectedOption((prev) => (prev === newValue ? undefined : newValue));
  };
  const [quan, setquan] = useState(1);
  const handleDonationSubmit = (e) => {
    e.preventDefault();
    let newSubDonate;
    if (typeof amountField === "string") {
      newSubDonate = {
        customeName: inputSname ? inputSname : "",
        quantity: 1, // Set your desired value
        amount: +amountField,
        portionId: portionid,
      };
    } else {
      newSubDonate = {
        customeName: inputSname ? inputSname : "",
        quantity: quan,
        amount: amountField / quan,
        portionId: portionid,
      };
    }
    setDonationData((prevData) => ({
      ...prevData,
      subDonate: newSubDonate,
      totalAmount:
        bank == 2
          ? prepaidAmount * quan === 0
            ? monthlyAmount * quan
            : prepaidAmount * quan
          : amountField,
    }));
  };
  const [initialvalue, setinitialvalue] = useState(0);
  const { resource } = useSelector((state) => state.auth);
  const [initialvalueP, setinitialvalueP] = useState(0);
  const [inputhandle, setinputhandle] = useState("");
  const [inputtrue, setinputtrue] = useState(false);
  const [nameIndex, setNameIndex] = useState(0);
  const [inputSname, setinputSname] = useState("");
  useEffect(() => {
    setAmountField(inputhandle);
  }, [inputhandle]);
  const [resData, setresDate] = useState({});
  const settheProject = () => {
    if (id) {
      setinitialvalueP(resData.projectId);
    }
  };
  const [bank, setbank] = useState(0);
  const [portionid, setPortionId] = useState(0);
  const [portobj, setporobj] = useState({});
  const [monthlyAmount, setMonthlyAmount] = useState("");
  const [prepaid, setPrepaid] = useState("");
  const [prepaidAmount, setPrepaidAmount] = useState(-1);
  const handleOptionChange5 = (e) => {
    const selectedValue = e.target.value;
    const [monthlyAmountValue, prepaidValue, prepaidAmountValue] =
      selectedValue.split("|");
    setMonthlyAmount(monthlyAmountValue);
    setPrepaid(prepaidValue);
    setPrepaidAmount(prepaidAmountValue);
  };
  useEffect(() => {
    console.log(donationData, "donationData");
    if (donationData.subDonate !== null) {
      axios
        .post(baseurl + "InstallmentDonate/AddDonate", donationData)
        .then((response) => {
          const blob = new Blob([response.data], {
            type: "text/html",
          });
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => {
          // Handle error
          console.error("Error making donation:", error);
        });
      console.log(donationData);
    }
  }, [donationData.subDonate]);
  useEffect(() => {
    if (id && resource === null) {
      axios
        .get(baseurl + `EmployeeLink/Resource?resource=${id}`)
        .then((res) => {
          setresDate(res.data);
          dispatch(AddSource(id));
          setAmountField(null);
          setSelectedOption(null);
          if (res.data.typId) {
            setinitialvalue(res.data.typId);
            handlechange(res.data.typId);
          }
          if (res.data.bankId !== 0) {
            setbank(res.data.bankId);
          }
        });
    } else if (resource) {
      axios
        .get(baseurl + `EmployeeLink/Resource?resource=${resource}`)
        .then((res) => {
          setresDate(res.data);
          setAmountField(null);
          setSelectedOption(null);
          if (res.data.typId) {
            setinitialvalue(res.data.typId);
            handlechange(res.data.typId);
          }
          if (res.data.bankId !== 0) {
            setbank(res.data.bankId);
          }
        });
    } else if (!id && resource !== null) {
      axios
        .get(baseurl + `EmployeeLink/Resource?resource=${resource}`)
        .then((res) => {
          setresDate(res.data);
          setAmountField(null);
          setSelectedOption(null);
          if (res.data.typId) {
            setinitialvalue(res.data.typId);
            handlechange(res.data.typId);
          }
          if (res.data.bankId !== 0) {
            setbank(res.data.bankId);
          }
        });
    }
  }, []);
  useEffect(() => {
    if (
      (id || resource) &&
      resData.projectId !== 0 &&
      resData.projectId !== null
    ) {
      settheProject();
      handlechange1(resData.projectId);
    }
  }, [projects1]);
  useEffect(() => {
    if ((id || resource) && amountField === "" && resData.portionId !== 0) {
      const data =
        donate?.portions &&
        donate?.portions.find((item) => {
          return item.id === resData.portionId;
        });
      const data2 =
        donate?.portions &&
        donate?.portions.findIndex((item) => {
          return item.id === resData.portionId;
        });
      data && setAmountField(data.price);
      data && setSelectedOption(data2);
    }
    console.log("amountttttt", amountField, resData.portionId);
  }, [donate]);
  console.log("anabank", bank);
  return (
    <div>
      <Container fluid="lg" className="py-5 boxshadowout mandob">
        <Row style={{ justifyContent: "space-between" }}>
          <Col sm={12} md={12}>
            <p
              style={{
                fontSize: "1.7rem",
                color: "#8E8E8E",
                textAlign: "right",
              }}
            >
              بيانات المتبرع
            </p>
            <Form
              className="boxshadow p-3"
              onSubmit={handleDonationSubmit} // Don't need to wrap it in an arrow function
            >
              {/* Social Media handles */}
              <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
                <Form.Label column sm="5" xs={12} md={3} className="label">
                  <img
                    src="../../../assets/Hearttbro3.png"
                    alt=""
                    style={{ width: "1.7rem" }}
                    className="mx-2"
                  />{" "}
                  جهـــــة التبـــــــــــرع :
                </Form.Label>
                <Col sm="7" xs={12} md={9}>
                  <Form.Select
                    onChange={(e) => handlechange(e)}
                    value={initialvalue}
                  >
                    <option>---اختر---</option>
                    {data1?.map((item) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
                <Form.Label column sm="5" xs={12} md={3} className="label">
                  <CiMobile3 size={25} className="mx-2" /> هـــدف
                  التبـــــــــــرع :
                </Form.Label>
                <Col sm="7" xs={12} md={9}>
                  <Form.Select
                    onChange={(e) => handlechange1(e)}
                    value={initialvalueP}
                  >
                    <option>سةستس</option>
                    {projects1?.projects?.projects &&
                      projects1.projects &&
                      projects1.projects.projects.map((ele, projectIndex) => (
                        <option key={projectIndex} value={ele.id}>
                          {ele.name}
                        </option>
                      ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
                <Form.Label column sm="5" xs={12} md={3} className="label">
                  <CiMobile3 size={25} className="mx-2" />
                  تقسيط عن طريق :
                </Form.Label>
                <Col sm="7" xs={12} md={9}>
                  <Form.Select
                    onChange={(e) => {
                      setbank(e.target.value);
                      setPrepaid(false);
                    }}
                    value={bank}
                  >
                    <option value={0}>اختر بنك--</option>
                    <option value={1}>بنك عودة</option>
                    <option value={2}>الاورمان </option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 walletdiv"
                controlId="formLinkedIn"
              >
                <Col sm="7" xs={12} md={9} className="checkwallet">
                  {Object.keys(donate).length !== 0 &&
                    donate?.portions.map((eee, index) => {
                      const isSelected = selectedOption === index;
                      const initialValue = isSelected ? amountField : eee.price;
                      return (
                        <>
                          {eee.isInstallment === true && (
                            <>
                              {!eee.customPortionPrice === true ? (
                                <div
                                  className="flex mb-2 flexmob"
                                  style={{ flexWrap: "nowrap" }}
                                  key={index}
                                >
                                  <Form.Check
                                    type="radio"
                                    label="القيمة الكاملة للكشك ( بضاعة /ثلاجة /جسم الكشك/ توصيل كهرباء )."
                                    name={`radioGroup4${index}`}
                                    id={`option${index}`}
                                    value={index}
                                    checked={
                                      resData.portionId === 0
                                        ? !inputtrue
                                          ? isSelected
                                          : false
                                        : eee.id == resData.portionId
                                    }
                                    onChange={(e) => {
                                      setresDate({ ...resData, portionId: 0 });
                                      setinputtrue(false);
                                      handleOptionChange3(e, index);
                                      setAmountField(eee.price);
                                      setquan(1);
                                      setNameIndex(index);
                                      if (inputSname) {
                                        setinputSname(null);
                                      }
                                      setPortionId(eee.id);
                                      setporobj(eee);
                                    }}
                                    className="p-0"
                                  />
                                  <div
                                    style={{ width: "18rem" }}
                                    className="flex inps"
                                  >
                                    <Button
                                      className="calc h-100 flex justify-content-center align-items-center righttext"
                                      onClick={() => {
                                        setSelectedOption(index);
                                        setAmountField(
                                          (prev) => prev + eee.price
                                        );
                                        setquan((prev) => prev + 1);
                                      }}
                                      disabled={!isSelected}
                                    >
                                      +
                                    </Button>
                                    <div>
                                      <input
                                        type="text"
                                        style={{ height: "100%" }}
                                        className="inp"
                                        value={initialValue}
                                        readOnly
                                      />
                                    </div>
                                    <Button
                                      className="calc h-100 flex justify-content-center align-items-center"
                                      onClick={() => {
                                        setSelectedOption(index);
                                        setAmountField(
                                          (prev) => prev - eee.price
                                        );
                                        setquan((prev) => prev - 1);
                                      }}
                                      disabled={!isSelected}
                                      type="button"
                                    >
                                      -
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className="flex mb-2 flexmob"
                                  style={{ flexWrap: "nowrap" }}
                                  key={index}
                                >
                                  <Form.Check
                                    type="radio"
                                    label="القيمة الكاملة للكشك ( بضاعة /ثلاجة /جسم الكشك/ توصيل كهرباء )."
                                    name={`radioGroup4${index}`}
                                    id={`option${index}`}
                                    value={index}
                                    checked={!inputtrue ? isSelected : false}
                                    onChange={(e) => {
                                      setinputtrue(false);
                                      handleOptionChange3(e, index);
                                      setAmountField(inputhandle);
                                      setquan(1);
                                      setNameIndex(index);
                                      setinputSname(null);
                                    }}
                                    className="p-0"
                                  />
                                  <div
                                    style={{ width: "18rem" }}
                                    className="flex inps"
                                  >
                                    <div>
                                      <input
                                        type="number"
                                        style={{ height: "100%" }}
                                        className="inp"
                                        readOnly={!isSelected}
                                        value={inputhandle}
                                        onChange={(e) => {
                                          setinputhandle(e.target.value);
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                              {eee.needForSpecificName === true &&
                              nameIndex === index ? (
                                <div
                                  style={{ width: "18rem" }}
                                  className="flex inps"
                                >
                                  <div>
                                    <Form.Control
                                      type="text"
                                      className="mb-1"
                                      placeholder="اضافة اسم التنفيذ حسب رغبة المتبرع"
                                      style={{
                                        textAlign: "right",
                                        width: "20rem",
                                      }}
                                      value={inputSname}
                                      onChange={(e) => {
                                        setinputSname(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                              ) : (
                                <></>
                              )}
                            </>
                          )}
                        </>
                      );
                    })}
                </Col>
              </Form.Group>
              {bank == 2 && (
                <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
                  <Form.Label column sm="5" xs={12} md={3} className="label">
                    <img
                      src="../../../assets/Hearttbro3.png"
                      alt=""
                      style={{ width: "1.7rem" }}
                      className="mx-2"
                    />{" "}
                    عدد الاقساط{" "}
                  </Form.Label>
                  <Col sm="7" xs={12} md={9}>
                    <Form.Select onChange={(e) => handleOptionChange5(e)}>
                      <option>--اختار--</option>
                      {portobj.intallments &&
                        portobj.intallments.map((item) => {
                          return (
                            <option
                              value={`${item.monthlyAmount}|${item.prepaid}|${item.prepaidAmount}`}
                            >
                              {item.installmentsCount}
                            </option>
                          );
                        })}
                    </Form.Select>
                  </Col>
                </Form.Group>
              )}
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="5" xs={12} md={5} className="label">
                  <img
                    src="../../../assets/kematbr3.png"
                    width={25}
                    alt=""
                    className="mx-2"
                  />{" "}
                  قيمة التبـــــــــــرع :
                </Form.Label>
                <Col sm="7" md={"6"} xs={12}>
                  <Form.Control
                    type="text"
                    value={bank == 1 ? amountField : 1 * quan}
                  />
                </Col>
              </Form.Group>
              {prepaid && prepaidAmount * quan !== 0 && (
                <Form.Group as={Row} className="mb-3" controlId="">
                  <Form.Label column sm="5" xs={12} md={5} className="label">
                    <img
                      src="../../../assets/kematbr3.png"
                      width={25}
                      alt=""
                      className="mx-2"
                    />{" "}
                    قيمة المقدم
                  </Form.Label>
                  <Col sm="7" md={"6"} xs={12}>
                    <Form.Control type="text" value={prepaidAmount * quan} />
                  </Col>
                </Form.Group>
              )}

              <p
                style={{
                  textAlign: "right",
                  fontSize: "1.6rem",
                  color: "#FF0000",
                  cursor: "pointer",
                }}
              >
                إضافة تبرع جديد
              </p>
              <button
                className="w-75 p-3 my-3"
                style={{ background: "#0C6A2C", border: "none" }}
                type="submit"
                onClick={handleDonationSubmit}
              >
                متابعة التبرع
                <FaHeart className="mx-1" />
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Est;
