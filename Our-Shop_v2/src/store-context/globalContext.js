import React, { useEffect, useState } from "react";
import { createdContext } from "./context-store";

export const GlobalContextState = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    setProducts(products);
  };

  const selectProductsByCategory = (category) => {
    const filteredProductsByCategory = products.filter(
      (product) => product.category === category
    );

    return filteredProductsByCategory;
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <createdContext.Provider
      value={{
        products: products,
        selectProductsByCategory: selectProductsByCategory,
      }}
    >
      {props.children}
    </createdContext.Provider>
  );
};
