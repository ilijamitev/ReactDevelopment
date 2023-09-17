import React from "react";

// "failed", 'in progress', "completed"
const ProccessInfo = (status) => {
  if (status === "failed") {
    return <h3 style={{ color: "red" }}>Process has failed</h3>;
  }
  if (status === "in progress") {
    return <h3 style={{ color: "orange" }}>Process is in progress</h3>;
  }
  if (status === "completed") {
    return <h3 style={{ color: "green" }}>Process is completed</h3>;
  }
};

const ShoppingList = (props) => {
  /**
   * const products = await fetch("our api")
   */
  console.log(props);
  /**
   * if props.isMarketOpen is false
   * we render an apologise message
   * otherwise we print props.marketProducts
   */
  return (
    <div>
      {/* 
            products.length > 0 && <div>render something</div>
        */}
      {/* Example 1 */}
      <h1>Hello from shopping list</h1>
      <h2>Conditional rendering</h2>

      {true ? <div> Yes it is true </div> : <div> No it is false </div>}
      <hr />

      {/* Example 2 */}
      {1 < 2 ? <div> Yes 1 is less then 2 </div> : <div> No it is not </div>}
      <hr />

      {/* Example 3 */}
      {/* {true ? <div></div> : <div></div>} */}

      {props.isMarketOpen ? (
        <>
          <h3>Yes market is open</h3>
          <ul>
            {props.marketProducts.map((product) => (
              <li key={product.id}>{product.productName}</li>
            ))}
          </ul>
        </>
      ) : (
        <h3>No market is not open</h3>
      )}

      {/* Example 4 */}
      {props.isMarketOpen && (
        <>
          <h3>Yes market is open</h3>
          <ul>
            {props.marketProducts.map((product) => (
              <li key={product.id}>{product.productName}</li>
            ))}
          </ul>
        </>
      )}
      <hr />
      {/* Example 5 */}
      {ProccessInfo("in progress")}
    </div>
  );
};

export default ShoppingList;
