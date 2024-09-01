import React from "react";
import { Link } from "react-router-dom";

function Homebutton({
  title,
  background,
  fontSize,
  textColor,
  iconColor,
  widthBtn,
  link,
}) {
  return (
    <Link
      to={link}
      className={`flex justify-between items-center ${
        widthBtn ? widthBtn : "w-[50%] -xl:w-[80%]"
      } ${background} rounded-full pl-5 mt-4`}
    >
      <p className={`${fontSize} ${textColor ? textColor : "text-white"} `}>
        {" "}
        {title}{" "}
      </p>
      <div
        className={`${
          iconColor ? iconColor : "text-white"
        } text-5xl -sm:text-4xl flex justify-center items-center`}
      >
        <ion-icon name="arrow-forward-circle"></ion-icon>
      </div>
    </Link>
  );
}

export default Homebutton;
