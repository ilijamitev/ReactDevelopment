import React from "react";

const defaultValue = {
  products: [],
  selectProductsByCategory: (category) => [],
};

export const createdContext = React.createContext(defaultValue);
