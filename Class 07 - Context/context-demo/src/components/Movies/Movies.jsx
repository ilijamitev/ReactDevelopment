import React, { useContext } from "react";
import storeContext from "../../store-context/storeContext";

export const Movies = () => {
  const context = useContext(storeContext);
  console.log("CONTEXT FINALLY", context);

  return (
    <>
      <h1>Finally we print the movies amigo</h1>
      {context.movies.map((movie) => (
        <h3 key={movie.id}>{movie.name}</h3>
      ))}
    </>
  );
};
