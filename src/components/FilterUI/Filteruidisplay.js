import React, { useState } from "react";

const Filteruidislay = ({
  index,
  ranges,
  selectedFilters,
  onCheckboxChange,
  activeTitle,
}) => {
  index === 0 && console.log(ranges);
  return (
    <div className="flex flex-col">
      {activeTitle && (
        <>
          {ranges.map((item) => (
            <div key={item.id} className="flex">
              <input
                type="checkbox"
                className="mb-2 mr-2 accent-lime-700 hover:text-lime-700 hover:cursor-pointer"
                checked={selectedFilters.includes(item)}
                onChange={() => onCheckboxChange(item)}
              />
              {item}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Filteruidislay;
