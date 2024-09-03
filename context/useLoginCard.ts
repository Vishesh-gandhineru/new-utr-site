import { create } from "zustand";

type LoginCardStore = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};


export const useLoginCardOpen = create<LoginCardStore>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}));
