import React from "react";
import Productcards from "../product-card/Productcards";
import Textheading from "../textheading/Textheading";

const images = [
  "https://www.fnp.com/images/pr/l/v20230918213353/personalised-cool-yellow-led-cushion_1.jpg",
  "https://www.fnp.com/images/pr/l/v200/divine-ram-darbar_1.jpg",
  "https://www.fnp.com/images/pr/l/v200/premium-crystal-whiskey-glass-set_1.jpg",
];

const likeData = [
  {
    title: "Love for Pastel Carnation Bouquets",
    newprice: "₹549",
    originalprice: "₹1800",
    discount: "75",
    eta: "Today",
    rating: "4.5",
    number: "2.6K",
    margin: "mr-4",
    padding: "py-1",
    width: "w-24 -xl:w-22 -sm:w-20",
  },
  {
    title: "Love for Pastel Carnation Bouquets",
    newprice: "₹549",
    originalprice: "₹1800",
    discount: "75",
    eta: "Today",
    rating: "4.5",
    number: "2.6K",
    margin: "mr-4",
    padding: "py-1",
    width: "w-24 -xl:w-22 -sm:w-20",
  },
  {
    title: "Love for Pastel Carnation Bouquets",
    newprice: "₹549",
    originalprice: "₹1800",
    discount: "75",
    eta: "Today",
    rating: "4.5",
    number: "2.6K",
    margin: "mr-4",
    padding: "py-1",
    width: "w-24 -xl:w-22 -sm:w-20",
  },
  {
    title: "Love for Pastel Carnation Bouquets",
    newprice: "₹549",
    originalprice: "₹1800",
    discount: "75",
    rating: "4.5",
    number: "2.6K",
    eta: "Today",
    padding: "py-1",
    width: "w-24 -xl:w-22 -sm:w-20",
  },
];

const options = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  arrows: false,
  autoPlay: false,
  breakpoints: {
    360: {
      pagination: false,
      autoPlay: true,
    },
  },
};

function Whatothersviewing() {
  return (
    <section className="w-full flex -sm:px-5 flex-col justify-center px-24 -xl:px-8 -sm:overflow-hidden">
      <div className="text-left">
        <Textheading heading="What others are viewing" />
      </div>
      <div className="w-full -xl:overflow-x-scroll -sm:overflow-x-scroll">
        <Productcards cardData={likeData} options={options} list={images} />
      </div>
    </section>
  );
}

export default Whatothersviewing;
