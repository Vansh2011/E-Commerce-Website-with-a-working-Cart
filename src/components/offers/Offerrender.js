import React from "react";
import Textheading from "../textheading/Textheading";
import Offercard from "./Offercard";
import logo1 from "../../images/Airtel.png";
import logo2 from "../../images/MobiKwik-Logo.wine.png";

const offerCollection = [
  {
    discount: "10%",
    code: "FNPONE",
    logo: logo1,
    bgoffer: "bg-red-300",
    borderCol: "border-red-500",
    offerMargin: "mb-4",
  },
  {
    discount: "10%",
    code: "FNPONE",
    logo: logo2,
    bgoffer: "bg-green-100",
    borderCol: "border-green-500",
    offerMargin: "mb-4",
  },
  {
    discount: "10%",
    code: "FNPONE",
    logo: logo1,
    bgoffer: "bg-red-300",
    borderCol: "border-red-500",
    offerMargin: "mb-4",
  },
  {
    discount: "10%",
    code: "FNPONE",
    logo: logo2,
    bgoffer: "bg-green-100",
    borderCol: "border-green-500",
    // offerMargin: "mb-4",
  },
];

function Offerrender() {
  return (
    <div className="pb-8 -sm:w-80 -sm:ml-5 border-b-4 border-solid border-zinc-100 -sm:border-none">
      <Textheading heading="Top Offers" />
      {offerCollection.map((items, index) => (
        <button
          key={index}
          className={`w-full border border-solid ${items.borderCol} rounded-xl p-3 ${items.bgOffer} ${items.offerMargin} `}
        >
          <Offercard
            ard
            logo={items.logo}
            discount={items.discount}
            code={items.code}
          />
        </button>
      ))}
    </div>
  );
}

export default Offerrender;
