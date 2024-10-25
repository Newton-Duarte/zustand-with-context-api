import { useContext } from "react"
import { useStore } from "zustand"
import { CountContext } from "../context/count-context"

export function useCountStore<T>(selector: (state: CountStore) => T) {
  const countContext = useContext(CountContext)

  if (!countContext) {
    throw new Error('CountContext.Provider is missing')
  }

  return useStore(countContext, selector)
}