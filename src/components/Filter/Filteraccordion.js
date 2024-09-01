import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilters, removeFilters } from "../../redux/ProductSlice";

const Accordion = ({ title, ranges }) => {
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch();
  const selectedFilters = useSelector(
    (state) => state.products.selectedFilters
  );

  const handleCheckboxChange = (item) => {
    if (selectedFilters.includes(item)) {
      dispatch(removeFilters(item)); // Remove the filter if it exists
    } else {
      dispatch(addFilters(item)); // Add the filter if it does not exist
    }
  };

  const isSelected = (item) => selectedFilters.includes(item);

  return (
    <div>
      <div className="accordion-item -sm:w-80 hover:cursor-pointer">
        <div
          className="accordion-title p-4 mt-2 text-left text-lg/none flex justify-between items-center border-t border-zinc-100 font-semibold"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="flex items-center">
            <p className="text-base -xl:text-sm -lg:text-xs">{title}</p>
          </div>
          <div>
            <i
              className={isActive ? "bx bx-chevron-up" : "bx bx-chevron-down"}
            ></i>
          </div>
        </div>
        {isActive && (
          <div className="accordion-content text-left p-2 transition-all">
            {ranges.map((item, index) => (
              <div
                key={index}
                className="text-base/none -xl:text-xs/none hover:text-lime-700"
              >
                <input
                  type="checkbox"
                  className="mb-2 mr-2 accent-lime-700 hover:text-lime-700 hover:cursor-pointer"
                  value={item}
                  checked={isSelected(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
