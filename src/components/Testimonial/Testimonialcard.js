import React from "react";

function Testimonialcard({
  initials,
  number,
  fname,
  ago,
  comment,
  occassion,
  state,
}) {
  return (
    <div className="w-auto text-left flex flex-col rounded-lg border border-solid border-zinc-200 p-3 -sm:p-2 -sm:w-56 ">
      <div className="flex">
        <div className="bg-slate-500 rounded-full text-white text-base flex justify-center items-center w-8 h-8 p-1 mr-2">
          <p>{initials}</p>
        </div>
        <div className="text-left flex flex-col text-sm -sm:text-xs">
          <div className="flex text-base">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star text-slate-200"></i>
          </div>
          <div className="flex items-center">
            <p className="text-sm -sm:text-xs/none text-zinc-400">{fname}</p>
            <div className="w-1 h-1 mx-2 bg-black rounded-full"></div>
            <p className="text-sm -sm:text-xs text-zinc-400">{ago}</p>
          </div>
        </div>
      </div>
      <div className="text-base font-medium -sm:text-sm w-4/5">
        <p> {comment} </p>
      </div>
      <div className="flex">
        <div className="bg-zinc-100 rounded-sm mr-2 mt-2">
          <p className="text-xs text-zinc-500 px-2">Occasion: {occassion}</p>
        </div>
        <div className="bg-zinc-100  rounded-sm mt-2">
          <p className="text-xs text-zinc-500 px-2">City: {state}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonialcard;
