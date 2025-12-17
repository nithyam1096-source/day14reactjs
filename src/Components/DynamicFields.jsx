import { useState } from "react";

export const DynamicFields = () => {
  const [fields, setFields] = useState([""]);

  return (
    <div>
      {fields.map((_, i) => (
        <input key={i} placeholder={`Field ${i + 1}`} />
      ))}
      <button onClick={() => setFields([...fields, ""])}>Add Field</button>
    </div>
  );
};