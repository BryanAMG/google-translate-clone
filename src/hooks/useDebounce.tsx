import { useEffect, useState } from 'react'

// la T es donde el usuario nos diga cual sera el type
export function useDebounce<T> (value: T, delay = 500) {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => { clearInterval(timer) }
  }, [value, delay])
  return debounceValue
}
