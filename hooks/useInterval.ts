import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)
  const idTimeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const tick = () => {
      savedCallback.current();
      idTimeout.current = setTimeout(tick,delay)
    }

    idTimeout.current = setTimeout(tick,delay)

    return () => clearTimeout(idTimeout.current)
  }, [delay])
}