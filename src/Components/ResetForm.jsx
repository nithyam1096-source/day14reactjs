import { useState } from "react";

export const ResetForm = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setValue("")}>Reset</button>
    </div>
  );
};