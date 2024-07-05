import React from "react";
import TodoList from "./TodoList";

const Todo = ({ newTodo }) => {
  return (
    <main>
      {newTodo.length ? (
        <TodoList newTodo={newTodo} />
      ) : (
        <p> Create new Todos</p>
      )}
    </main>
  );
};

export default Todo;
