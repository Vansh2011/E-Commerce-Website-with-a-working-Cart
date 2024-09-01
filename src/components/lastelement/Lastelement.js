import React from "react";
import card from "../../images/visa.png";
import { Link } from "react-router-dom";

function Lastelement() {
  return (
    <div className="w-[100%] flex flex-wrap justify-center p-4 -md:px-0">
      <div className="w-[90%] flex justify-between items-center">
        <div className="flex text-2xl -md:text-base text-zinc-500">
          <Link className="">
            <i className="bx bxl-facebook mr-3 -md:mr-1 border-2 border-solid border-zinc-500 rounded-md"></i>
          </Link>
          <Link className="">
            <i className="bx bxl-twitter mr-3 -md:mr-1 border-2 border-solid border-zinc-500 rounded-md"></i>
          </Link>
          <Link className="">
            <i className="bx bxl-instagram mr-3 -md:mr-1 border-2 border-solid border-zinc-500 rounded-md"></i>
          </Link>
          <Link className="">
            <i className="bx bxl-pinterest-alt border-2 border-solid border-zinc-500 rounded-md"></i>
          </Link>
        </div>
        <div>
          <p className="text-xs font-medium">
            © 1994-2024 fnp.com.All rights reserved.
          </p>
        </div>
        <div className="flex justify-center -md:w-[25%]">
          <img src={card} alt="card" className="w-[20%]" />
        </div>
      </div>
    </div>
  );
}

export default Lastelement;
