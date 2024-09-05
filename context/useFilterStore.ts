import { create } from "zustand";
import { LocationType } from "@/types/types";

interface LocationState {
  storedLocation: LocationType | null;
  setStoredLocation: (location: LocationType | null) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  storedLocation: null,
  setStoredLocation: (location) => set({ storedLocation: location }),
}));