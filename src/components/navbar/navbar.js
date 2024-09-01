import React from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ cart, handleCartOpen }) {
  const totalItems = useSelector((state) => state.cart.list.length);
  return (
    <nav className="navbar flex justify-between items-center border-b border-solid border-gray-300 -lg:py-2">
      <div className="first-div flex justify-center items-center">
        <div className="logobox">
          <Link to="/">
            <img src={Logo} alt="Company Logo" className="w-36 -lg:w-20" />
          </Link>
        </div>
        <div className="border-solid border -md:hidden h-14 -lg:h-10 border-gray-600 opacity-40"></div>
        <div className="location-box pl-4 -lg:hidden">
          <div className="form-box">
            <form
              action="#"
              className="flex flex-col justify-center items-center"
            >
              <label className="text-base text-left -xl:text-sm/none font-bold">
                Where to deliver?
              </label>
              <select className="font-bold -xl:text-sm text-red-700 flex justify-center items-center">
                <option>Location Missing</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="second-div -md:hidden">
        <form>
          <input
            type="text"
            className="w-96 -xl:w-72 bg-zinc-50 rounded-xl border-solid border-2 border-gray-300 p-2"
            placeholder="What are you looking for ?"
          />
        </form>
      </div>
      <div className="third-div flex items-center -md:hidden">
        <div className="flex flex-col justify-center items-center mr-6 -lg:mr-3 hover:cursor-pointer">
          <i className="bx bxs-truck text-3xl/6 -xl:text-2xl/6 text-gray-500 "></i>
          <p className="text-sm">Same Day</p>
        </div>
        <div className="flex flex-col justify-center items-center mr-6 -lg:mr-3 hover:cursor-pointer">
          <i className="bx bx-rupee text-2xl/6 border-solid border border-gray-500 text-gray-500 rounded-lg "></i>
          <p className="text-sm">INR</p>
        </div>
        <div className="flex flex-col justify-center items-center mr-6 -lg:mr-3 hover:cursor-pointer">
          <i className="bx bx-bell text-3xl/6 -xl:text-2xl/6 text-gray-500 "></i>
          <p className="text-sm">Reminder</p>
        </div>
        <div
          className="flex flex-col justify-center items-center mr-6 -lg:mr-3 hover:cursor-pointer relative"
          onClick={handleCartOpen}
        >
          <i className="bx bx-cart text-3xl/6 -xl:text-2xl/6 text-gray-500 "></i>
          <p className="text-sm">Cart</p>
          <span className="flex justify-center items-center text-white absolute -top-2 -right-2 bg-red-600 w-4 h-4 text-xs rounded-full">
            {totalItems}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center mr-6 -lg:mr-3 hover:cursor-pointer">
          <i className="bx bxs-user-rectangle text-3xl/6 -xl:text-2xl/6 text-gray-500 "></i>
          <p className="text-sm">Abhishek</p>
        </div>
        <div className="flex flex-col justify-center items-center mr-6 -lg:mr-3 hover:cursor-pointer">
          <i className="bx bx-dots-horizontal-rounded text-3xl/6 -xl:text-2xl/6 border-solid border-2 border-gray-500 text-gray-500  rounded-lg"></i>
          <p className="text-sm">More</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
