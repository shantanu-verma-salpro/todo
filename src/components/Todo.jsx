import React, { useState, useCallback } from "react";
import TodoItems from '../components/TodoItems';
import AddTodo from '../components/AddTodo'
const Todo = () => {
  const [todo, setTodo] = useState(["hello pom", "hi tarbuj"]);
  const handleAddTodo = useCallback(
    (task) => {
      setTodo((prevTodo) => [...prevTodo, "pom is " + task]);
    },
    [setTodo]
  );
  return (
    <>
      <TodoItems note={todo} />
      <AddTodo addTodo={handleAddTodo} />
    </>
  );
};

const MemoizedTodo = React.memo(Todo);
export default MemoizedTodo;
