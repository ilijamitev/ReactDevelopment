import React from "react";
import { MovieList } from "./components/MoviesList";
import "./App.css";

// Functional Component
function App() {
  // JSX

  const welcomingMessage = "How do we like JSX ? :)";

  console.log(welcomingMessage);

  const printMessage = (message) => {
    return message;
  };

  const movies = ["Batman", "Forest Gump", "Shawshank Redemtion", "Inception"];

  // Styling as variable
  // CSS IN JS
  const colorRed = {
    color: "red",
  };

  const forestGumpMovieObject = {
    name: "Forest Gump",
    raiting: "5/5",
  };

  return (
    // We cannot declare & initialize variables inside return
    /**
     * We should only have one parent element :)
     * <> jsx code here </> is same as <React.Fragment> //jsx code here </React.Fragment>
     */
    <>
      <div className="App">
        <h1>Hello folks, we are learning React </h1>
        <h2>{welcomingMessage}</h2>
        <p>Todays date is: {new Date().toLocaleDateString()}</p>
        <br />
        <h3>{printMessage("Today we are learning basics of React :)")}</h3>
        <h3 style={{ color: "pink" }}>
          {printMessage("How cool is JSX, isn't it? :D ")}
        </h3>
        <hr />

        <h3>
          Our favourite movies list is:
          <ul style={{ listStyle: "none" }}>
            {/* Everytime we show something/render to the screen with 
          high order function map, each child should have unique KEY property */}
            {movies.map((movie, index) => (
              <li style={colorRed} key={index}>
                {movie}
              </li>
            ))}
          </ul>
        </h3>
        <hr />
        <h3>{forestGumpMovieObject.name}</h3>
        <hr />
      </div>
      <div>
        <MovieList />
      </div>
    </>
  );
}

export default App;
