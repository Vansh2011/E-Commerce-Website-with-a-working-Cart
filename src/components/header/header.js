import React from "react";
import Navbar from "../navbar/navbar";
import Dropdownanchor from "../dropdownmenu/dropdownanchor";
import Mnavbar from "../navbar/Mnavbar";

function Header({ cart, handleCartOpen }) {
  return (
    <header className=" w-[100%]">
      <div className="-md:hidden -sm:hidden">
        <Navbar cart={cart} handleCartOpen={handleCartOpen} />
        <Dropdownanchor />
      </div>
      <div className="hidden -md:block -sm:block">
        <Mnavbar handleCartOpen={handleCartOpen} />
      </div>
    </header>
  );
}

export default Header;
