import React, { useRef ,useCallback} from "react";

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
      <input type="text" ref={taskRef} />
      <button onClick={submitTask}>Add</button>
    </>
  );
};

const MemoizedAddTodo = React.memo(AddTodo);
export default MemoizedAddTodo;
