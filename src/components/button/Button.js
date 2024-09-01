import React from "react";

function Button({
  btnIcon,
  btnMargin = 0,
  btnText,
  btnBg,
  btnColor,
  btnBorder,
  action,
}) {
  return (
    <button
      onClick={action && action}
      className={`w-2/4 text-base/none flex justify-center items-center ${btnBg} ${btnMargin} rounded-xl p-3 ${btnColor} border-2 border-solid ${btnBorder}`}
    >
      {btnIcon && <i className={btnIcon}></i>}
      <p className="ml-2">{btnText}</p>
    </button>
  );
}

export default Button;
