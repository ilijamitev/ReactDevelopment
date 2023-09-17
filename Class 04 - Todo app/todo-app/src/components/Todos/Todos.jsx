import React from "react";
import { useState } from "react";
import { TodosResult } from "../TodosResults/TodosResult";
import "./Todos.scss";

/**  CHALLANGE
  * What if the todo is not a string value, but is object
  *
  * Challenge: make todo to be as this format and keep the same
  * behaveur of the app as now :)
  * {
  *    name: "todoName",
  *    id: "something unique",
  *    status: boolean
  * }
  * MEGA CHALLENGE: make functionallity for FINISHING the todo,
  * which means, we have to set the todo's status to TRUE
  * and change the color to green =)
  */

const Todos = () => {
  const [todoModel, setTodoModel] = useState({
    name: null,
    id: 0,
    isFinished: false,
  });
  const [listOfTodos, setListOfTodos] = useState([]);


  function TodoItem(name) {
    this.id = todoModel.id + 1;
    this.name = name;
    this.isFinished = false;
  }

  console.log("\n============= HANDLE ADD TODO =============");
  console.log(todoModel);
  console.log(listOfTodos);

  const handleAddTodo = () => {
    const todoTitle = document.getElementById("todo-title").value;
    const newTodoItem = new TodoItem(todoTitle);
    setTodoModel(newTodoItem);
    setListOfTodos([...listOfTodos, newTodoItem]);
    document.getElementById("todo-title").value = "";
  };
  // https://bobbyhadz.com/blog/react-getelementbyid-equivalent
  const handleRemoveTodo = (todoId) => {
    const remainingTodos = listOfTodos.filter(
      todo => todo.id !== todoId
    );
    setListOfTodos(remainingTodos);
  };

  const handleFinishedTodo = (todoId) => {
    // const index = listOfTodos.findIndex(x => x.id === todoId)
    // listOfTodos[index].isFinished = true  //BAD
    let newList = listOfTodos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isFinished: true
        }
      }
      return todo;
    })
    setListOfTodos(newList);
  }

  return (
    <div className="todos">
      <input
        type="text"
        id="todo-title"
        className="todos__name"
        placeholder="Enter todo name here"
      />
      <div onClick={handleAddTodo}
        className="todos__button">
        Add todo
      </div>

      <TodosResult
        listOfTodos={listOfTodos}
        handleRemoveTodo={handleRemoveTodo}
        handleFinishedTodo={handleFinishedTodo}
      />
    </div>
  );
};

export default Todos;
