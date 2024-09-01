import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Testimonialcard from "../Testimonial/Testimonialcard";

const Slider = React.forwardRef(
  (
    {
      options,
      list,
      isTestimonial = false,
      borderRadius,
      width,
      link,
      ...restParams
    },
    ref
  ) => {
    const splideRef = useRef(null);

    useEffect(() => {
      if (ref) {
        ref.current = splideRef.current.splide;
      }
    }, [ref]);

    return (
      <Splide options={options} ref={splideRef} aria-label="My Favorite Images">
        {list?.map((items, index) => (
          <SplideSlide key={index}>
            {isTestimonial ? (
              <Testimonialcard
                initials={items.initials}
                number={items.number}
                fname={items.fname}
                ago={items.ago}
                comment={items.comment}
                occassion={items.occassion}
                state={items.state}
              />
            ) : (
              <div>
                <img
                  src={items}
                  alt="Alternate Text"
                  className={`${borderRadius ? borderRadius : ""} ${
                    width ? width : ""
                  }`}
                />
              </div>
            )}
          </SplideSlide>
        ))}
      </Splide>
    );
  }
);

export default Slider;
