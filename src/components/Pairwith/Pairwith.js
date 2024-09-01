import React from "react";
import Textheading from "../textheading/Textheading";
import Curvedtitle from "../Occasion/Curvedtitle";

const pairs = [
  {
    title: "Flowers & Cakes ",
    stylesBox:
      "bg-stone-100 rounded-xl mr-4 border border-solid border-stone-200 overflow-hidden ",
    stylesText: "text-base -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
  {
    title: "Flower & Chocolates",
    stylesBox:
      "bg-stone-100 rounded-xl mr-4 -xl:mr-0 border border-solid border-stone-200 overflow-hidden ",
    stylesText: "text-base -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
  {
    title: "Flowers & Teddy Bears",
    stylesBox:
      "bg-stone-100 rounded-xl border -xl:mr-4 border-solid border-stone-200 overflow-hidden ",
    stylesText: "text-base -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
  {
    title: "Flower & Guitarist",
    stylesBox:
      "bg-stone-100 rounded-xl mr-4 -xl:mr-0 border border-solid border-stone-200 overflow-hidden ",
    stylesText: "text-base -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
  {
    title: "Flowers & Plants",
    stylesBox:
      "bg-stone-100 rounded-xl mr-4 border border-solid border-stone-200 overflow-hidden ",
    stylesText: "text-base -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
  {
    title: "Flower & Greeting Cards",
    stylesBox:
      "bg-stone-100 rounded-xl border border-solid border-stone-200 overflow-hidden ",
    stylesText: "text-base -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
];

function Pairwith() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <Textheading
        heading="Pair With Flowers"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />
      <div className="w-[90%] -xl:w-[100%] flex justify-center items-center flex-wrap my-8">
        {pairs.map((item, index) => (
          <Curvedtitle
            key={index}
            title={item.title}
            stylesBox={item.stylesBox}
            stylesText={item.stylesText}
          />
        ))}
      </div>
    </section>
  );
}

export default Pairwith;
