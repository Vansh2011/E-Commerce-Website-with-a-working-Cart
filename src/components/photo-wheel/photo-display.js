import React, { useRef, useEffect } from "react";
import Slider from "../splide-slide/Slider";
import "./photdisplay.css";

const imgPaths = [
  "https://i1.fnp.com/images/pr/l/v20240118181100/premium-crystal-whiskey-glass-set_1.jpg",
  "https://i1.fnp.com/images/pr/l/v20240209101758/mystical-unicorn-personalized-night-lamp_1.jpg",
  "https://i1.fnp.com/images/pr/l/v20240124125233/roses-combo-harmony_1.jpg",
  "https://i1.fnp.com/images/pr/l/v20230731181922/indigo-hued-flower-tabletop_1.jpg",
  "https://i1.fnp.com/images/pr/l/v20230731181922/indigo-hued-flower-tabletop_1.jpg",
  "https://i1.fnp.com/images/pr/l/v20230731181922/indigo-hued-flower-tabletop_1.jpg",
];

const optionsThumbnails = {
  type: "slide",
  perPage: 4,
  perMove: 1,
  arrows: true,
  autoPlay: false,
  pagination: false,
  gap: "1px",
  direction: "ttb",
  width: "100%",
  height: "18rem",
  isNavigation: true,
  breakpoints: {
    1024: {
      height: "12rem",
    },
  },
};

const optionsMain = {
  type: "fade",
  perPage: 1,
  perMove: 1,
  arrows: false,
  autoPlay: false,
  pagination: false,
  width: "100%",
  breakpoints: {
    360: {
      pagination: true,
      drag: true,
    },
    420: {
      pagination: true,
      drag: true,
    },
  },
};

function Photodisplay() {
  const mainCarouselRef = useRef(null);
  const thumbnailCarouselRef = useRef(null);

  useEffect(() => {
    if (mainCarouselRef.current && thumbnailCarouselRef.current) {
      mainCarouselRef.current.sync(thumbnailCarouselRef.current);
    }
  }, []);

  return (
    <div className="flex justify-center gap-8 items-center px-12 -xl:px-0 -sm:p-0">
      <div className="thumbnail-carousel -xl:mr-4 -md:hidden -sm:hidden">
        <Slider
          ref={thumbnailCarouselRef}
          options={optionsThumbnails}
          list={imgPaths}
          borderRadius="rounded-xl"
          width="w-[32rem] -xl:w-[47rem] -lg:w-[62rem]"
        />
      </div>
      <div className="main-carousel mb-4">
        <Slider
          ref={mainCarouselRef}
          options={optionsMain}
          list={imgPaths}
          borderRadius="rounded-2xl"
          width="w-11/12 -xl:w-[56rem] -sm:w-80"
        />
      </div>
    </div>
  );
}

export default Photodisplay;
