import { useState } from "react";

export const SelectInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <select onChange={(e) => setValue(e.target.value)}>
        <option value="">Select</option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
      </select>
      <p>Selected: {value}</p>
    </div>
  );
};