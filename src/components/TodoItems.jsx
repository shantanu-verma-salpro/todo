import React from "react";

const TodoItems = ({ note }) => {
  return (
    <ul>
      {note.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
};

const MemoizedTodoItems = React.memo(TodoItems);
export default MemoizedTodoItems;
