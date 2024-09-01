import React from "react";

function Datetime({ timeSlot, dateSlot, shippingPrice }) {
  return (
    <div className="flex p-3 items-center rounded-lg border border-solid border-lime-600 relative">
      <div>
        <p className="text-sm text-gray-600 absolute top-[-11px] left-[1rem] bg-white">
          Delivery Date & Time Slot
        </p>
      </div>
      <ion-icon name="calendar-outline"></ion-icon>
      <p className="text-sm text-gray-600 font-bold ml-2">{dateSlot},</p>
      <p className="text-sm text-gray-600 font-bold">{timeSlot}</p>
    </div>
  );
}

export default Datetime;
