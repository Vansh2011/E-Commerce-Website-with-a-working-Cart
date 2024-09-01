import React from "react";
import Bannercontent from "./Bannercontent";

const bannerData = [
  {
    number: "25",
    text: "Years of Trust and Service",
  },
  {
    number: "108K",
    text: "Happy Customer Served",
  },
  {
    number: "30",
    text: "Countries has branches",
  },
];

function Banner() {
  return (
    <section className="w-full flex justify-between items-center flex-wrap bg-neutral-200 my-8 p-8 -md:px-6 -sm:px-4 -md:mb-0  -sm:mb-0">
      {bannerData.map((items, index) => (
        <div key={index}>
          <Bannercontent number={items.number} text={items.text} />
        </div>
      ))}
    </section>
  );
}

export default Banner;
