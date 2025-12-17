import { useState } from "react";

export const SubmitForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};