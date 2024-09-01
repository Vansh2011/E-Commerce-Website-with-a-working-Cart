import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./deliverydate.css";

function Deliverydate({ setSelectedDate }) {
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formattedDate, setFormattedDate] = useState(
    "Select Delivery Date and Time Slot"
  );

  const datePickerRef = useRef(null);

  const handleDateClick = () => {
    setShowDatePicker(true); // Always show the DatePicker when the div is clicked
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowDatePicker(false);
    const formatted = date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
    });
    setFormattedDate(formatted);
    setSelectedDate(formatted);
  };

  const handleClickOutside = (event) => {
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target)
    ) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    if (showDatePicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDatePicker]);

  return (
    <div className="flex flex-col -sm:hidden relative">
      <div className="flex flex-col">
        <label className="text-left mt-6 mb-2 text-zinc-700 font-semibold text-xl">
          Select Delivery Date & Time Slot
        </label>
        <div
          className="flex justify-between items-center p-2 border-2 rounded-xl border-solid border-zinc-300 w-full text-zinc-500 cursor-pointer"
          onClick={handleDateClick}
        >
          <div className="flex items-center">
            <i className="bx bx-calendar pl-1 text-lg/none text-zinc-400"></i>
            <p className="text-zinc-400 pl-2">{formattedDate}</p>
          </div>
          <i className="bx bxs-chevron-right"></i>
        </div>
        {showDatePicker && (
          <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-60">
            <div ref={datePickerRef}>
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                popperClassName="w-96"
                wrapperClassName="w-full"
                className="border p-2 rounded-lg border-gray-300 shadow-md bg-white w-[70%]"
                inline
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Deliverydate;
