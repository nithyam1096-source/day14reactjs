import { useEffect, useState } from "react";

export const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <>
      <h2>Users</h2>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setUsers([...users, { name }])}>Add</button>

      {users.map((u, i) => (
        <div key={i}>
          {u.name}
          <button onClick={() => window.confirm("Delete?") &&
            setUsers(users.filter((_, idx) => idx !== i))}></button>
        </div>
      ))}
    </>
  );
};