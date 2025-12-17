import { useState } from "react";

export const CheckboxInput = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <p>{checked ? "True" : "False"}</p>
    </div>
  );
};