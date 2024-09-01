// SortBy.js
import React, { useState, useContext, useEffect, useMemo } from "react";
import { ProductContext } from "../../Productcontext";
import _ from "lodash";

const sortByOptions = [
  {
    title: "Price: Low to High",
    key: "price",
    order: "asc",
  },
  {
    title: "Price: High to Low",
    key: "price",
    order: "desc",
  },
  {
    title: "Alphabetical: A to Z",
    key: "name",
    order: "asc",
  },
  {
    title: "Alphabetical: Z to A",
    key: "name",
    order: "desc",
  },
];

function SortBy() {
  const { products, setSortedProducts } = useContext(ProductContext);
  const [selectedSort, setSelectedSort] = useState(sortByOptions[0]); // default sort option
  const [showDropdown, setShowDropdown] = useState(false);

  const sortedProducts = useMemo(() => {
    if (
      products &&
      products.length > 0 &&
      Object.keys(selectedSort).length > 0
    ) {
      return _.sortBy(products, selectedSort.key);
    }
    return [];
  }, [selectedSort, products]);

  useEffect(() => {
    setSortedProducts(sortedProducts);
  }, [sortedProducts]);

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    setShowDropdown(false);
  };

  return (
    <div className="sort-by-container">
      <button
        className="sort-by-button border border-solid border-blue-300 p-2 rounded-full"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Sort By: {selectedSort.title}
      </button>
      {showDropdown && (
        <ul className="sort-by-dropdown bg-white z-50">
          {sortByOptions.map((option, index) => (
            <li key={index} onClick={() => handleSortChange(option)}>
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortBy;
