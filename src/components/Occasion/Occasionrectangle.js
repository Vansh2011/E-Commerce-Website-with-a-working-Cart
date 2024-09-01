import React from "react";
import { Link } from "react-router-dom";

function Occasionrectangle({ title, blur, opacity, isRectangle, index }) {
  return (
    <div>
      {isRectangle ? (
        <Link to="/products">
          <div
            className={`w-[28rem] -xl:w-[20rem] -md:w-[11rem] -sm:w-[9rem] -lg:mb-4 h-[15rem] -xl:h-[13rem] -md:h-[8rem] -sm:h-[7rem] bg-pink-100 relative rounded-2xl ${
              title === "Anniversary" || title === "Wedding"
                ? "mr-0 mb-4"
                : "mr-4 mb-4"
            } ${
              title === "Celebrations" ||
              title === "Housewarming" ||
              title === "Wedding"
                ? "-lg:mr-0"
                : "-lg:mr-4"
            } overflow-hidden`}
          >
            <div
              className={`bg-black border-2 border-solid border-black h-[4rem] -md:h-[2rem] ${blur} ${opacity} absolute bottom-0 w-full`}
            ></div>
            <div className="absolute left-4 bottom-4 -md:bottom-1 text-xl -md:text-base -sm:text-sm -sm:bottom-2 font-bold text-white">
              {title}
            </div>
          </div>
        </Link>
      ) : (
        <Link to="/products">
          <div
            className={`w-[13.5rem] -xl:w-[13rem] -md:w-[7rem] h-[13.5rem] -xl:h-[13rem] -md:h-[7rem] -sm:w-[5.6rem] -sm:h-[5.6rem] -lg:mb-4 flex flex-col items-center bg-pink-100 relative rounded-2xl ${
              title === "Condolences" ? "mr-0" : "mr-4"
            } ${
              title === "I'm Sorry" || title === "Condolences"
                ? "-lg:mr-0"
                : "-lg:mr-4"
            } overflow-hidden`}
          >
            <div
              className={`bg-black border-2 border-solid border-black h-[4rem] -xl:h-[3rem] -md:h-[2rem] ${blur} ${opacity} absolute bottom-0 w-full`}
            ></div>
            <div className="absolute bottom-2 -md:bottom-1 text-xl -xl:text-lg -md:text-base -sm:text-xs -sm:bottom-2 font-bold text-center text-white">
              {title}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Occasionrectangle;
