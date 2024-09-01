import React from "react";

function Deleteproduct({ id, handleDelete, quantity, handleIncrease }) {
  return (
    <div className="w-[35%] text-green-800 rounded-lg flex justify-between px-2 items-center border border-solid border-lime-700">
      <div
        className="hover:cursor-pointer"
        onClick={() => {
          handleDelete(id);
        }}
      >
        <ion-icon name="trash-outline"></ion-icon>
      </div>
      <span>{quantity}</span>
      <div
        className="hover:cursor-pointer"
        onClick={() => {
          handleIncrease(id);
        }}
      >
        <ion-icon name="add-outline"></ion-icon>
      </div>
    </div>
  );
}

export default Deleteproduct;
