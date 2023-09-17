import React, { useState } from "react";
import "./TodosResult.scss";

export const TodosResult = (props) => {
  // const [colorFlag, changeColor] = useState(false);
  const todos = props.listOfTodos;
  const handleRemoveTodo = props.handleRemoveTodo;
  const handleFinishedTodo = props.handleFinishedTodo;

  //BLOCK__ELEMENT--MODIFIER
  return (
    <div className="results">
      {/* {todos.length > 0 && <h2>Tasks:</h2>} */}
      {/* Same as above :) but more cool ;) */}
      {!!todos.length && <h2>Tasks:</h2>}

      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="results__todo">
            <h4 style={todo.isFinished ? { color: "green" } : { color: "black" }}>{todo.id}. {todo.name}</h4>
            <div className="results__todo--options">
              <div onClick={() => handleRemoveTodo(todo.id)}>Delete</div>
              <div onClick={() => {
                handleFinishedTodo(todo.id)
                // changeColor(true)
              }}>Finished</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// {React.Children.map(todos, (child) => (
//     <div>{child}</div>
//   ))}
