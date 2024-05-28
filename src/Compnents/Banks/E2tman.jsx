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
import E2tman3cont2 from "./E2tman3cont2";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddSource } from "../../Redux/Reducers/Reducers";
import { toast } from "react-toastify";
const E2tman = ({ donationData, setDonationData, cards }) => {
  const { id } = useParams();
  const [initialvalue, setinitialvalue] = useState(0);
  const { resource } = useSelector((state) => state.auth);
  console.log("autthh", resource);
  const dispatch = useDispatch();
  const [initialvalueP, setinitialvalueP] = useState(0);
  const data1 = UseFetch("Type/GetAllTypes");
  const [projects1, setprojects] = useState({ projects: [] });
  const handlechange = (event) => {
    event?.target && setinitialvalue(event.target.value);
    if (event?.target) settryfetch(false);
    setAmountField(0);
    axios
      .get(baseurl + `Type/${event.target ? event.target.value : event}`)
      .then((response) => {
        const data = response.data;
        setprojects({ projects: data });
        event?.target && setinitialvalueP(event.target.value);
        setdonate({});

        console.error("sahhh awi", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const [resData, setresDate] = useState({});
  const [selectedPayment, setSelectedPayment] = useState(""); // State to hold the selected payment option
  const handlePaymentChange = (event) => {
    setSelectedPayment(Number(event.target.value)); // Update the selected payment option
    setDonationData((prevData) => ({
      ...prevData,
      cardId: Number(event.target.value),
    }));
  };
  const settheProject = () => {
    if (id) {
      setinitialvalueP(resData.projectId);
    }
  };
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
    setDonationData({ ...donationData, cardId: event.target.value });
  };

  const [donate, setdonate] = useState({});
  const handlechange1 = (event) => {
    event && event.target && setinitialvalueP(event.target.value);
    axios
      .get(
        baseurl +
          `Project/${
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
    setAmountField(null);
    setSelectedOption(null);
    setinputhandle("");
  };
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [amountField, setAmountField] = useState(0);
  const handleOptionChange3 = (event, index) => {
    const newValue = Number(index);
    setSelectedOption((prev) => (prev === newValue ? undefined : newValue));
    setAmountField("");
  };
  const [quan, setquan] = useState(1);
  const handleDonationSubmit = (e) => {
    if (e !== "no") {
      e.preventDefault();
      setcheckgo(true);
    } else setcheckgo(false);
    let newSubDonate;
    if (typeof amountField === "string") {
      newSubDonate = {
        customeName: inputSname ? inputSname : "",
        quantity: 1, // Set your desired value
        amount: +amountField,
        portionId: selectedOption + 1,
      };
    } else {
      newSubDonate = {
        customeName: inputSname ? inputSname : "",
        quantity: quan, // Set your desired value
        amount: amountField / quan,
        portionId: selectedOption + 1,
      };
    }
    if (amountField > 0) {
      setDonationData((prevData) => ({
        ...prevData,
        subDonates: [...prevData.subDonates, newSubDonate],
      }));
    }
  };
  const [inputhandle, setinputhandle] = useState("");
  const [inputtrue, setinputtrue] = useState(false);
  const [nameIndex, setNameIndex] = useState(0);
  const [inputSname, setinputSname] = useState("");
  useEffect(() => {
    setAmountField(inputhandle);
  }, [inputhandle]);
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    const totalSum = donationData?.subDonates.reduce(
      (accumulator, item) => accumulator + item.amount * item.quantity,
      0
    );
    setcounter(totalSum + +amountField);
  }, [handleDonationSubmit]);
  useEffect(() => {
    setDonationData({
      ...donationData,
      paymentTypeId: 1,
      totalAmount: counter,
    });
  }, [counter]);
  const handledon = (e) => {
    e.preventDefault();
    if (amountField === null || amountField == 0 || amountField == "") {
      toast.error("لايوجد قيمة دفع", {
        position: "top-left",
      });
    } else {
      axios
        .post(baseurl + "Donate/AddDonate", donationData)
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
    }
  };
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
        });
      console.log("yessss", resource);
    }
  }, []);
  const [tryfetch, settryfetch] = useState(true);
  useEffect(() => {
    if (
      (id || resource) &&
      resData.projectId !== 0 &&
      resData.projectId !== null &&
      tryfetch === true
    ) {
      settheProject();
      handlechange1(resData.projectId);
    }
  }, [projects1]);
  console.log("myprojects", projects1);
  useEffect(() => {
    if ((id || resource) && amountField === null && resData.portionId !== 0) {
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
  }, [donate]);
  let d = 0;
  const [checkgo, setcheckgo] = useState(false);
  useEffect(() => {
    if (
      donationData.subDonates.length === 1 &&
      checkgo === true &&
      donationData.totalAmount > 0
    ) {
      axios
        .post(baseurl + "Donate/AddDonate", donationData)
        .then((response) => {
          const blob = new Blob([response.data], {
            type: "text/html",
          });
          const url = URL.createObjectURL(blob);
          // const blob = new Blob([response.data], {
          //   type: "text/html",
          // });
          // const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => {
          // Handle error
          console.error("Error making donation:", error);
        });
    }
  }, [donationData.totalAmount, checkgo]);
  console.log("ahlaaaamount", amountField);

  return (
    <div>
      <Container fluid="lg" className="py-5 boxshadowout mandob">
        <Row style={{ justifyContent: "space-between" }}>
          <Col sm={12} md={donationData.subDonates.length > 0 ? 7 : 12}>
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
              onSubmit={
                donationData?.subDonates.length === 0
                  ? handleDonationSubmit
                  : handledon
              }
            >
              <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
                <Form.Label column sm="5" xs={12} md={5} className="label">
                  <img
                    src="../../../assets/Hearttbro3.png"
                    alt=""
                    style={{ width: "1.7rem" }}
                    className="mx-2"
                  />{" "}
                  جهـــــة التبـــــــــــرع :
                </Form.Label>
                <Col sm="7" xs={12} md={6}>
                  <Form.Select
                    onChange={(e) => handlechange(e)}
                    required
                    value={initialvalue}
                  >
                    <option>اختر نوع</option>
                    {data1?.map((item) => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
                <Form.Label column sm="5" xs={12} md={5} className="label">
                  <CiMobile3 size={25} className="mx-2" /> هـــدف
                  التبـــــــــــرع :
                </Form.Label>
                <Col sm="7" xs={12} md={6}>
                  <Form.Select
                    onChange={(e) => handlechange1(e)}
                    required
                    value={initialvalueP}
                  >
                    <option>سةستس</option>
                    {projects1?.projects?.projects &&
                      projects1.projects &&
                      projects1?.projects?.projects.map((ele, projectIndex) => {
                        return (
                          <option key={ele.id} value={ele.id}>
                            {ele.name}
                          </option>
                        );
                      })}
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
                        <div key={index}>
                          {!eee.customPortionPrice === true ? (
                            <div
                              className="flex mb-2 flexmob"
                              style={{ flexWrap: "nowrap" }}
                              key={index}
                            >
                              <Form.Check
                                type="radio"
                                label={eee.name}
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
                                    setAmountField((prev) => prev + eee.price);
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
                                    setAmountField((prev) => prev - eee.price);
                                    setquan((prev) => prev + 1);
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
                                label={eee.name}
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
                                  style={{ textAlign: "right", width: "20rem" }}
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
                        </div>
                      );
                    })}
                </Col>
              </Form.Group>
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
                    value={amountField === null ? null : amountField}
                    required
                    readOnly
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Outlined"
                    aria-label="Outlined"
                    aria-describedby="outlined-basic"
                  />
                  <InputGroup.Text>
                    <FormControl
                      as="select"
                      value={selectedOption}
                      aria-label="Select an option"
                      required
                    >
                      <option>EGP</option>
                      <option>USD</option>
                    </FormControl>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <p
                onClick={() => handleDonationSubmit("no")}
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
                className="w-100 p-3 my-3"
                style={{ background: "#0C6A2C", border: "none" }}
                type="submit"
              >
                دفع اجمالي التبرع
                <FaHeart className="mx-1" />
              </button>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formLinkedIn"
                style={{ marginTop: "3rem" }}
              >
                <div className="flex" style={{ justifyContent: "flex-start" }}>
                  {cards?.map((option, index) => (
                    <div>
                      <label for="age1">
                        {" "}
                        <label htmlFor={`paymentOption_${option.id}`}>
                          <img src="../../../assets/Logo2.png" alt="" />
                        </label>
                      </label>
                      <input
                        type="radio"
                        id={`paymentOption_${option.id}`}
                        required
                        name="paymentOption"
                        value={option.id}
                        checked={selectedPayment === option.id}
                        onChange={handlePaymentChange}
                        style={{ width: "fit-content" }}
                      />
                    </div>
                  ))}
                </div>
                <Form.Label column sm="5" xs={12} md={5} className="label">
                  <img
                    src="../../../assets/kematbr3.png"
                    width={25}
                    alt=""
                    className="mx-2"
                  />
                  إجمالي التبـــــــــــرع :
                </Form.Label>

                {console.log(selectedPayment)}
                <Col sm="7" xs={12} md={6}>
                  <Form.Control type="text" value={counter} />
                </Col>
              </Form.Group>
            </Form>
          </Col>
          {donationData.subDonates.length > 0 && (
            <Col sm={12} md={5}>
              <E2tman3cont2 subdon={donationData.subDonates} setDonationData={setDonationData}/>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};
export default E2tman;
