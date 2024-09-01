import React from "react";
import Heading from "../textheading/Textheading";
import Heroslider from "../splide-slide/Heroslider";

const bestsellers = [
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
  perPage: 5,
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

function Bestseller() {
  return (
    <section className="w-full flex flex-col items-center">
      <Heading
        heading="Bestsellers"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />
      <div className="w-[90%] my-8 flex bestsellers justify-center items-center">
        <Heroslider options={options} list={bestsellers} isCard={true} />
      </div>
    </section>
  );
}

export default Bestseller;
