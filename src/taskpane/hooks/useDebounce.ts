import { useEffect, useRef, useState } from "react";

/** Debounces the value provided, creating a delay on changing the value return */
export const useDebounce = (value: string, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  // eslint-disable-next-line no-undef
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      // eslint-disable-next-line no-undef
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
};
