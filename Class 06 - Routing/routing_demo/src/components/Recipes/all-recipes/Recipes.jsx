import React from "react";
import { useNavigate } from "react-router-dom";

export const Recipes = ({ recipe }) => {
  console.log(recipe);
  const navigate = useNavigate();

  return (
    <>
      <h1>Hello from recipes route.</h1>
      <ul>
        <div>
          {/* #One way to navigate to path param route and sending the id as path param :) */}
          {/* {recipe.map(({ id, name }) => {
            return (
              <li key={id} onClick={() => navigate(`/recipe/${id}`)}>
                {name}
              </li>
            );
          })} */}

          {/* #Two */}
          {recipe.map((recipe) => {
            return (
              <li
                key={recipe.id}
                onClick={() =>
                  navigate(`/recipe/${recipe.id}`, { state: recipe })
                }
              >
                {recipe.name}
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};
