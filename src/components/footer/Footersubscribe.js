import React from "react";
import Footercoltitle from "./Footercoltitle";

function Footersubscribe() {
  return (
    <div className="ml-8 flex flex-col -lg:items-center text-left -xl:ml-4">
      <Footercoltitle title="Subscribe Now" />
      <p className="text-sm text-neutral-500 mb-4">
        Get Updates on promotions and offer coupons
      </p>
      <form>
        <input
          type="email"
          placeholder="Enter your Email Address"
          className="w-96 p-3 rounded-lg outline-none -xl:w-56 -xl:px-1 -xl:text-sm"
        />
      </form>
    </div>
  );
}

export default Footersubscribe;
