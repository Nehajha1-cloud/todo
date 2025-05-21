import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTasks.trim()) {
      const newTask = {
        id: Date.now(),
        text: newTasks,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTasks("");
    }
  };

  const toogletask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    console.log("Task toggled:");
    updatedTasks.forEach((task) => {
      console.log(`- ${task.text}: completed = ${task.completed}`);
    });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo">
      <h2>To-do List</h2>
<form onSubmit={addTask}>
  <label htmlFor="taskInput" style={{ display: "none" }}>
    Task
  </label>
  <input
    id="taskInput"
    type="text"
    value={newTasks}
    onChange={(e) => setNewTasks(e.target.value)}
    placeholder="Enter a task"
  />
  <button type="submit">Add</button>
</form>


      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toogletask(task.id)}
              className={task.completed ? "completed" : ""}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
