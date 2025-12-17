import { useEffect, useRef } from "react";

export const FocusForm = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Auto Focus" />;
};
