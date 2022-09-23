import React from "react";
import { v4 as uuid } from "uuid";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = React.useState([]);

  const handleAdd = (text) => {
    if (text === "") {
      return;
    }
    const newTodo = {
      title: text,
      status: false,
      id: uuid()
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    console.log(todos);
  };
  const handleUpdate = (id) => {
    const updatedTodos = todos.map((elem) =>
      elem.id === id ? { ...elem, status: !elem.status } : elem
    );
    setTodos(updatedTodos);
  };
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((elem) => elem.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todoParentDiv">
      <h2>TODO MANAGER</h2>
      <TodoList
        todos={todos}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      <TodoInput handleAdd={handleAdd} />
    </div>
  );
};
export { Todo };
