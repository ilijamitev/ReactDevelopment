import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Recipes } from "./components/Recipes/all-recipes/Recipes";
import { Header } from "./components/Header/Header";
import { AddRecipe } from "./components/Recipes/add-recipe/AddRecipe";
import { NotFound } from "./components/NotFound/NotFound";
import { useState } from "react";
import { SingleRecipe } from "./components/Recipes/single-recipe/SingleRecipe";
import {
  Animals,
  HomeAnimals,
  WildAnimals,
} from "./components/Animals/Animals";

const allRecipes = [
  {
    id: "1",
    name: "Lasange",
    ingedients: [
      "Ingrediant Lasange A",
      "Ingrediant Lasange B",
      "Ingrediant Lasange C",
    ],
  },
  {
    id: "2",
    name: "Soup",
    ingedients: ["Ingrediant Soup A", "Ingrediant Soup B", "Ingrediant Soup C"],
  },
  {
    id: "3",
    name: "Mashed Potatoes",
    ingedients: [
      "Ingrediant Mashed Potatoes A",
      "Ingrediant Mashed Potatoes B",
      "Ingrediant Mashed Potatoes C",
    ],
  },
];

function App() {
  const [recipe, setRecipes] = useState(allRecipes);

  return (
    <div className="App">
      {/* this h1 will be displayed all over the app no matter what the route is :) */}
      {/* <h1 style={{ color: "blue" }}>Shared test message at top</h1> */}
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes recipe={recipe} />} />
          <Route path="/add-recipe" element={<AddRecipe />} />

          {/* Path parameters */}
          <Route
            path="/recipe/:id"
            element={<SingleRecipe recipes={recipe} />}
          />

          {/* localhost:3000/something_else */}
          <Route path="*" element={<NotFound />} />
          <Route path="/recipe-not-found" element={<NotFound />} />

          {/* Nested routes */}
          <Route path="/animals" element={<Animals />}>
            <Route path="wild-animals" element={<WildAnimals />} />
            <Route path="home-animals" element={<HomeAnimals />} />
          </Route>
        </Routes>

        {/* this h1 will be displayed all over the app no matter what the route is :) */}
        {/* <h1 style={{ color: "pink" }}>Shared test message at bottom</h1> */}
      </BrowserRouter>
    </div>
  );
}

// localhost:3000 => <ComponentA />
// localhost:3000/recipes => <ComponentB />
// localhost:3000/add-recipe => <ComponentC />

export default App;
