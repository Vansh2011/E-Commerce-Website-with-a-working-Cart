import React from "react";
import Gift from "./Gift";
import Deliverydate from "./Deliverydate";
import Message from "./Message";

function Form({ setMessage, setSelectedDate, setDeliveryLocation }) {
  return (
    <div className="pb-6 border-b-4 border-zinc-100 border-solid -sm:border-none">
      <Gift setDeliveryLocation={setDeliveryLocation} />
      <div className="invisible -sm:visible -sm:w-[22.5rem] -sm:border-4 -sm:border-solid -sm:border-zinc-100 -sm:mt-4"></div>
      <Deliverydate setSelectedDate={setSelectedDate} />
      <Message setMessage={setMessage} />
      <div className="invisible -sm:visible -sm:w-[22.5rem] -sm:border-4 -sm:border-solid -sm:border-zinc-100 -sm:mt-4"></div>
    </div>
  );
}

export default Form;
