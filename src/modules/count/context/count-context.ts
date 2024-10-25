import { createContext } from "react";
import { StoreApi } from "zustand";

export const CountContext = createContext<StoreApi<CountStore> | undefined>(undefined)
