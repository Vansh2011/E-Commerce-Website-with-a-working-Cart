import React from "react";
import Textheading from "../textheading/Textheading";
import Whychoosecard from "./Whychoosecard";

const features = [
  {
    title: "Premium Flowers",
    icon: "rose-outline",
  },
  {
    title: "Handcrafted Arrangements",
    icon: "rose-outline",
  },
  {
    title: "Hassle Free Delivery",
    icon: "car-outline",
  },
  {
    title: "Customer Support ",
    icon: "headset-outline",
  },
];

function Whychoose() {
  return (
    <section className="w-[100%] flex flex-col justify-center item-center">
      <div className="w-full">
        <Textheading
          heading="Why Choose Us?"
          fontSize="text-5xl -md:text-2xl text-center text-zinc-400"
        />
        <div className="w-[90%] -xl:w-[100%] flex flex-wrap justify-center items-center mt-8">
          {features.map((item, index) => (
            <div key={index}>
              <Whychoosecard
                feature={item.title}
                index={index}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Whychoose;
