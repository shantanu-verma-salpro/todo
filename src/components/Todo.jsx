import React, { useState } from "react";
import TodoItems from "./TodoItems";
import AddTodo from "./AddTodo";

const Todo = () => {
  const [todoList, setTodoList] = useState(["hello", "hi"]);

  const addTodo = (task) => {
    setTodoList((prevTodoList) => [...prevTodoList, task]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoItems note={todoList} />
    </>
  );
};

export default Todo;
