import React from "react";

const defaultValue = {
  products: [],
  cart: [],
  selectProductsByCategory: (category) => [],
  selectProductById: (productId) => {},
  handleAddToCart: (product) => {},
  handleRemoveFromCart: (productId) => {},
  clearCart: () => {},
};

export const createdContext = React.createContext(defaultValue);
