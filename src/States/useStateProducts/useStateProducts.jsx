import {create} from "zustand"

export const useStateProducts = create((set)=>({
  resultado: [],
  setResultado: (newResult) => set({resultado: newResult})
}))