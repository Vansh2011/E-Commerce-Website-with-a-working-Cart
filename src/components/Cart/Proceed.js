import React from "react";
import { Link } from "react-router-dom";

function Proceed({ total }) {
  return (
    <div className="w-full absolute bottom-0">
      <hr />
      <div className="flex w-full my-4 px-8  justify-between items-center">
        <div className="flex flex-col">
          <div className="text-left">
            <h2 className="text-xl font-bold"> ₹{total}</h2>
            <p className="text-sm hover:cursor-pointer text-lime-500">
              View Price Details
            </p>
          </div>
        </div>
        <Link className="rounded-xl w-[60%] bg-lime-700 py-2 text-white">
          Proceed to Pay
        </Link>
      </div>
    </div>
  );
}

export default Proceed;
