import React from "react";

function Bannerfootercontent({ icon, title, description }) {
  return (
    <div className="flex items-start">
      <i className={`text-xl mr-2 -lg:mr-1 ${icon}`}></i>
      <div className="text-left flex flex-col">
        <p className="text-lg font-medium -xl:text-sm ">{title}</p>
        <p className="text-xs">{description}</p>
      </div>
      {!(title === "Dedicated Help Center") && (
        <div
          className={`h-12 ml-20 border border-solid border-neutral-200 -xl:mx-12 -lg:mx-1 `}
        ></div>
      )}
    </div>
  );
}

export default Bannerfootercontent;
