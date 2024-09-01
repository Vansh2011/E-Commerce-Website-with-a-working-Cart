import React from "react";
import Productprice from "./Productprice";
import Discount from "./Discount";

function Finalprice({
  newprice,
  originalprice,
  discount,
  fontSize,
  fontSizeNp,
  fontSizeDiscount,
  margin,
}) {
  return (
    <div className={`flex items-center text-left ${margin ? margin : "my-2"}`}>
      <Productprice
        newprice={newprice}
        originalprice={originalprice}
        fontSize={fontSize}
        fontSizeNp={fontSizeNp}
      />
      {discount > 0 && (
        <Discount discount={discount} fontSizeDiscount={fontSizeDiscount} />
      )}
    </div>
  );
}

export default Finalprice;
