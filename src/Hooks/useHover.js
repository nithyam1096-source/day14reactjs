import { useRef, useState, useEffect } from "react";

const useHover = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    node.addEventListener("mouseenter", enter);
    node.addEventListener("mouseleave", leave);

    return () => {
      node.removeEventListener("mouseenter", enter);
      node.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
};

export default useHover;