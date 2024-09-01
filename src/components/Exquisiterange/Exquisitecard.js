import React from "react";
import { Link } from "react-router-dom";

function Exquisitecard({ img, cateogry, styles, margins }) {
  return (
    <div className="w-[100%] flex items-center">
      <Link
        to="/products"
        className={`flex flex-col items-center justify-center relative ${margins} `}
      >
        <div
          className={`h-[24rem] -xl:h-[20rem] -md:h-[15rem] w-[12.68rem] -xl:w-[9rem] -lg:w-[11rem] -md:w-[9rem] flex flex-col items-center justify-center rounded-xl ${
            styles ? styles : ""
          }`}
        >
          {img && <img src={img} alt={`${img}`} />}
        </div>
        <button className="w-[70%] flex justify-center  py-1 bg-white rounded-full absolute bottom-4">
          {cateogry}
        </button>
      </Link>
    </div>
  );
}

export default Exquisitecard;
