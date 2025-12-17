import { useState } from "react";

export const RadioGroup = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="radio"
        name="gender"
        value="Male"
        onChange={(e) => setValue(e.target.value)}
      /> Male

      <input
        type="radio"
        name="gender"
        value="Female"
        onChange={(e) => setValue(e.target.value)}
      /> Female

      <p>Selected: {value}</p>
    </div>
  );
};
