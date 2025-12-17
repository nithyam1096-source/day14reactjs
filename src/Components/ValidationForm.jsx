import { useState } from "react";

export const ValidationForm = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) setError("Input cannot be empty");
    else alert(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};