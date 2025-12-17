import { useState } from "react";

export const BasicInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Value: {value}</p>
    </div>
  );
};
