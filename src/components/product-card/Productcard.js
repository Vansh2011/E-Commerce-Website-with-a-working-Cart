import React from "react";
import Prodheading from "../product-heading/Prodheading";
import Finalprice from "../product-price/Finalprice";
import Review from "../review/Review";
import Bestseller from "../best-seller/Bestseller";
import Slider from "../splide-slide/Slider";
import { Link } from "react-router-dom";

function Productcard({
  id,
  title,
  cardWidth,
  newprice,
  margin,
  originalprice,
  discount,
  eta,
  rating,
  number,
  padding,
  width,
  index,
  options,
  list,
  length,
  etaStyle,
  isProduct = true,
  description,
}) {
  return (
    <div
      className={`${
        cardWidth ? cardWidth : "w-80 -xl:w-72 -md:w-52 -sm:w-40"
      }  border-2 border-solid border-zinc-300 -md:border-none overflow-hidden rounded-lg -sm:border-none flex flex-col justify-center ${
        margin ? margin : "mr-4"
      } ${length < 3 ? "mr-4 -xl:mr-2.5" : ""} `}
    >
      {isProduct ? (
        <Link
          to={`/product/${id}`}
          className="-xl:flex -xl:flex-col -xl:flex-auto"
        >
          <div className="w-full relative">
            <Slider
              options={options}
              list={list}
              borderRadius="-sm:rounded-xl"
            />
            <div className="absolute bottom-1 left-1">
              <Review
                rating={rating}
                number={number}
                padding={padding}
                width={width}
              />
            </div>
            {index === 0 && (
              <div className="absolute top-1 left-1">
                <Bestseller />
              </div>
            )}
          </div>
          <div className="flex flex-col text-left p-4 -md:p-0 -sm:p-0">
            <div className="text-lg/none">
              <Prodheading heading={title} fontSize="text-base -lg:text-sm" />
            </div>
            <div className="text-lg/none mt-3 -xl:mt-2  -md:mt-0 -sm:mt-0 -sm:text-left">
              <Finalprice
                newprice={newprice}
                originalprice={originalprice}
                discount={discount}
                fontSizeNp="text-xl -xl:text-lg/none -lg:text-base/none"
                fontSize="text-base -lg:text-sm/none"
                fontSizeDiscount="text-xl -xl:text-lg/none -lg:text-sm/none -sm:text-xs/none  "
              />
            </div>
            <div
              className={`text-lg/none ${
                etaStyle ? "" : "-md:hidden -sm:hidden"
              }`}
            >
              <p className="text-sm mt-3 -xl:mt-2 -md:mt-0 text-blue-400">
                Earliest Delivery: {eta}
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <Link to="/">
          {/* <img src={list} alt="text" className="w-[100%] object-" /> */}
        </Link>
      )}
    </div>
  );
}

export default Productcard;
