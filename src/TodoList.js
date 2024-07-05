import React from "react";
import LineItems from "./LineItems";

const TodoList = ({ newTodo }) => {
  return (
    <ul>
      {newTodo.map((task) => (
        <LineItems key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
