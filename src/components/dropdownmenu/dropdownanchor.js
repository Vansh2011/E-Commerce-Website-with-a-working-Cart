import React, { useState } from "react";
import Dropdowncontent from "./dropdowncontent";
import { Link } from "react-router-dom";

function Dropdownanchor() {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const handleMouseOver = (index) => {
    setVisibleDropdown(index);
  };

  const handleMouseOut = () => {
    setVisibleDropdown(null);
  };

  const menuItems = [
    "Christmas",
    "On Trend",
    "Birthday",
    "Anniversary",
    "Cakes",
    "Flowers",
    "Personalised",
    "Plants",
    "Chocolates",
    "Combos",
    "More Gifts",
    "Occassion",
    "Global",
  ];

  return (
    <section className="section-dropdown flex justify-center border-b border-solid border-gray-300 z-20 -lg:hidden">
      <div className="container flex justify-center items-center">
        <div className="dropdown flex">
          {menuItems.map((item, index) => (
            <Link to="/products" key={index}>
              <div
                className="dropdown-achor flex justify-center items-center relative mx-2 py-1 -xl:text-sm/none -xl:mx-1"
                onMouseEnter={() => handleMouseOver(index)}
                onMouseLeave={handleMouseOut}
              >
                {item}
                <i className="bx bx-chevron-down"></i>
                {visibleDropdown === index && (
                  <Dropdowncontent index={index} dropDropdowncontent={item} />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dropdownanchor;
