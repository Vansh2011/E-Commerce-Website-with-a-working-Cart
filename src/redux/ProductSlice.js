import { createSlice } from "@reduxjs/toolkit";
import productsData from "../api/products.json";
import FilterList from "../api/FilterList.json";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("selectedFilters");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state from localStorage", e);
    return [];
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("selectedFilters", serializedState);
  } catch (e) {
    console.error("Could not save state to localStorage", e);
  }
};

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    originalProducts: [...productsData],
    products: [...productsData],
    filters: [...FilterList],
    selectedFilters: loadStateFromLocalStorage(),
    filteredProducts: [...productsData], // Initialize with all products
  },
  reducers: {
    addFilters(state, action) {
      const updatedFilters = [...state.selectedFilters, action.payload];
      saveStateToLocalStorage(updatedFilters);
      state.selectedFilters = updatedFilters;

      // Apply filters to the original products
      state.filteredProducts = state.originalProducts.filter((product) =>
        updatedFilters.every((filter) => {
          const [key, value] = filter.split(":");
          return product[key] === value;
        })
      );
    },
    removeFilters(state) {
      localStorage.removeItem("selectedFilters");
      state.selectedFilters = [];
      state.filteredProducts = [...state.originalProducts];
    },
  },
});

export default ProductSlice.reducer;
export const { addFilters, removeFilters } = ProductSlice.actions;
