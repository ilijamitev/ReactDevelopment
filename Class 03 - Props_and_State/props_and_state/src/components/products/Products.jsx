import React from "react";
import { useState } from "react";

const Products = () => {
  // useState = Is a react hook =)
  // there are many more that do different job :)
  const [productName, setProductName] = useState("Pineapple");

  const handleProductName = (event) => {
    setProductName(event.target.value);
  };

  return (
    <div>
      <h2>Products Component</h2>
      <input
        type="text"
        // Syntax #1
        // onChange={(event) => setProductName(event.target.value)}
        // Syntax #2
        // onChange={handleProductName}

        // Syntax #3
        // DANGER!!! ***
        // Wont work!!!
        // onChange={handleProductName()}
        // onChange={handleProductName(event)}

        // Syntax #4
        onChange={(event) => handleProductName(event)}
      />
      <h4>{productName}</h4>
    </div>
  );
};

export default Products;
