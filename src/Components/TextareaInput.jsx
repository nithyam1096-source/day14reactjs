import { useState } from "react";

export const TextareaInput = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
};