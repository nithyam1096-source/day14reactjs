import { useState } from "react";

export const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Todo List</h3>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};