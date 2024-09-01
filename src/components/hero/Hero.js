import React from "react";
import Producttext from "../product-text/Producttext";

function Hero({ heading, newprice, originalprice, discount, rating, number }) {
  return (
    <section className=" w-full flex justify-center items-center -xl:px-8 lg:px-6 -sm:px-0">
      <Producttext
        heading={heading}
        newprice={newprice}
        originalprice={originalprice}
        discount={discount}
        rating={rating}
        number={number}
      />
    </section>
  );
}

export default Hero;
