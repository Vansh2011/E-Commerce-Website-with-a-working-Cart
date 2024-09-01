import React from "react";

function Whychoosecard({ feature, index, icon }) {
  return (
    <div
      className={`w-[20rem] -xl:w-[13rem] -lg:w-[9rem] -md:w-[12rem] -sm:w-[9rem] flex flex-col -md:mb-4 justify-center items-center ${
        feature === "Handcrafted Arrangements" || index === 3
          ? "-md:mr-0"
          : "-md:mr-4"
      } ${index === 3 ? "" : "mr-7"}  `}
    >
      <div className="w-[4rem] h-[4rem] flex justify-center items-center bg-stone-100 rounded-full text-3xl text-lime-600">
        <ion-icon name={icon}></ion-icon>
      </div>
      <h2 className="text-base text-gray-800 text-center -sm:text-xs -sm:mt-2">
        {feature}
      </h2>
    </div>
  );
}

export default Whychoosecard;
