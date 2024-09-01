import React from "react";
import Accordion from "./Filteraccordion";
import Textheading from "../textheading/Textheading";
import { useDispatch, useSelector } from "react-redux";
import { addFilters, removeFilters } from "../../redux/ProductSlice";

function Filterbox() {
  const dispatch = useDispatch();

  // Handle checkbox changes to add filters
  const handleCheckboxChange = (value) => {
    dispatch(addFilters(value));
  };

  // Clear all filters and reset to original products
  const clearAllFilters = () => {
    dispatch(removeFilters());
  };

  // Get the filter items and selected filters from the Redux store
  const filterItems = useSelector((state) => state.products.filters);
  const selectedFiltersItems = useSelector(
    (state) => state.products.selectedFilters
  );

  return (
    <div className="my-5 ml-4 transition-all delay-500 -md:w-[100%]">
      <div className="p-2 border border-solid border-zinc-100">
        <Textheading heading="Filter" margin="mt-0 ml-4" />
        {selectedFiltersItems.length > 0 && (
          <div className="flex items-center justify-between mx-4">
            <button onClick={clearAllFilters} className="clear-all-button">
              Clear All
            </button>
          </div>
        )}
        {filterItems.length > 0 ? (
          filterItems.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              ranges={item.ranges}
              selectedFilters={selectedFiltersItems}
              onCheckboxChange={handleCheckboxChange}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No filters available</p>
        )}
      </div>
    </div>
  );
}

export default Filterbox;
