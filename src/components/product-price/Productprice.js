import React from "react";

function Productprice({ newprice, originalprice, fontSize, fontSizeNp }) {
  return (
    <div className={`flex items-center font-bold text-black mr-4 -md:mr-2 `}>
      <h3 className={`font-medium mr-2 -md:mr-1 ${fontSizeNp}`}>₹{newprice}</h3>
      <h3 className={`font-normal ${fontSize} text-zinc-400 line-through`}>
        {originalprice}
      </h3>
    </div>
  );
}

export default Productprice;
