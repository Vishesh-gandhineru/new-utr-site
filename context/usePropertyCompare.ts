"use client"
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Define the shape of a comparable item
interface CompareItem {
    propertyId: string | number
    name: string
    images: { displayPriority: number; url: string; type: string; _id: string }[]
    address: string
    city: string
    state: string
    country: string
    slug: string
}

// Define the shape of our compare store
interface CompareStore {
  compareItems: CompareItem[]
  addToCompare: (item: CompareItem) => void
  removeFromCompare: (itemId: string | number) => void
  isInCompare: (itemId: string | number) => boolean
  clearCompare: () => void
  getCompareCount: () => number
}

const MAX_COMPARE_ITEMS = 4

const useCompareProperty= create<CompareStore>()(
  persist(
    (set, get) => ({
      compareItems: [],
      addToCompare: (item) => set((state) => {
        if (state.compareItems.length < MAX_COMPARE_ITEMS) {
          return { compareItems: [...state.compareItems, item] }
        }
        return state // Don't add if we've reached the maximum
      }),
      removeFromCompare: (itemId) => set((state) => ({
        compareItems: state.compareItems.filter((item) => item.propertyId !== itemId)
      })),
      isInCompare: (itemId) => 
        get().compareItems.some((item) => item.propertyId === itemId),
      clearCompare: () => set({ compareItems: [] }),
      getCompareCount: () => get().compareItems.length,
    }),
    {
      name: 'compare-storage', // name of the item in the storage (must be unique)
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          return str ? JSON.parse(str) : null;
        },
        setItem: (name, value) => localStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
)

export default useCompareProperty