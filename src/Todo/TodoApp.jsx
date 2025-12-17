import { useState } from "react";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const add = () => setTodos([...todos, { text: task, done: false }]);
  const toggle = (i) =>
    setTodos(todos.map((t, idx) => idx === i ? { ...t, done: !t.done } : t));
  const del = (i) => window.confirm("Delete?") &&
    setTodos(todos.filter((_, idx) => idx !== i));

  return (
    <>
      <h2>Todo</h2>
      <input onChange={(e) => setTask(e.target.value)} />
      <button onClick={add}>Add</button>
      {todos.map((t, i) => (
        <div key={i}>
          <span style={{ textDecoration: t.done ? "line-through" : "" }}>
            {t.text}
          </span>
          <button onClick={() => toggle(i)}>✔</button>
          <button onClick={() => del(i)}>❌</button>
        </div>
      ))}
    </>
  );
};