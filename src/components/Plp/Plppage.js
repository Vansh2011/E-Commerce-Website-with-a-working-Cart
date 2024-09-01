import React, { useState } from "react";
import Header from "../header/header";
import Main from "../main/Main";
import Readmorerender from "../readmore/Readmorerender";
import Footer from "../footer/Footer";
import FNPcomp from "../FNPcomp/FNPcomp";
import Policy from "../CSRpolicy/Policy";
import Lastelement from "../lastelement/Lastelement";
import Cart from "../Cart/Cart";
// import Filterui from "../FilterUI/Filterui";
// import Sortby from "../Sortby/Sortby";

function Plppage() {
  // const [showFilterBox, setShowFilterBox] = useState(false);
  // const [showSortByBox, setShowSortByBox] = useState(false);

  // const toggleFilterBox = () => {
  //   setShowFilterBox(!showFilterBox);
  // };

  // const toggleSortByBox = () => {
  //   setShowSortByBox(!showSortByBox);
  // };

  const [cart, setCart] = useState(false);

  const handleCartOpen = () => {
    setCart(true);
  };

  const handleCartClose = () => {
    setCart(false);
  };

  return (
    <div>
      <div>
        <Header cart={cart} handleCartOpen={handleCartOpen} />
        <Main />
        <Cart cart={cart} handleCartClose={handleCartClose} />
      </div>
      <Readmorerender />
      <Footer />
      <FNPcomp />
      <Policy />
      <Lastelement />
      {/* <div
        className={`invisible -md:visible fixed bottom-0 left-0 bg-white   z-10 w-[100%] ${
          showFilterBox ? "translate-y-0" : "translate-y-full"
        } transition-all delay-200 ease-in-out`}
      >
        <Filterui />
      </div>
      <div
        className={`invisible -md:visible fixed bottom-0 left-0 bg-white z-10 w-[100%] ${
          showSortByBox ? "translate-y-0" : "translate-y-full"
        } transition-all delay-200 ease-in-out`}
      >
        <Sortby />
      </div>
      <div className="flex">
        <div
          className={`invisible w-[50%] flex justify-center -md:visible fixed bottom-0 bg-neutral-100 z-10`}
        >
          <button
            className="flex justify-center px-5 py-3 text-stone-500 "
            onClick={toggleSortByBox}
          >
            Sort By
          </button>
        </div>
        <div
          className={`invisible w-[50%] flex justify-center -md:visible fixed bottom-0 left-[50%] bg-neutral-100 z-10`}
        >
          <button
            className="flex justify-center px-5 py-3 text-stone-500 "
            onClick={toggleFilterBox}
          >
            Filter
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Plppage;
