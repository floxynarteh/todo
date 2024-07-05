import React from "react";

const LineItems = ({ task }) => {
  return (
    <li className="newTodos">
      <label>{task.task}</label>
    </li>
  );
};

export default LineItems;
