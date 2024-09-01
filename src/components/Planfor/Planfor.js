import React from "react";
import Textheading from "../textheading/Textheading";
import Homebutton from "../Homebutton/Homebutton";

const surprise = ["For Him", "For Her", "For Them"];

function Planfor() {
  return (
    <section>
      <Textheading
        heading="Plan The Perfect Surprise"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />
      <div className="flex -sm:w-[100%] flex-wrap justify-center items-center">
        {surprise.map((item, index) => (
          <div
            key={index}
            className={`w-[23%] -lg:w-[26%] -md:w-[38%] flex flex-col justify-center mr-28 items-center my-8 ${
              index === 2 ? "mr-0 -md:mr-0 -md:my-2 -sm:my-1" : ""
            } ${
              index === 1
                ? "-xl:mr-20 -lg:mr-16 -md:mr-0 -md:my-2 -sm:my-1"
                : ""
            } ${
              index === 0
                ? "-xl:mr-20 -lg:mr-16 -md:mr-12 -md:my-2 -sm:my-1"
                : ""
            }`}
          >
            <div className="w-[23rem] -xl:w-[19rem] -lg:w-[12rem] -sm:w-[10rem] h-[194px]  -xl:h-[147px] -sm:h-[80px] -lg:h-[114px] bg-lime-600 rounded-full"></div>
            <Homebutton
              title={item}
              background="bg-lime-600"
              fontSize="text-xl -lg:text-lg -sm:text-base"
              link="/products"
              widthBtn="w-[70%] -lg:w-[90%]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Planfor;
