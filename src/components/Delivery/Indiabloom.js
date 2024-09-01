import React from "react";
import Deliverycard from "./Deliverycard";
import Textheading from "../textheading/Textheading";

const IndiaBloom = [
  {
    city: "Delhi",
    icon: "earth",
  },
  {
    city: "Hyderbad",
    icon: "earth",
  },
  {
    city: "Pune",
    icon: "earth",
  },
  {
    city: "Mumbai",
    icon: "earth",
  },
  {
    city: "Chennai",
    icon: "earth",
  },
  {
    city: "Bengaluru",
    icon: "earth",
  },
];

function Indiabloom() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <Textheading
        heading="Delivery Blooms Across India"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />
      <div className="w-[90%] -xl:w-[100%] -lg:w-[94%] -md:w-[100%] my-8 -md:my-4 flex flex-wrap justify-center items-center">
        {IndiaBloom.map((item, index) => (
          <Deliverycard key={index} city={item.city} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}

export default Indiabloom;
