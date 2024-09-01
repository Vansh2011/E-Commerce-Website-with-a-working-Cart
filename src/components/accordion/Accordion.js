import React, { useState } from "react";

const Accordion = ({ icon, title, content, isAbout }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="accordion-item -sm:w-80 hover:cursor-pointer">
        <div
          className="accordion-title p-4 mt-2 text-left text-lg/none flex justify-between items-center bg-zinc-50 font-semibold rounded-lg"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="flex items-center">
            <i className={`${icon} mr-3`}></i>
            <p className="text-base">{title}</p>
          </div>
          <div>
            <i
              className={isActive ? "bx bx-chevron-up" : "bx bx-chevron-down"}
            ></i>
          </div>
        </div>
        {isActive && (
          <div className="accordion-content text-left p-2">{content}</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
