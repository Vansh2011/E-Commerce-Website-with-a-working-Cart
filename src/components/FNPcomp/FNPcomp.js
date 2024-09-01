import React from "react";

const img =
  "https://www.fnp.com/assets/images/custom/brands-8-sept-2022_new.png";

function FNPcomp() {
  return (
    <div className="w-full flex justify-center p-8 border-y border-solid border-zinc-200 bg-neutral-100">
      <img src={img} alt="Some random text" />
    </div>
  );
}

export default FNPcomp;
