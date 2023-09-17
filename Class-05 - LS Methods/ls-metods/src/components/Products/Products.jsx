import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.scss";

export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    console.log("Component did mount");
    this.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.products.length !== this.state.products.length) {
      //   alert("PRODUCT LIST HAS CHANGED");
    }
  }

  fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const result = await response.json();
    console.log(result);

    this.setState({
      products: result,
    });
  };

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>Products</h1>
        <div className="container">
          {this.state.products.map((product) => (
            <SingleProduct
              key={product.id}
              product={product}
              handleAddToCart={this.props.handleAddToCart}
            />
          ))}
        </div>
      </div>
    );
  }
}
