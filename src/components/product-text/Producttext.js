import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Photodisplay from "../photo-wheel/photo-display";
import Prodheading from "../product-heading/Prodheading";
import Finalprice from "../product-price/Finalprice";
import Review from "../review/Review";
import Combos from "../Combos/Combos";
import Form from "../form/Form";
import Timeleft from "../time-left/Timeleft";
import Btnrender from "../button/Btnrender";
import Offerrender from "../offers/Offerrender";
import Aboutaccordion from "../accordion/Aboutaccordion";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/CartSlice";

function Producttext({
  heading,
  newprice,
  originalprice,
  discount,
  rating,
  number,
}) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState("");
  const [message, setMessage] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const productDetails = useSelector(
    (state) => state.products.originalProducts
  );

  const handleAddToCart = () => {
    const product = productDetails.find(
      (product) => String(product.productId) === id
    );

    if (deliveryLocation.length > 0 || selectedDate.length > 0) {
      const productCopy = {
        ...product,
        shippingDetails: {
          ...product.shippingDetails,
          deliveryDate: {
            ...product.shippingDetails.deliveryDate,
          },
        },
      };

      productCopy.deliveryLocation = deliveryLocation;
      productCopy.shippingDetails.deliveryDate.fullDeliveryDate = selectedDate;

      dispatch(addToCart(productCopy));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="flex flex-col justify-center m-10 -lg:m-4 -sm:m-0">
      <div className="flex -md:flex-col -md:items-center -sm:flex-col justify-center relative">
        <div className=" flex justify-center w-3/5 -sm:w-full max-h-96 -md:max-h-none -lg:max-h-72 mr-10 -lg:mr-4 -md:mr-0 sticky top-32 -xl:top-20 -lg:w-[50%] -md:w-[90%] -md:static -sm:static mt-16 -xl:mt-8 -lg:mt-0 mb-11 -xl:mb-4 -lg:mb-0 -sm:mb-4 -sm:justify-center">
          <Photodisplay />
        </div>
        <div className="w-3/5 flex flex-col justify-center items-center overscroll-auto -lg:w-[50%] -md:w-[90%] -sm:w-80">
          <div className="-lg:w-full -sm:w-[22.5rem] flex flex-col justify-center -sm:px-5">
            <div className="-sm:ml-5">
              <Prodheading heading={heading} fontSize="text-4xl -md:text-2xl" />
              <Finalprice
                newprice={newprice}
                originalprice={originalprice}
                discount={discount}
                fontSize="text-2xl -md:text-3xl"
                fontSizeNp="text-2xl -md:text-3xl"
                fontSizeDiscount="text-2xl -md:hidden"
              />
            </div>
            <div className="invisible w-full -md:visible  -sm:visible -sm:w-[22.5rem] border-3 border-solid border-zinc-100"></div>
            <div className="-md:absolute -md:top-[20.5rem] -md:left-8 -sm:absolute -sm:top-[21rem] -sm:left-8">
              <Review
                rating={rating}
                number={number}
                review={true}
                padding="py-2 -md:py-1"
                width="w-36 -md:w-20 -sm:w-20"
              />
            </div>
            <Combos />
            <div className="invisible w-full -md:visible  -sm:visible -sm:w-[22.5rem] border-3 border-solid border-zinc-100"></div>
            <Form
              setSelectedDate={setSelectedDate}
              setMessage={setMessage}
              setDeliveryLocation={setDeliveryLocation}
            />
            <Timeleft />
            <Btnrender handleAddToCart={handleAddToCart} />
            <div className="invisible -sm:visible -sm:w-[22.5rem] -sm:border-4 -sm:border-solid -sm:border-zinc-100 -sm:mt-4"></div>
            <Offerrender />
            <div className="invisible -sm:visible -sm:w-[22.5rem] -sm:border-4 -sm:border-solid -sm:border-zinc-100 -sm:mt-4"></div>
            <Aboutaccordion />
            <div className="invisible -sm:visible -sm:w-[22.5rem] -sm:border-4 -sm:border-solid -sm:border-zinc-100 -sm:mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producttext;
