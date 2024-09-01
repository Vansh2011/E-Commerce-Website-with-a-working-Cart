import React from "react";
import { Link } from "react-router-dom";

function Policy() {
  return (
    <div className="w-[100%] bg-neutral-100 flex justify-center p-6 -md:px-2">
      <div className="text-center text-sm w-[80%] -md:w-[100%]">
        <p>
          Company Name: FNP E Retail Private Limited | CIN:
          U52100DL2021PTC376303 | Regd. Office Address: FNP Estate, Ashram Marg,
          Mandi Road, Gadaipur, New Delhi-110030
        </p>
        <p className="mt-2">
          Telephone No.: +91-11-26802680 | E-mail: help@fnp.com | Grievance
          Resolution Officer Name: Ms. Preeti Bindra | Contact No.: +91
          9212422000/9755-248-248
        </p>
        <Link
          to="/"
          className="mt-5 text-blue-500 font-semibold hover:cursor-pointer"
        >
          Corporate Social Responsiblity (CSR) Policy
        </Link>
      </div>
    </div>
  );
}

export default Policy;
