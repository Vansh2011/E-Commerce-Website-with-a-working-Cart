import React from "react";

function Textheading({ heading, fontSize, margin }) {
  return (
    <div className="text-left">
      <p
        className={`font-bold text-left ${
          fontSize ? fontSize : "text-xl -xl:text-lg"
        } ${margin ? margin : "mt-8 -xl:mt-4 mb-2"} capitalize`}
      >
        {heading}
      </p>
    </div>
  );
}

export default Textheading;
