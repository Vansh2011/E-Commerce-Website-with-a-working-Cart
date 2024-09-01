import React from "react";
import Slider from "../splide-slide/Slider";
import "../Bannerslider/Bannerslider.css";

const list = [
  "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Birthday-7624.jpg",
  "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Birthday-7624.jpg",
  "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Birthday-7624.jpg",
  "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Birthday-7624.jpg",
];

const optionsMain = {
  type: "slide",
  perPage: 1,
  perMove: 1,
  arrows: true,
  autoPlay: false,
  pagination: false,
  width: "100%",
};

function Bannerslider() {
  return (
    <section className="Bannerslider flex w-[100%] items-center justify-center mt-5">
      <div className="w-[90%]">
        <Slider
          list={list}
          options={optionsMain}
          borderRadius="rounded-xl"
          link="/products"
        />
      </div>
    </section>
  );
}

export default Bannerslider;
