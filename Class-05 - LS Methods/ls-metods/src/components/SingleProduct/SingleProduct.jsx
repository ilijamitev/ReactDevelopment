import React from "react";
import "./SingleProduct.scss";

const SingleProduct = (props) => {
  return (
    <>
      <div className="product">
        <h3>Product name: {props.product.title}</h3>
        <h3>Product description: {props.product.description}</h3>
        <img
          className="product__image"
          src={props.product.image}
          alt={props.product.title}
        />
        <button onClick={() => props.handleAddToCart(props.product)}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default SingleProduct;
