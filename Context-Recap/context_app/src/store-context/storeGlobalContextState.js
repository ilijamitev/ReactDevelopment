import React, { useState } from "react";
import { OurContext } from "./storeContext";

export const StoreGlobalContextState = (props) => {
  const [recipe, setRecipe] = useState({
    id: 1,
    recipeName: "Pancakes",
    ingrediants: ["A", "B", "C"],
  });

  return (
    <OurContext.Provider
      value={{
        recipe: recipe,
        firstName: "George",
      }}
    >
      {props.children}
    </OurContext.Provider>
  );
};
