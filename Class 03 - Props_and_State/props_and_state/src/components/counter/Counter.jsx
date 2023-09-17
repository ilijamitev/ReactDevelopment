import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberToChange: -1,
    };

    // Solution two, if method is not declared with arrow function
    // we must bind it to the class
    this.decrementNumber = this.decrementNumber.bind(this);
    console.log("In Consturctor");
  }

  number = 0;

  incrementNumber = () => {
    this.number += 1;
    // console.log("Number: ", this.number);
    this.setState({
      numberToChange: (this.state.numberToChange += 1),
    });
    console.log("Number in state:", this.state.numberToChange);
  };

  decrementNumber() {
    // Syntax #1
    // this.setState({
    //   numberToChange: (this.state.numberToChange -= 1),
    // });

    // Syntax #2, so we can extract prevState
    // this.setState((prevState) => ({
    //   //prettier-ignore
    //   numberToChange: prevState.numberToChange === 0 ? this.state.numberToChange : (this.state.numberToChange -= 1),
    // }));

    this.setState((state) => ({
      numberToChange:
        state.numberToChange <= 0
          ? this.state.numberToChange
          : (this.state.numberToChange -= 1),
    }));
  }

  render() {
    console.log(
      "Number from state in render method",
      this.state.numberToChange
    );
    // console.log(this.number);
    return (
      <div>
        <h1>Our number: {this.state.numberToChange} </h1>
        <button onClick={this.incrementNumber}>Increment number</button>
        {/* <button onClick={() => this.incrementNumber()}>Increment number</button> */}
        <button onClick={this.decrementNumber}>Decrement number</button>

        {/* Solution one */}
        {/* <button onClick={() => this.decrementNumber()}>Decrement number</button> */}
      </div>
    );
  }
}

export default Counter;
