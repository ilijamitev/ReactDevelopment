import "./Cart.scss";

export const Cart = (props) => {
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
      </div>
    </>
  );
};
