import React from "react";
import Textheading from "../textheading/Textheading";
import Homebutton from "../Homebutton/Homebutton";

function Luxe() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Textheading
        heading="Luxe Collection"
        fontSize="text-8xl -lg:text-6xl -md:text-4xl text-center text-black"
      />
      <p className="text-3xl -lg:text-xl -md:text-base text-center text-black mb-20">
        Opulent Designs for Discerning Tastes
      </p>
      <Homebutton
        title="Shop Now"
        background="bg-black"
        widthBtn="w-[15%] -lg:w-[30%] -md:w-[40%]"
        link="/products"
      />
    </section>
  );
}

export default Luxe;
