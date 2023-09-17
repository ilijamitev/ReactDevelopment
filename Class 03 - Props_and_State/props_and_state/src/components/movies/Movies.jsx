import React, { Component } from "react";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      movies: ["Harry Potter"],
    };
  }

  handleMovieName = (event) => {
    // console.log(event.target.value);
    // With event.target.value we get the value from the input below
    // so we can save it in the state =)

    this.setState({
      movieName: event.target.value,
    });
  };

  handleAddMovieNameInList = () => {
    this.setState({
      movies: [this.state.movieName, ...this.state.movies],

      // BAD PRACTICE! IT WON'T WORK !!!
      // movies: this.state.movies.push(this.state.movieName),
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleMovieName} />
        <br />
        <span>{this.state.movieName}</span>
        <br />
        <button onClick={this.handleAddMovieNameInList}>Add movie</button>
        <br />
        <ol>
          {this.state.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Movies;
