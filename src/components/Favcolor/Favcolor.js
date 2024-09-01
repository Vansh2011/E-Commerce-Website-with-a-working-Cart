import React from "react";
import Textheading from "../textheading/Textheading";
import { Link } from "react-router-dom";

const colors = [
  {
    name: "Red",
    code: "bg-red-300",
  },
  {
    name: "Purple",
    code: "bg-red-300",
    style: " ",
  },
  {
    name: "Pink",
    code: "bg-red-300",
    style: " ",
  },
  {
    name: "Peach",
    code: "bg-red-300",
    style: " ",
  },
  {
    name: "Warm",
    code: "bg-red-300",
    style: " ",
  },
  {
    name: "Pastel",
    code: "bg-red-300",
    style: " ",
  },
  {
    name: "Orange",
    code: "bg-red-300",
    style: " ",
  },
  {
    name: "Blue",
    code: "bg-red-300",
    style: " ",
  },
  {
    name: "White",
    code: "bg-red-300",
    style: " ",
  },
  {
    name: "Yellow",
    code: "bg-red-300",
    style: " ",
  },
  {
    name: "Cool",
    code: "bg-red-300",
    style: " ",
  },
  {
    name: "Mixed",
    code: "bg-red-300",
    style: " ",
  },
];

function Favcolor() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <Textheading
        heading="Choose From Your Favourite Colors"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />
      <div className="w-[90%] -lg:w-[100%] flex justify-center items-center flex-wrap">
        {colors.map((color, index) => (
          <Link
            to="/products"
            key={index}
            className={`flex w-[15%] flex-wrap flex-col justify-center items-center my-8 ${color.style}`}
          >
            <div
              className={`w-[6rem] -md:w-[4rem] h-[6rem] -md:h-[4rem] ${color.code} rounded-full`}
            ></div>
            <div className="text-center text-base">
              <p>{color.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Favcolor;
