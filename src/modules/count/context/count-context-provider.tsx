import { PropsWithChildren, useState } from "react";
import { createStore } from "zustand";
import { CountContext } from "./count-context";


type CountContextProps = PropsWithChildren & {
  initialCount?: number
}

export function CountProvider({ children, initialCount = 0 }: CountContextProps) {
  const [store] = useState(() => createStore<CountStore>((set) => ({
    count: initialCount,
    increment: () => set((state) => ({ count: state.count + 1 }))
  })))

  return (
    <CountContext.Provider value={store}>{children}</CountContext.Provider>
  )
}