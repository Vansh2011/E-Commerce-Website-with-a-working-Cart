import React from "react";
import Button from "./Button";

function Btnrender({ handleAddToCart }) {
  return (
    <div className="flex items-center  justify-center pb-8 border-b-4 border-zinc-100 border-solid -sm:border-none -sm:ml-5 -sm:w-80">
      <Button
        btnIcon="bx bx-cart-add"
        btnMargin="mr-4"
        btnText="Add to Cart"
        btnBg="bg-white"
        btnColor="text-lime-700"
        btnBorder="border-lime-700"
        action={handleAddToCart}
      />
      <Button
        btnIcon="bx bx-cart"
        btnText="Buy Now"
        btnBg="bg-lime-700"
        btnColor="text-white"
        btnBorder="border-lime-700"
      />
    </div>
  );
}

export default Btnrender;
