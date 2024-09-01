import React from "react";
import { Link } from "react-router-dom";

function Deliverycard({ city, icon, styles, isGlobal = false }) {
  return (
    <Link
      to="/products"
      className={`w-[14%] -xl:w-[13%] -lg:w-[31%] -md:w-[27%] h-[8rem] -xl:h-[7rem] mr-8 -xl:mr-6 -lg:mb-4  -md:h-[6rem] ${
        styles ? styles : "bg-stone-100 rounded-xl relative"
      }  ${city === "Pune" ? "-lg:mr-0 -sm:mr-0" : "-sm:mr-4"} ${
        city === "Bengaluru" || city === "Global" ? "mr-0 -sm:mr-0" : ""
      }`}
    >
      <div className="text-4xl -xl:text-3xl -md:text-xl absolute left-4 top-4">
        <ion-icon name={`${icon}`}></ion-icon>
      </div>
      <div className="text-2xl -xl:text-xl -md:text-base absolute bottom-4 left-4">
        <p>{city}</p>
      </div>
      <div
        className={`text-4xl -xl:text-3xl absolute top-4 ${
          isGlobal ? "text-black" : "text-lime-600"
        } right-4`}
      >
        <ion-icon
          name={` ${
            isGlobal ? "arrow-forward-circle-outline" : "arrow-forward-circle"
          }`}
        ></ion-icon>
      </div>
    </Link>
  );
}

export default Deliverycard;
