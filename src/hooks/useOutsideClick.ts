import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (event: Event) => void
): void {
  useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking inside the ref element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      callback(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, callback])
}

export default useOutsideClick
