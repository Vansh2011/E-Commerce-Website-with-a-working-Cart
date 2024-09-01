import React from "react";
import Heading from "../textheading/Textheading";
import Exquisitecard from "./Exquisitecard";

const exqusiteRange = [
  {
    category: "Roses",
    styles: "bg-pink-100",
    margins: "mr-8 -xl:mr-4 -lg:mb-4",
  },
  {
    category: "Gerberas",
    styles: "bg-fuchsia-100",
    margins: "mr-8 -xl:mr-4 -lg:mb-4 -md:mr-0",
  },
  {
    category: "Orchids",
    styles: "bg-yellow-50",
    margins: "mr-8 -xl:mr-4 -lg:mr-0 -lg:mb-4 -md:mr-4",
  },
  {
    category: "Lilies",
    styles: "bg-orange-50",
    margins: "mr-8 -xl:mr-4 -lg:mb-4 -md:mr-0",
  },
  {
    category: "Carnations",
    styles: "bg-red-100",
    margins: "mr-8 -xl:mr-4 -lg:mb-4",
  },
  {
    category: "Mixed",
    styles: "bg-gradient-to-r from-teal-400 to-blue-500",
    margins: "",
  },
];

function Exquisite() {
  return (
    <section className="w-[100%] flex flex-col justify-center items-center py-8 -md:py-4">
      <Heading
        heading="Explore Our Exquisite Ranges"
        fontSize="text-5xl -md:text-2xl text-center text-zinc-400"
      />
      <div className="flex w-[90%] -xl:w-[100%] -lg:w-[75%] -md:w-full justify-center flex-wrap my-4">
        {exqusiteRange.map((item, index) => (
          <div key={index}>
            <Exquisitecard
              index={index}
              cateogry={item.category}
              styles={item.styles}
              margins={item.margins}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Exquisite;
