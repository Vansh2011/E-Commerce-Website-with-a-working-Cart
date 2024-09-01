import React from "react";
import ProductCard from "../product-card/Productcard";
import Slider from "../splide-slide/Slider";
import Recentlyreviewed from "../recentlyreviewed/Recentlyreviewed";
import { Link } from "react-router-dom";
import "./Productplp.css";
import { useSelector } from "react-redux";

const bannerImg = [
  "https://www.fnp.com/assets/images/custom/cakes_23/Cake-Top-Banner_web_11aug.jpg",
  "https://www.fnp.com/assets/images/custom/cakes_23/Eggless-Cakes_Microsite_web.jpg",
];

const optionsBanner = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  arrows: true,
  autoPlay: false,
};

const options = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  arrows: false,
  autoPlay: false,
  interval: 100,
  breakpoints: {
    360: {
      pagination: false,
      autoPlay: true,
    },
  },
};

function Productplp() {
  const productDetails = useSelector(
    (state) => state.products.filteredProducts
  );

  return (
    <div className="w-[80%] -md:w-[100%] px-8 -md:px-4 mb-5 mt-16">
      <Link to="/product" className="product">
        <Slider
          options={optionsBanner}
          list={bannerImg}
          borderRadius="rounded-xl"
        />
      </Link>
      <div className={`prodcard flex flex-wrap my-4 justify-between`}>
        {productDetails.map((productItem, id) => (
          <ProductCard
            key={id}
            id={productItem?.productId}
            title={productItem?.productName}
            newprice={productItem?.newPrice}
            isProduct={productItem?.isProduct}
            options={options}
            list={productItem?.sliderProductImages}
            originalprice={productItem?.originalPrice}
            discount={productItem?.discount}
            eta={productItem?.eta}
            rating={productItem?.rating}
            number={productItem?.number}
            padding={productItem?.padding}
            width={productItem?.width}
            etaStyle="-md:visible"
            margin="m-0 mb-4"
            cardWidth="w-[32%] -xl:w-[32%] -md:w-[49%]"
          />
        ))}
      </div>
      <Recentlyreviewed padding="-xl:p-0" />
    </div>
  );
}

export default Productplp;
