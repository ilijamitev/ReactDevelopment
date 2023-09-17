import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavBar, NavLinks } from "./style";

export const Header = () => {
  // IMPORTANT!! This is bad way/bad approach, a=href will always reload the site on redirect
  // return (
  //   <nav>
  //     <h1>Logo</h1>
  //     <ul>
  //       <a href="/">
  //         <li>Home</li>
  //       </a>
  //       <a href="/recipes">
  //         <li>Recipes</li>
  //       </a>
  //       <li>Add Recipe</li>
  //     </ul>
  //   </nav>
  // );

  // *** NavBar with using <Link/>
  // return (
  //   <NavBar>
  //     <h1>Logo</h1>
  //     <NavLinks>
  //       <Link to="/">
  //         <li>Home</li>
  //       </Link>
  //       <Link to="/recipes">
  //         <li>Recipes</li>
  //       </Link>
  //       <Link to="/add-recipe">
  //         <li>Add Recipe</li>
  //       </Link>
  //     </NavLinks>
  //   </NavBar>
  // );

  // *** Navbar using <NavLink/>
  return (
    <NavBar>
      <h1>Logo</h1>
      <NavLinks>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "magenta" : "grey",
          })}
          to="/"
          end
          //if we do not put end attribue '/' will match all routes :)
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          style={(props) => ({
            color: props.isActive ? "magenta" : "grey",
          })}
          to="/recipes"
        >
          <li>Recipes</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "magenta" : "grey",
          })}
          to="/add-recipe"
        >
          <li>Add Recipe</li>
        </NavLink>
      </NavLinks>
    </NavBar>
  );
};
