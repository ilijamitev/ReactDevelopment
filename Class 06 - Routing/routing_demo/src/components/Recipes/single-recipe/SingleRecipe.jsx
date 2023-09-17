import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export const SingleRecipe = (props) => {
  const { recipes } = props;
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log("Use location example:", location);
  console.log("Recipe accessed from location:", location.state);

  console.log("Path params :)", params);
  console.log(recipes);
  const recipeId = params.id;
  // Find returns the value or undefined :)
  const recipeFoundWithFind = recipes.find(({ id }) => id === recipeId);
  console.log("with find:", recipeFoundWithFind);

  const recipeFoundWithFilter = recipes.filter(
    (recipe) => recipe.id === recipeId
  );
  console.log("With Filter: ", recipeFoundWithFilter);
  console.log(recipeFoundWithFilter[0]);

  // filter by id: 3
  // find by id : 3
  // [{id: 1} ,{id: 2} ,{id: 3} ,{id: 4} ,{id: 5}]

  useEffect(() => {
    if (!recipeFoundWithFind) {
      navigate("/recipe-not-found");
    }
  }, []);

  // if (recipeFoundWithFind === undefined) {
  //   console.log("HERE 1");

  //   return <h1>No recipe found</h1>;
  // }

  return (
    <>
      {recipeFoundWithFind && (
        <>
          <h1>Recipe found: {recipeFoundWithFind.name}</h1>
          <ul>
            {recipeFoundWithFind.ingedients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
