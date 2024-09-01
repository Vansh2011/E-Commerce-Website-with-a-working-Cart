import React from "react";
import Textheading from "../textheading/Textheading";
import Location from "./Location";
import { useDispatch, useSelector } from "react-redux";
import Cartproduct from "./Cartproduct";
import Datetime from "./Datetime";
import Proceed from "./Proceed";
import { removeFromCart, increaseProduct } from "../../redux/CartSlice";

function Cart({ cart, handleCartClose }) {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state?.cart?.list || []);
  console.log("Product Details:", productDetails);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const calcTotal = () => {
    let total = 0;

    for (let i = 0; i < productDetails.length; i++) {
      total +=
        productDetails[i].newPrice * productDetails[i].quantity +
        productDetails[i].shippingDetails.shippingPrice;
    }
    return total;
  };

  let totalPrice = calcTotal();

  const handleIncrease = (id) => {
    dispatch(increaseProduct(id));
  };

  return (
    <section
      className={`w-full h-full z-50 flex justify-end bg-black bg-opacity-50 fixed top-0 right-0 transition-all duration-500 ${
        cart ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`bg-white w-[25%] -xl:w-[35%] -lg:w-[46%] -md:w-full flex relative transition-transform duration-500 transform ${
          cart ? "" : "translate-x-full"
        }`}
      >
        <div
          className="text-white -md:text-black text-5xl cursor-pointer absolute -left-12 -md:-left-0 -md:right-[-22rem] -md:-top-[2px]"
          onClick={handleCartClose}
        >
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div className="w-full flex flex-col bg-white">
          <Textheading heading="Cart" margin="my-2 mx-4" />
          <hr />
          <div className="flex flex-col h-[80%] overflow-y-auto items-center gap-2 p-4">
            {productDetails.map((item, index) => (
              <div
                key={index}
                className="flex flex-col pb-4 justify-center w-full border border-solid rounded-xl border-zinc-200"
              >
                <Location location={item?.deliveryLocation} />
                <div className="px-4">
                  <Cartproduct
                    id={index}
                    handleDelete={handleDelete}
                    image={item?.productImage}
                    name={item?.productName}
                    newPrice={item?.newPrice}
                    ogPrice={item?.originalPrice}
                    discount={item?.discount}
                    quantity={item?.quantity}
                    handleIncrease={handleIncrease}
                  />
                  <Datetime
                    dateSlot={
                      item?.shippingDetails?.deliveryDate?.fullDeliveryDate
                    }
                    timeSlot={item?.shippingDetails?.deliveryTimeSlot}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <Proceed total={totalPrice} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
