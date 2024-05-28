import React, { useState } from "react";
import WalletBank1 from "./WalletBank1";
import WalletBank2 from "./WalletBank2";
import WalletBankForm from "./WalletBankForm";
const WalletBank = ({ setComIndex, compIndex }) => {
  const [donationData, setDonationData] = useState({
    paymentTypeId: 0,
    payOptionId: 0,
    subDonates: [],
    currency: "EGP",
    employeeLinkId: null,
    donatorDto: {
      name: "",
      phone: "",
      email: "",
    },
    totalAmount: 0,
    cardId: 3,  
    deliveryOrder: {
      fullAddress: "striskng",
      cityId: 1,
    },
  });
  const arr = [
    {
      com: (
        <WalletBankForm
          setComIndex={setComIndex}
          compIndex={compIndex}
          donationData={donationData}
          setDonationData={setDonationData}
        />
      ),
    },
    {
      com: (
        <WalletBank1
          setComIndex={setComIndex}
          compIndex={compIndex}
          donationData={donationData}
          setDonationData={setDonationData}
        />
      ),
    },
    {
      com: <WalletBank2 setComIndex={setComIndex} />,
    },
    {
      com: <div>444</div>,
    },
  ];
  return <div>{arr[compIndex].com}</div>;
};
export default WalletBank;