import React from "react";

function Review({ rating, number, padding, width, review = false }) {
  return (
    <div
      className={`text-xs font-semibold flex ${padding} justify-center items-center ${width} rounded-3xl border border-solid border-zinc-400 bg-white -sm:border-none`}
    >
      <i className="bx bxs-star text-green-700 mr-px"></i>
      <p>{rating}</p>
      <div className="mx-2 -sm:mx-1 h-4 border border-solid border-zinc-400"></div>
      <div className="flex">
        {number && <p className="text-gray-400 font-semibold">{number}</p>}
        {review && (
          <p className="ml-1 -md:hidden -sm:hidden font-semibold">Reviews</p>
        )}
      </div>
    </div>
  );
}

export default Review;
