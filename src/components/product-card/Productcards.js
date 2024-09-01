import React from "react";
import Productcard from "./Productcard";

function Productcards({ cardData, options, list, setautoPlay }) {
  return (
    <div className="flex justify-between items-center  -xl:pb-3">
      {cardData.map((items, index) => (
        <div key={index}>
          <Productcard
            index={index}
            title={items.title}
            newprice={items.newprice}
            margin={items.margin}
            originalprice={items.originalprice}
            discount={items.discount}
            eta={items.eta}
            rating={items.rating}
            number={items.number}
            padding={items.padding}
            width={items.width}
            options={options}
            list={list}
            // setautoPlay={setautoPlay}
          />
        </div>
      ))}
    </div>
  );
}

export default Productcards;
