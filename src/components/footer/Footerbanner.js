import React from "react";
import Bannerfootercontent from "./Bannerfootercontent";

const footerData = [
  {
    icon: "bx bx-world",
    title: "Worldwide Delivery",
    description: "We deliver gifts to over 70 countries",
  },
  {
    icon: "bx bx-windows",
    title: "100% Safe & Secure Payments",
    description: "Pay using secure payment methods",
  },
  {
    icon: "bx bx-help-circle",
    title: "Dedicated Help Center",
    description: "Call us +91 9212422000 | 8:00AM-10.30PM ",
  },
];

function Footerbanner() {
  return (
    <section className="w-full flex justify-center items-center border-t border-solid border-neutral-200 mt-8 p-8">
      <div className="w-4/5 flex justify-between items-center -lg:px-0 -xl:w-full -xl:px-8">
        {footerData.map((items, index) => (
          <div key={index}>
            <Bannerfootercontent
              icon={items.icon}
              title={items.title}
              description={items.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Footerbanner;
