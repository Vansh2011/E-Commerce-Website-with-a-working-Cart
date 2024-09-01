import React, { useState, useContext } from "react";
import { ProductContext } from "../../Productcontext";
import Filteruidisplay from "./Filteruidisplay";
import Textheading from "../textheading/Textheading";

const filterList = [
  {
    title: "Price",
    key: "priceCategory",
    ranges: [
      "₹ 0 TO ₹ 499",
      "₹ 500 TO ₹ 999",
      "₹ 1000 TO ₹ 1499",
      "₹ 1500 TO ₹ 1999",
      "₹ 2000 TO ₹ 2499",
      "₹ 3000 AND ₹ ABOVE",
    ],
  },
  {
    title: "Flower Type",
    key: "type",
    ranges: [
      "Roses",
      "Mixed Flowers",
      "Carnations",
      "Lillies",
      "Orchids",
      "Exotic Flowers",
      "Gerbaras",
      "Daisies",
      "Others",
    ],
  },
  {
    title: "Arrangement",
    key: "arrangement",
    ranges: ["Vase", "Bouquet", "Unique", "Box", "Sleeves", "Basket"],
  },
  {
    title: "Color",
    key: "color",
    ranges: [
      "Others",
      "Red",
      "Pink",
      "White",
      "Yellow",
      "Purple",
      "Blue",
      "Orange",
    ],
  },
];

function Filterui() {
  const { products, setFilteredProducts } = useContext(ProductContext);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const { filteredProducts, clearFilters } = useContext(ProductContext);
  const handleCheckboxChange = (category, range) => {
    setSelectedFilters((prevSelectedFilters) => {
      const categoryFilters = prevSelectedFilters[category] || [];
      if (categoryFilters.includes(range)) {
        return {
          ...prevSelectedFilters,
          [category]: categoryFilters.filter((item) => item !== range),
        };
      } else {
        return {
          ...prevSelectedFilters,
          [category]: [...categoryFilters, range],
        };
      }
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    clearFilters();
  };

  const hasSelectedFilters = Object.values(selectedFilters).some(
    (filters) => filters.length > 0
  );

  const applyFilters = () => {
    const filteredProducts = products.filter((product) => {
      const productFilters = Object.keys(selectedFilters).reduce(
        (acc, category) => {
          const categoryFilters = selectedFilters[category];
          const productKey = filterList.find(
            (filter) => filter.title === category
          ).key;
          return acc && categoryFilters.includes(product[productKey]);
        },
        true
      );
      return productFilters;
    });
    setFilteredProducts(filteredProducts);
  };

  const [activeTitle, setActiveTitle] = useState(null);

  const handleClick = (index) => {
    setActiveTitle(index);
  };

  return (
    <div className="transition-all delay-500 mb-12">
      {hasSelectedFilters && (
        <div className="flex items-center justify-between mx-4">
          <button onClick={clearAllFilters} className="clear-all-button">
            Clear All
          </button>
          <button onClick={applyFilters} className="apply-filters-button">
            Apply Filters
          </button>
        </div>
      )}
      <div className="border border-solid border-zinc-100">
        <Textheading heading="Filter" margin="mt-0 ml-4" />
      </div>

      {filterList.map((items, index) => (
        <div key={index} className="flex">
          <div
            onClick={() => handleClick(index)}
            className={`w-[40%] text-left bg-neutral-100 py-2 flex`}
          >
            <p
              className={`w-[40%] text-left bg-neutral-100 py-2 text-base ml-4 `}
            >
              {items.title}
            </p>
          </div>
          <div className="flex flex-col">
            {activeTitle == index && (
              <Filteruidisplay
                filterList={filterList}
                index={index}
                ranges={items.ranges}
                selectedFilters={selectedFilters}
                onCheckboxChange={handleCheckboxChange}
                activeTitle={activeTitle}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filterui;
