import React from "react";

function Bannercontent({ icon, number, text, margin = 0 }) {
  return (
    <div
      className={`flex ${margin} -md:flex-col -md:items-center -sm:flex-col -sm:items-center`}
    >
      {icon && <i className={icon}></i>}
      <span className="text-4xl/none -md:text-2xl/none -sm:text-xl -sm:text-center font-bold mr-2 -md:m-0 -sm:m-0">
        {number}+
      </span>
      <p className="text-left -sm:text-center font-semibold text-sm/snug -sm:text-xs -md:text-center w-28 -sm:w-16">
        {text}
      </p>
    </div>
  );
}

export default Bannercontent;
