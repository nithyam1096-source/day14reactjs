import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [match, setMatch] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatch(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return match;
};

export default useMediaQuery;