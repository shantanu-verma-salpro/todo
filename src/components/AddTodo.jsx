import React, { useRef } from "react";

const AddTodo = ({ addTodo }) => {
  const taskRef = useRef(null);

  const submitTask = () => {
    const task = taskRef.current.value.trim();
    if (task !== "") {
      addTodo(task);
      taskRef.current.value = "";
    }
  };

  return (
    <>
      <label htmlFor="taskInput">New Task:</label>
      <input type="text" id="taskInput" ref={taskRef} />
      <button onClick={submitTask}>Add</button>
    </>
  );
};

export default AddTodo;
