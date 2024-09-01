import React from "react";
import Heading from "../textheading/Textheading";
import Heroslider from "../splide-slide/Heroslider";

const newest = [
  {
    title: "Roses",
    prices: "₹450.89",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] h-[20rem] -md:h-[17rem] -sm:w-[13rem] -sm:h-[19rem] bg-pink-100 rounded-xl",
  },
  {
    title: "Roses",
    prices: "₹450.89",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] h-[20rem] -md:h-[17rem] -sm:w-[13rem] -sm:h-[19rem] bg-pink-100 rounded-xl",
  },
  {
    title: "Roses",
    prices: "₹450.89",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] h-[20rem] -md:h-[17rem] -sm:w-[13rem] -sm:h-[19rem] bg-pink-100 rounded-xl",
  },
  {
    title: "Roses",
    prices: "₹450.89",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] h-[20rem] -md:h-[17rem] -sm:w-[13rem] -sm:h-[19rem] bg-pink-100 rounded-xl",
  },
  {
    title: "Roses",
    prices: "₹450.89",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] h-[20rem] -md:h-[17rem] -sm:w-[13rem] -sm:h-[19rem] bg-pink-100 rounded-xl",
  },
  {
    title: "Roses",
    prices: "₹450.89",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] h-[20rem] -md:h-[17rem] -sm:w-[13rem] -sm:h-[19rem] bg-pink-100 rounded-xl",
  },
];

const options = {
  type: "loop",
  perPage: 4,
  perMove: 1,
  arrows: true,
  autoPlay: false,
  pagination: false,
  width: "100%",
  breakpoints: {
    1024: {
      perPage: 4,
    },
    768: {
      perPage: 3,
    },
    420: {
      perPage: 2,
    },
    360: {
      perPage: 1,
    },
  },
};

function Newest() {
  return (
    <section className="w-full flex flex-col items-center">
      <Heading
        heading=" Newest Arrivals"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />
      <div className="w-[90%] my-8 flex  Newest Arrivalss justify-center items-center">
        <Heroslider options={options} list={newest} isCard={true} />
      </div>
    </section>
  );
}

export default Newest;
