import { useState } from "react";

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initial
  );

  const setStoredValue = (data) => {
    setValue(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  return [value, setStoredValue];
};