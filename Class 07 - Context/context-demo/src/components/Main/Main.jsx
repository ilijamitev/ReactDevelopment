import React from "react";
import { MoviesWrapper } from "../MoviesWrapper/MoviesWrapper";

export const Main = (props) => {
  console.log(props);
  const { children } = props;

  return (
    <>
      <h1>Hello from main</h1>
      {children}

      <MoviesWrapper />
    </>
  );
};
