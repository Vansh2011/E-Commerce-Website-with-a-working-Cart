import React from "react";
import { Link } from "react-router-dom";

function Footercol({ links }) {
  return (
    <div>
      {links.map((link, index) => (
        <div
          key={index}
          className="flex flex-col justify-center text-left text-sm text-neutral-500 transition-all delay-100 mb-3 hover:text-black -xl:mb-2"
        >
          <Link to="/">{link}</Link>
        </div>
      ))}
    </div>
  );
}

export default Footercol;
