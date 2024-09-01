import React from "react";
import Textheading from "../textheading/Textheading";
import { Link } from "react-router-dom";

const prices = ["599", "999", "1499", "1999", "2000"];

function Shop() {
  return (
    <section className="w-full bg-stone-100 flex flex-col items-center">
      <Textheading
        heading="Shop By Price"
        fontSize="text-5xl -md:text-3xl text-center text-zinc-400"
      />
      <div className="flex flex-wrap justify-center items-center w-[50%] -xl:w-[70%] -lg:w-[90%] py-12">
        {prices.map((price, index) => (
          <Link to="/products" key={index}>
            <div
              className={`flex text-xl -md:text-base justify-center items-center rounded-full bg-white mr-4 mb-4 font-semibold py-5 -md:py-3 px-12 -md:px-8 -sm:px-4 ${
                price === "999" || price === "1999" || price === "2000"
                  ? "-md:mr-0"
                  : ""
              }`}
            >
              <p>
                Under ₹ <span>{price}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Shop;
