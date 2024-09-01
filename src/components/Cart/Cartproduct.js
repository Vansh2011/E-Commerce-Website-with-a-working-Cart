import React from "react";
import Finalprice from "../product-price/Finalprice";
import Prodheading from "../product-heading/Prodheading";
import Deleteproduct from "./Deleteproduct";

function Cartproduct({
  id,
  handleDelete,
  image,
  name,
  newPrice,
  ogPrice,
  discount,
  quantity,
  handleIncrease,
}) {
  console.log(id);
  return (
    <div className="flex items-center py-4">
      <div className="w-[50%] flex justify-center items-center">
        <img src={image} alt={name} className="w-[80%]" />
      </div>
      <div className="flex flex-col">
        <Prodheading heading={name} />
        <Finalprice
          originalprice={ogPrice}
          newprice={newPrice}
          margin="my-0"
          discount={discount}
        />
        <Deleteproduct
          id={id}
          quantity={quantity}
          handleDelete={handleDelete}
          handleIncrease={handleIncrease}
        />
      </div>
    </div>
  );
}

export default Cartproduct;
