import React from "react";
import Deliverycard from "./Deliverycard";
import Textheading from "../textheading/Textheading";

const GlobalBloom = [
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
    city: "Global",
    icon: "earth",
  },
];

function Globalbloom() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <Textheading
        heading="Delivery Blooms Across Global"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />
      <div className="w-[90%] -xl:w-[100%] -lg:w-[94%] -md:w-[100%] my-8 -md:my-4 flex flex-wrap justify-center items-center">
        {GlobalBloom.map((item, index) => (
          <Deliverycard key={index} city={item.city} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}

export default Globalbloom;
