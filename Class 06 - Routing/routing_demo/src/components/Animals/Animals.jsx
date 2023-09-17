import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

export const Animals = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Animals in the ZOO</h1>

      {/* A lot more code/jsx here */}
      <h3
        onClick={() => navigate("wild-animals")}
        style={{ color: "blue", cursor: "pointer" }}
      >
        Wild Animals
      </h3>
      <h3
        onClick={() => navigate("home-animals")}
        style={{ color: "blue", cursor: "pointer" }}
      >
        Home Animals
      </h3>

      <Outlet />
    </div>
  );
};

export const WildAnimals = () => {
  return <h1>Wild Animals</h1>;
};

export const HomeAnimals = () => {
  return <h1>Home Animals</h1>;
};
