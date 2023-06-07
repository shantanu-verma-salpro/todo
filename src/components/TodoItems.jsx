import React from "react";

const TodoItems = ({ note }) => {
  return (
    <div>
      <h2>Tasks:</h2>
      <ul>
        {note.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItems;
