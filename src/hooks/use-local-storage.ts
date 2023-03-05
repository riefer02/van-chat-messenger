import { useState, useEffect } from "react";

type UseLocalStorageStateReturnType<T> = [T, (newValue: T) => void];

function useLocalStorageState<T>(
  key: string,
  initialValue: T
): UseLocalStorageStateReturnType<T> {
  const [state, setState] = useState<T>(
    () =>
      JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue)) as T
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;
