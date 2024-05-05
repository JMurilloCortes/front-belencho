import {create} from "zustand"

export const useStateProductDetail = create((set)=>({
  item: [],
  setItem: (newResult) => set({item: newResult})
}))