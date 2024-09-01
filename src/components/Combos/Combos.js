import React from "react";
import Combocard from "./Combocard";
import { useState } from "react";

let comboCollection = [
  {
    path: "https://www.fnp.com/images/pr/s/v20230413185209/red-pink-roses-with-truffle-cake_5.jpg",
    label: "Design 1",
    price: "₹1749",
  },
  {
    path: "https://www.fnp.com/images/pr/s/v20230413185209/red-pink-roses-with-truffle-cake_5.jpg",
    label: "Design 2",
    price: "₹1649",
  },
  {
    path: "https://www.fnp.com/images/pr/s/v20230413185209/red-pink-roses-with-truffle-cake_5.jpg",
    label: "Design 3",
    price: "₹1649",
  },
];

function Combos() {
  const [isActive, setisActive] = useState(0);
  const handleClick = (index) => {
    setisActive(index);
  };
  return (
    <div className="flex flex-col -sm:px-5">
      <div>
        <h2 className="my-4 text-left text-zinc-700 font-semibold text-xl">
          Available Combos
        </h2>
      </div>
      <div className="flex -sm:w-80">
        {comboCollection.map((item, index) => (
          <div key={index} onClick={() => handleClick(index)}>
            <Combocard
              index={index}
              isActive={isActive === index}
              path={item.path}
              label={item.label}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Combos;
