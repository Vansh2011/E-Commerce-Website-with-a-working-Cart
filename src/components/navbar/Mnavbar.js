import React from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Mnavbar({ handleCartOpen }) {
  return (
    <div className="-md:visible">
      <nav className="w-full flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="FNP_Logo" className="w-20" />
        </Link>
        <div className="flex justify-center items-center gap-4 mr-4">
          <div className="flex flex-col justify-center items-center hover:cursor-pointer">
            <i className="bx bxs-user-rectangle text-3xl/6 text-gray-500 "></i>
          </div>
          <div
            className="flex flex-col justify-center items-center hover:cursor-pointer"
            onClick={handleCartOpen}
          >
            <i className="bx bx-cart text-3xl/6 text-gray-500 "></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Mnavbar;
