import React, { Component } from "react";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    console.log("Our ShoppingCart props: ", props);
    console.log("Welcoming message", props.welcomeMessage);
    // console.log("From constructor");
  }

  render() {
    // console.log("From render");

    return (
      <div>
        <div>{this.props.welcomeMessage} from class component</div>
        <ul>
          {this.props.productsList.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>
        <h3>
          Result of the sum of the number {this.props.firstNumber} and{" "}
          {this.props.secondNumber} is:{" "}
          {this.props.addTwoNumbers(
            this.props.firstNumber,
            this.props.secondNumber
          )}{" "}
        </h3>
      </div>
    );
  }
}

export default ShoppingCart;
