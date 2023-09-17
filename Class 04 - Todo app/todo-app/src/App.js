import "./App.scss";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="container">
      <div className="container__todos">
        <h1>Todo App:</h1>
        {/* We will import component here */}
        <Todos />
      </div>
    </div>
  );
}

export default App;
