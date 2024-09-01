import React from "react";
import { useState } from "react";
import Header from "../header/header";
import Bannerslider from "../Bannerslider/Bannerslider";
import Exquisite from "../Exquisiterange/Exquisite";
import Whychoose from "../Whychoose/Whychoose";
import Occasion from "../Occasion/Occasion";
import Planfor from "../Planfor/Planfor";
import Bestseller from "../Bestseller/Bestseller";
import Favcolor from "../Favcolor/Favcolor";
import Newest from "../Newest/Newest";
import Showstopper from "../Showstopper/Showstopper";
import Luxe from "../Luxe/Luxe";
import Designer from "../Designer/Designer";
import Pairwith from "../Pairwith/Pairwith";
import Shop from "../Shop/Shop";
import Preserved from "../Preserved/Preserved";
import Indiabloom from "../Delivery/Indiabloom";
import Globalbloom from "../Delivery/Globalbloom";
import Hometestimonial from "../Hometestimonial/Hometestimonial";
import Cart from "../Cart/Cart";

function Homepage() {
  const [cart, setCart] = useState(false);

  const handleCartOpen = () => {
    setCart(true);
  };

  const handleCartClose = () => {
    setCart(false);
  };

  return (
    <main className="w-[100%] flex flex-col justify-center items-center">
      <div className="relative">
        <Header cart={cart} handleCartOpen={handleCartOpen} />
        <Bannerslider />
        <Exquisite />
        <Cart cart={cart} handleCartClose={handleCartClose} />
      </div>
      <Whychoose />
      <Occasion />
      <Planfor />
      <Bestseller />
      <Favcolor />
      <Newest />
      <Showstopper />
      <Luxe />
      <Designer />
      <Pairwith />
      <Shop />
      <Indiabloom />
      <Preserved />
      <Globalbloom />
      <Hometestimonial />
    </main>
  );
}

export default Homepage;
