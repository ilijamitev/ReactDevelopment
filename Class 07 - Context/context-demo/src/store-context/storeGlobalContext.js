import React, { useState } from "react";
import StoreContext from "./storeContext";

export const StoreGlobalContextState = (props) => {
  const [movies, setMovies] = useState([
    { name: "Harry Potter", id: "1", raiting: 10 },
    { name: "The Mechanic", id: "2", raiting: 10 },
  ]);

  return (
    <StoreContext.Provider
      value={{
        movies: movies,
        isLoggedIn: true,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
