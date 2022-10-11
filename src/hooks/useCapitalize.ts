import { useCallback } from "react";

export const useCapitalize = (status: string) => {
  const capitalLetter = useCallback((string: string) => {
    return string.trim().replace(/^\w/, (c) => c.toUpperCase());
  }, []);

  return capitalLetter(status);
};
