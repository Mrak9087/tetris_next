import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<Function>();
  const intervalId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    if (delay !== null) {
      intervalId.current = setInterval(tick, delay);
      return () => clearInterval(intervalId.current);
    }
  }, [delay]);
}
