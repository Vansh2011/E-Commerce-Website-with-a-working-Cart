import React from "react";

function Location({ location }) {
  return (
    <div className="flex items-center text-lg font-semibold bg-green-50 p-3">
      <ion-icon name="location-outline"></ion-icon>
      <p className="text-left">{location}</p>
    </div>
  );
}

export default Location;
