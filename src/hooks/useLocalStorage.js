import { useCallback, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const readValue = useCallback(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  }, [key, initialValue]);

  const [value, setValue] = useState(readValue);

  const setStoredValue = useCallback(
    (next) => {
      try {
        const nextValue = typeof next === "function" ? next(value) : next;
        setValue(nextValue);
        window.localStorage.setItem(key, JSON.stringify(nextValue));
      } catch {
        // ignore
      }
    },
    [key, value]
  );

  return [value, setStoredValue];
}
