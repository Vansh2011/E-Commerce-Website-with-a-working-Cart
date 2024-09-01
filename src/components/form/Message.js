import React, { useState } from "react";

function Message() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const handleInputChange = (event) => {
    const newMessage = event.target.value;
    setMessage(newMessage);
    setCount(newMessage.length);
  };

  return (
    <div className="flex flex-col">
      <form className="flex flex-col -sm:pl-5 justify-center relative">
        <label className="text-left mt-6 mb-2 text-zinc-700 font-semibold text-xl">
          Message on Cake
        </label>
        <input
          type="text"
          className="text-lg pl-10 -sm:w-80 border-2 border-solid border-zinc-300 overflow-hidden rounded-xl flex justify-center items-center outline-none p-2 focus:border-black"
          placeholder="Message on Cake"
          maxLength="25"
          value={message}
          onChange={handleInputChange}
        />
        <i className="bx bx-cake absolute text-lg/none top-[4.6rem] left-3 text-zinc-400"></i>
        <span className="text-lg/none text-zinc-400 absolute bottom-4 right-5">
          {count}/25
        </span>
      </form>
    </div>
  );
}

export default Message;
