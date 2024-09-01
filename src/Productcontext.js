import { createContext, useState } from "react";
import productsData from "./api/products.json";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const clearFilters = () => {
    setFilteredProducts(products);
  };
  const [sortedProducts, setSortedProducts] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        clearFilters,
        sortedProducts,
        setSortedProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
