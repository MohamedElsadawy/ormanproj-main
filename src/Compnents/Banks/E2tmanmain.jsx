import React, { useState } from "react";
import E2tman from "./E2tman";
import E2tman2 from "./E2tman_";
import E2tman3 from "./E2tman3";

const E2tmanmain = ({ payid, cards }) => {
  const [e2tcom, sete2] = useState(0);

  const [donationData, setDonationData] = useState({
    paymentTypeId: 0,
    payOptionId: payid,
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
      fullAddress: "",
      cityId: 1,
    },
  });
  console.log("kamelllll", donationData);
  const E2main = [
    {
      comp: (
        <E2tman2
          e2tcom={e2tcom}
          sete2={sete2}
          setDonationData={setDonationData}
          donationData={donationData}
        />
      ),
    },
    {
      comp: (
        <E2tman
          e2tcom={e2tcom}
          sete2={sete2}
          setDonationData={setDonationData}
          donationData={donationData}
          cards={cards}
        />
      ),
    },
    { comp: <E2tman3 e2tcom={e2tcom} sete2={sete2} /> },
  ];
  return <div>{E2main[e2tcom].comp}</div>;
};
export default E2tmanmain;
