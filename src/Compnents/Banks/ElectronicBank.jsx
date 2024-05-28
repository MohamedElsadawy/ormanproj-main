import React from "react";
import { Table, Container, Image } from "react-bootstrap";
import { Bank } from "../../BankData";
import "./ElectronicBank.css";
import UseFetch from "../../UseFetch";

const BankTable = ({ bankData }) => {
  const data = UseFetch("DisplayBankAcount/getBankAccounts");
  // console.log("fetchbankksss", data);
  return (
    <Container>
      <div className="table-responsive">
        <Table striped bordered hover style={{ background: "white" }}>
          <tbody className="ulbanks">
            {data &&
              data?.map((item, index) => (
                <React.Fragment key={index}>
                  <tr style={{ height: "10rem" }}>
                    <td
                      rowSpan={2}
                      className="align-middle"
                      style={{ width: "50%" }}
                    >
                      <img
                        src={item.imageURL}
                        alt={`iimage ${index + 1}`}
                        style={{ width: "20rem", height: "6.7rem" }}
                        className="soraelectronic"
                      />
                    </td>
                    <td>
                      <ul className="m-0 px-3 ">
                        {item.bankAcountNumbers.map((element) => {
                          return (
                            <>
                              <li className="textright">
                                رقم الحساب
                                {element.accountNumber}
                              </li>
                              <li className="textright">
                                رقم الحساب بالدولار
                                {element.bankType}
                              </li>
                              <li className="textright">
                                iban : {element.iban}
                              </li>
                            </>
                          );
                        })}
                        {/*
                      <li className="textright">
                        رقم الحساب بالدولار: {item.rkmhsabd}
                      </li>
                       */}
                      </ul>
                    </td>
                  </tr>
                  <tr className="textright">
                    <td className="px-2">
                      <strong>الكود:</strong> {item.swiftCode}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default BankTable;
