import React from "react";
import "./App.css";
import { Cart } from "./components/Cart/Cart";
import LifeCycleComponent from "./components/LifeCycle";
import Products from "./components/Products/Products";
import { Users } from "./components/Users/Users";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      basket: ["Milka", "Bananas", "Bread"],
      cart: [],
    };
  }

  handleAddNewProduct = (newProduct) => {
    this.setState({
      basket: [...this.state.basket, newProduct],
    });
  };

  handleAddToCart = (product) => {
    this.setState({
      cart: [...this.state.cart, product],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart.length !== this.state.cart.length) {
      console.log("A product is added in cart");
    }
  }

  render() {
    return (
      <div className="App">
        {/* #1 Lifecycle methods basic demo code */}
        {/* <LifeCycleComponent
          products={this.state.basket}
          handleAddNewProduct={this.handleAddNewProduct}
        /> */}

        {/* #2 PRACTICAL DEMO EXAMPLE OF USING LS METHODS IN CLASS COMPONENTS*/}
        {/* <Products handleAddToCart={this.handleAddToCart} />
        <br />
        <hr />

        <h1>CART LIST</h1>
        {this.state.cart.map((productInCart) => (
          <Cart key={productInCart.id} product={productInCart} />
        ))} */}

        {/* #3 LS methods in functional components */}
        <Users />
      </div>
    );
  }
}

export default App;
