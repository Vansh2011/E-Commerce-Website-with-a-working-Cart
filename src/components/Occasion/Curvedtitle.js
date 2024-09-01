import React from "react";
import { Link } from "react-router-dom";

function Curvedtitle({ title, stylesBox, stylesText }) {
  return (
    <Link
      to="/products"
      className={`w-[28rem] -lg:w-[21rem] -md:w-[11rem] h-[15rem] -lg:h-[13rem] -md:h-[8rem] -sm:w-[9rem] -sm:h-7[rem] flex justify-center items-center relative ${stylesBox} mb-4`}
    >
      <div
        className={`${stylesText} px-16 -md:px-4 py-5 -md:py-3 flex justify-center items-center bg-white rounded-tr-full absolute bottom-0 left-0 `}
      >
        <p>{title}</p>
      </div>
    </Link>
  );
}

export default Curvedtitle;
