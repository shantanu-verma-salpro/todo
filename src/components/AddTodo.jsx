import React, { useRef, useCallback } from "react";

const AddTodo = ({ addTodo }) => {
  const taskRef = useRef(null);

  const submitTask = useCallback(() => {
    const task = taskRef.current.value.trim();
    if (task !== "") {
      addTodo(task);
      taskRef.current.value = "";
    }
  }, [addTodo]);

  return (
    <>
      <label htmlFor="taskInput">New Task:</label>
      <input type="text" id="taskInput" ref={taskRef} />
      <button onClick={submitTask}>Add</button>
    </>
  );
};

export default AddTodo;
