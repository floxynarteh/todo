import { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import Header from "./Header";

function App() {
  const [newTodo, setNewTodo] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );
  const [newTask, setNewTask] = useState("");

  const setAndSaveItems = (newItems) => {
    setNewTodo(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addTask = (task) => {
    const id = newTodo.length ? newTodo[newTodo.length - 1].id + 1 : 1;
    const myNewTodo = { id, task };
    const listTodos = [...newTodo, myNewTodo];
    console.log(listTodos);
    // setNewTodo(listTodos);
    setAndSaveItems(listTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="App">
      <Header title=" Add Todo " />
      <AddTodo
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <Todo newTodo={newTodo} />
    </div>
  );
}

export default App;
