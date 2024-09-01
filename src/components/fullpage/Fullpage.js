import React, { useState } from "react";
import Header from "../header/header";
import Hero from "../hero/Hero";
import Testimonial from "../Testimonial/Testimonial";
import Recentlyreviewed from "../recentlyreviewed/Recentlyreviewed";
import Youmaylike from "../youmayalsolike/Youmaylike";
import Whatothersviewing from "../whatothersview/Whatothersview";
import Banner from "../Banner/Banner";
import Readmorerender from "../readmore/Readmorerender";
import Footer from "../footer/Footer";
import Cart from "../Cart/Cart";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Fullpage() {
  const { id } = useParams();
  const productDetails = useSelector(
    (state) => state.products.originalProducts
  );

  const product = productDetails.find(
    (product) => String(product.productId) === id
  );

  const [cart, setCart] = useState(false);

  const handleCartOpen = () => {
    setCart(true);
  };

  const handleCartClose = () => {
    setCart(false);
  };
  return (
    <div className="flex flex-col">
      <Header cart={cart} handleCartOpen={handleCartOpen} />
      <Hero
        heading={product?.productName}
        newprice={product?.newPrice}
        originalprice={product?.originalPrice}
        discount={product?.discount}
        rating={product?.rating}
        number={product?.number}
      />
      <Testimonial />
      <div className="invisible -md:visible  -sm:visible py-1 w-full border-3 border-solid mt-4 bg-zinc-100"></div>
      <Recentlyreviewed padding="px-24 -xl:px-8 -sm:px-5" />
      <div className="invisible -md:visible  -sm:visible py-1 w-full border-3 border-solid mt-4 bg-zinc-100"></div>
      <Youmaylike padding="px-24" />
      <div className="invisible -md:visible  -sm:visible py-1 w-full border-3 border-solid mt-4 bg-zinc-100"></div>
      <Whatothersviewing padding="px-24" />
      <Banner />
      <Readmorerender />
      <Footer />
      <Cart cart={cart} handleCartClose={handleCartClose} />
    </div>
  );
}

export default Fullpage;
