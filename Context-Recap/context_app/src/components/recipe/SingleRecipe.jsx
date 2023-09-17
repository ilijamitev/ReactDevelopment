import React from "react";
import { useContext } from "react";
import { OurContext } from "../../store-context/storeContext";

export const SingleRecipe = () => {
  const context = useContext(OurContext);
  console.log("context", context);

  const recipeOfContext = context.recipe;

  return (
    <>
      <h1>Hello from single recipe</h1>
      <ol>
        <li>{recipeOfContext.recipeName}</li>
      </ol>
    </>
  );
};
