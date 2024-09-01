import React from "react";

function Discount({ discount, fontSizeDiscount }) {
  return (
    <div className="flex items-center">
      <h3 className={`${fontSizeDiscount} font-medium text-green-500`}>
        {discount} % OFF
      </h3>
    </div>
  );
}

export default Discount;
