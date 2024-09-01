import React from "react";
import Slider from "../splide-slide/Slider";
import image_path from "../../images/circle-carousel.png";

const categories = [
  { id: 1, name: "Category 1", image: image_path },
  { id: 2, name: "Category 1", image: image_path },
  { id: 3, name: "Category 1", image: image_path },
  { id: 4, name: "Category 1", image: image_path },
];

function Circleslider() {
  return (
    <div className="flex">
      {categories.map((item, index) => (
        <div key={index} className="flex flex-col">
          <Slider image={item.image} />
        </div>
      ))}
    </div>
  );
}

export default Circleslider;
