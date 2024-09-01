import React from "react";
import Textheading from "../textheading/Textheading";
import Homebutton from "../Homebutton/Homebutton";

function Preserved() {
  return (
    <section className="w-full flex bg-stone-100  p-20 -lg:p-4">
      <div className="flex flex-col">
        <Textheading
          heading="Preserved Flowers"
          fontSize="text-8xl -lg:text-5xl text-left text-black"
        />
        <p className="text-xl -lg:text-base text-left text-zinc-300 mb-20">
          Eternal Blooms for Lasting Memories
        </p>
        <Homebutton
          title="Shop Now"
          background="bg-black"
          widthBtn="w-[25%] -lg:w-[40%]"
        />
      </div>
    </section>
  );
}

export default Preserved;
