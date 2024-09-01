import React from "react";
import Heading from "../textheading/Textheading";
import Heroslider from "../splide-slide/Heroslider";

const picks = [
  {
    title: "Roses",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] -sm:w-[15rem] h-[20rem] -md:h-[17rem] bg-pink-100 rounded-xl",
  },
  {
    title: "Roses",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] -sm:w-[15rem] h-[20rem] -md:h-[17rem] bg-pink-100 rounded-xl",
  },
  {
    title: "Roses",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] -sm:w-[15rem] h-[20rem] -md:h-[17rem] bg-pink-100 rounded-xl",
  },
  {
    title: "Roses",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] -sm:w-[15rem] h-[20rem] -md:h-[17rem] bg-pink-100 rounded-xl",
  },
  {
    title: "Roses",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] -sm:w-[15rem] h-[20rem] -md:h-[17rem] bg-pink-100 rounded-xl",
  },
  {
    title: "Roses",
    description: "Hand font, underline variant and underline rotate",
    styles:
      "w-[15rem] -xl:w-[13rem] -md:w-[10rem] -sm:w-[15rem] h-[20rem] -md:h-[17rem] bg-pink-100 rounded-xl",
  },
];

const options = {
  type: "loop",
  perPage: 5,
  perMove: 1,
  arrows: true,
  autoPlay: true,
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

function Designer() {
  return (
    <section className="w-full flex flex-col items-center">
      <Heading
        heading="Designer's Picks"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />

      <div className="w-[90%] -sm:w-[85%] my-8 flex Designer's Picks justify-center items-center z-30">
        <Heroslider options={options} list={picks} isDesginerCard={true} />
      </div>
    </section>
  );
}

export default Designer;
