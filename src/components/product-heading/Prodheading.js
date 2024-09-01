import React from "react";

function Prodheading({ heading, fontSize }) {
  return (
    <div className={`${fontSize}`}>
      <h3 className="text-left text-zinc-700 font-semibold">{heading}</h3>
    </div>
  );
}

export default Prodheading;
