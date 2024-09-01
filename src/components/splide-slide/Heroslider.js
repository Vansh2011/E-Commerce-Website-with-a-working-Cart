import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Homebutton from "../Homebutton/Homebutton";
import { Link } from "react-router-dom";

const Heroslider = React.forwardRef(
  (
    {
      options,
      list,
      style,
      isCard = false,
      isDesginerCard = false,
      isTestimonial = false,
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
            {isCard && (
              <div className="w-full flex flex-col items-center">
                <div
                  className={`text-white flex flex-col items-center ${items.styles} relative`}
                >
                  <div className="w-full flex flex-col items-center absolute bottom-0 p-2">
                    <div className="w-full text-white flex justify-between ">
                      <h2 className="text-xl -xl:text-lg -md:text-base font-bold">
                        {items.title}
                      </h2>
                      <h2 className="text-xl -xl:text-lg -md:text-base font-bold">
                        {items.prices}
                      </h2>
                    </div>
                    <p className="text-left -xl:text-sm -md:text-sm">
                      {items.description}{" "}
                    </p>
                  </div>
                </div>
                <Homebutton
                  title="Buy Now"
                  background="w-[15rem] bg-white border-2 border-solid border-lime-600"
                  iconColor="text-lime-600"
                  textColor="text-lime-600"
                  link="/product"
                  widthBtn="-sm:w-[65%]"
                />
              </div>
            )}
            {isDesginerCard && (
              <Link
                to="/product"
                className="w-full flex flex-col justify-center items-center"
              >
                <div
                  className={`text-black flex flex-col items-center ${items.styles}`}
                ></div>
                <div className="w-full -sm:w-[85%] flex flex-col px-6 -xl:px-4">
                  <h2 className="text-xl -md:text-lg text-left font-bold">
                    {items.title}
                  </h2>
                  <p className="text-left -md:text-xs">{items.description} </p>
                </div>
              </Link>
            )}
            {isTestimonial && (
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`w-[90%] p-8 flex flex-col justify-center ${
                    items.styles
                      ? items.styles
                      : "border-2 border-solid rounded-2xl border-lime-700"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    {/* img attach */}
                    <div className="flex flex-col text-left">
                      <p>{items.name}</p>
                      <p className="text-sm text-zinc-300">{items.from}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p>{items.description}</p>
                  </div>
                  <div className="text-left text-yellow-400">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            )}
          </SplideSlide>
        ))}
      </Splide>
    );
  }
);

export default Heroslider;
