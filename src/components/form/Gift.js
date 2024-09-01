import React from "react";

function Gift({ setDeliveryLocation }) {
  const handleChange = (e) => {
    setDeliveryLocation(e.target.value);
  };
  return (
    <div className="flex flex-col">
      <form className="flex flex-col -sm:pl-5 -sm:w-80">
        <label className="text-left mt-6 mb-2  text-zinc-700 font-semibold text-xl">
          Gift Receiver's Location
        </label>
        <div className="text-l flex border-2 border-solid border-zinc-300 transition-all duration-300 overflow-hidden rounded-xl focus:border-black">
          <select className="flex justify-center items-center outline-none p-2 -sm:py-1 rounded-xl -sm:hidden">
            <option className="rounded-s-xl">IND</option>
            <option>IND</option>
            <option className="rounded-e-xl">IND</option>
          </select>
          <div className="h-10 border border-zinc-600 opacity-40 -sm:hidden"></div>
          <input
            type="text"
            className="mx-2 -sm:mx-0 outline-none w-80 -sm:w-full -sm:text-sm -sm:p-2"
            placeholder="* Enter Receiver's Pincode, Location, Area"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Gift;
