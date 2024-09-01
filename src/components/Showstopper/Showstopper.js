import React from "react";
import Textheading from "../textheading/Textheading";
import Curvedtitle from "../Occasion/Curvedtitle";

const collection = [
  {
    title: "Flower Bouquets",
    stylesBox:
      "bg-pink-100 rounded-xl mr-4 border border-solid border-pink-200 overflow-hidden ",
    stylesText: "text-lg -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
  {
    title: "Flower Arrangements",
    stylesBox:
      "bg-pink-100 rounded-xl mr-4 -xl:mr-0 border border-solid border-pink-200 overflow-hidden ",
    stylesText: "text-lg -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
  {
    title: "Standing Bouquets",
    stylesBox:
      "bg-pink-100 rounded-xl -xl:mr-4 border border-solid border-pink-200 overflow-hidden ",
    stylesText: "text-lg -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
  {
    title: "Zodiac Flower",
    stylesBox:
      "bg-pink-100 rounded-xl mr-4 -xl:mr-0 border border-solid border-pink-200 overflow-hidden ",
    stylesText: "text-lg -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
  {
    title: "Sleeves",
    stylesBox:
      "bg-pink-100 rounded-xl mr-4 border border-solid border-pink-200 overflow-hidden ",
    stylesText: "text-lg -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
  {
    title: "Flower in a box",
    stylesBox:
      "bg-pink-100 rounded-xl border border-solid border-pink-200 overflow-hidden ",
    stylesText: "text-lg -md:text-sm -sm:text-xs font-bold text-gray-900",
  },
];

function Showstopper() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <Textheading
        heading="The Show Stopper Collection"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />
      <div className="w-[90%] -xl:w-[100%] flex justify-center items-center flex-wrap my-8">
        {collection.map((item, index) => (
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

export default Showstopper;
