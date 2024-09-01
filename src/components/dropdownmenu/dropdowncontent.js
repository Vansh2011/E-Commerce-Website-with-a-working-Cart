import React from "react";
import { Link } from "react-router-dom";

function Dropdowncontent({ index, dropDropdowncontent }) {
  const left = index <= 8;
  return (
    <div
      className={`flex absolute top-8 -xl:top-[1.5rem] ${
        left ? "left-0" : "right-0"
      } z-10`}
    >
      <div className="dropdown-list flex rounded-xl overflow-hidden shadow-md">
        <div className="column w-44 flex flex-col bg-gray-300">
          <Link to="/" className="flex justify-center items-center">
            {dropDropdowncontent} Columns
          </Link>
          <div className="flex flex-col">
            <Link to="/">Item 1</Link>
            <Link to="/">Item 2</Link>
            <Link to="/">Item 3</Link>
            <Link to="/">Item 4</Link>
            <Link to="/">Item 5</Link>
          </div>
        </div>
        <div className="column w-44 flex flex-col bg-white">
          <Link to="/" className="flex justify-center items-center">
            {dropDropdowncontent} Columns
          </Link>
          <ul className="list-none">
            <li className="list-none">
              <Link to="/">Item 1</Link>
            </li>
            <li className="list-none">
              <Link to="/">Item 2</Link>
            </li>
            <li className="list-none">
              <Link to="/">Item 3</Link>
            </li>
            <li className="list-none">
              <Link to="/">Item 4</Link>
            </li>
            <li className="list-none">
              <Link to="/">Item 5</Link>
            </li>
          </ul>
        </div>
        <div className="column w-44 flex flex-col bg-gray-300">
          <Link to="/" className="flex justify-center items-center">
            {dropDropdowncontent} Columns
          </Link>
          <ul className="list-none">
            <li className="list-none">
              <Link to="/">Item 1</Link>
            </li>
            <li className="list-none">
              <Link to="/">Item 2</Link>
            </li>
            <li className="list-none">
              <Link to="/">Item 3</Link>
            </li>
            <li className="list-none">
              <Link to="/">Item 4</Link>
            </li>
            <li className="list-none">
              <Link to="/">Item 5</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dropdowncontent;
