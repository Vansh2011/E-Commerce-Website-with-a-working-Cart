import React from "react";
import Countdown from "react-countdown";

function Timeleft({ date }) {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  };
  return (
    <div className="flex justify-center w-full -sm:w-80 -sm:ml-5 bg-gray-100 rounded-lg mt-8 mb-4 -sm:mt-4">
      <box-icon name="time-five" color="rgba(59,58,58,0.69)"></box-icon>
      <p className="mx-2">Time To Get Delivered Today</p>
      <span className="font-semibold text-orange-400">
        <Countdown date={Date.now() + 1000000} renderer={renderer} />{" "}
      </span>
    </div>
  );
}

export default Timeleft;
