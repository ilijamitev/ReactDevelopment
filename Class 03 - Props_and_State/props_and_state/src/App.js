import "./App.css";
import Counter from "./components/counter/Counter";
import Movies from "./components/movies/Movies";
import Products from "./components/products/Products";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import ShoppingList from "./components/shopping-list/ShoppingList";

function App() {
  const addTwoNumbers = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
  };

  const products = [
    { productName: "Milk", id: 1 },
    { productName: "Oil", id: 2 },
    { productName: "Bread", id: 3 },
  ];

  return (
    <div className="App">
      {/* Uncomment this section for PROPS DEMO CODE =) */}

      {/* <ShoppingCart
        welcomeMessage="Hello world"
        productsList={["Banana", "Nescaffe"]}
        addTwoNumbers={addTwoNumbers}
        firstNumber={5}
        secondNumber={10}
      />
      <ShoppingList isMarketOpen={true} marketProducts={products} /> */}

      {/* Demo code for state =) */}

      <Counter />
      <hr />
      <Movies />

      <hr />
      <br />
      <h1>Functional component state menagement {":)"}</h1>

      <Products />
    </div>
  );
}

export default App;
