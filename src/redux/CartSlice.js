import { createSlice } from "@reduxjs/toolkit";
import CartsData from "../api/CartApi.json";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    list: CartsData,
  },
  reducers: {
    addToCart: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromCart: (state, action) => {
      if (state.list[action.payload].quantity > 1) {
        state.list[action.payload].quantity--;
      } else {
        state.list.splice(action.payload, 1);
      }
    },
    increaseProduct: (state, action) => {
      state.list[action.payload].quantity++;
    },
  },
});

export const { addToCart, removeFromCart, increaseProduct } = CartSlice.actions;
export default CartSlice.reducer;
