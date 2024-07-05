import React from "react";

const AddTodo = ({ newTask, setNewTask, handleSubmit }) => {
  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addTodo" id="list"></label>
        <input
          autoFocus
          name="add"
          type="text"
          id="addTodo"
          placeholder="New Todo"
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
