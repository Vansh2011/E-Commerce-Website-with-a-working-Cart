import React from "react";
import Productcards from "../product-card/Productcards";
import Textheading from "../textheading/Textheading";

const images = [
  "https://www.fnp.com/images/pr/l/v20230918213353/personalised-cool-yellow-led-cushion_1.jpg",
  "https://www.fnp.com/images/pr/l/v200/divine-ram-darbar_1.jpg",
  "https://www.fnp.com/images/pr/l/v200/premium-crystal-whiskey-glass-set_1.jpg",
];

const reviewData = [
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
    width: "w-24 -lg:w-21 -sm:w-20",
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
    width: "w-24 -lg:w-21 -sm:w-20",
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
    width: "w-24 -lg:w-21 -sm:w-20",
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
    width: "w-24 -lg:w-21 -sm:w-20",
  },
];

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

function Recentlyreviewed({ padding, style }) {
  return (
    <section
      className={`w-full flex  flex-col justify-center ${
        padding ? padding : ""
      }`}
    >
      <div className="text-left">
        <Textheading heading="Recently Viewed By You" />
      </div>
      <div className="w-full overflow-x-auto -sm:overflow-x-scroll pb-4 -xl:pb-0">
        <Productcards cardData={reviewData} options={options} list={images} />
      </div>
    </section>
  );
}

export default Recentlyreviewed;
