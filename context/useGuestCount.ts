import { create } from "zustand";
import { persist } from 'zustand/middleware'
import { GuestCounts } from "@/types/types";


interface GuestStore {
    guestCounts: GuestCounts
    addGuest: (item: GuestCounts) => void
  }

  const defaultGuestCounts: GuestCounts = {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  };


const useGuestCount = create<GuestStore>()(
    persist(
        (set) => ({
            guestCounts: defaultGuestCounts ,
            addGuest: (item) => set((state) => ({
                guestCounts: item
            })),}),
        {
            name: 'guest-storage',
            storage: {
                getItem: (name) => {
                    const str = sessionStorage.getItem(name);
                    return str ? JSON.parse(str) : null;
                },
                setItem: (name, value) => sessionStorage.setItem(name, JSON.stringify(value)),
                removeItem: (name) => sessionStorage.removeItem(name),
            },
        }
    )
  )


  export default useGuestCount