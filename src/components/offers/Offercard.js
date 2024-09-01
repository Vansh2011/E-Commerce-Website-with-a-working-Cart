import React from "react";
function Offercard({ logo, discount, code }) {
  return (
    <div>
      <div className="flex flex-col">
        <div className={`flex items-center justify-between`}>
          <div className="flex  items-center">
            {logo && <img src={logo} alt="logo" className="w-12 mr-4" />}
            <p className="text-xs -sm:font-bold">
              {discount} OFF* on 1st Order, Code: {code}
            </p>
          </div>
          <p className="text-blue-500 -sm:text-xs">*T&C</p>
        </div>
      </div>
    </div>
  );
}

export default Offercard;
