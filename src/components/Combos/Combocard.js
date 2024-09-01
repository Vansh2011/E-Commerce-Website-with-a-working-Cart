import React from "react";

function Combocard({ index, setisActive, isActive, path, label, price }) {
  return (
    <div
      className={`-sm:w-20 ${
        index !== 2 ? "mr-4 -sm:mr-2" : "mr-0"
      } flex flex-col rounded-xl p-1 overflow-hidden hover:cursor-pointer ${
        isActive
          ? "bg-green-100 border-2 border-solid border-black"
          : "border-2 border-solid border-zinc-100"
      }`}
    >
      <img src={path} alt="design 1" className="w-28  rounded-lg" />
      <div className="w-30 flex justify-between items-center text-left">
        <p className="-sm:text-xs mt-2">{label}</p>
        {isActive && <i className="bx bx-edit -sm:text-xs"></i>}
      </div>
      <p className="text-left font-semibold">{price}</p>
    </div>
  );
}

export default Combocard;
