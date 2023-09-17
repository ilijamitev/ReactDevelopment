import React from "react";

// Again Functional Component
export const MovieList = () => {
  const movies = [
    { name: "Harry Potter", id: 1 },
    { name: "The Forest Gump", id: 2 },
    { name: "The Joker", id: 3 },
  ];

  return (
    <div>
      <h1>Hello from MovieList Component</h1>
      <ul>
        {/* {movies.map((movie) => {
          console.log(movie);

          return <li key={movie.id}>{movie.name}</li>;
        })} */}

        {/* Same as above, but we decostructed 2 properties, name and id :)  */}
        {movies.map(({ name, id }) => {
          console.log({ name, id });

          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
